(function() {
	'use strict';

	const MINE_INTERVAL = 120;
	const TOTAL_STAGES = 9;

	let activeBlock = null;
	let audioCtx = null;
	let blocksDestroyed = 0;
	let currentStage = {};
	let destroyed = {};
	let holdTimer = null;
	let miningMode = false;
	let miningTimer = null;

	const blocksEl = document.getElementById('blocksDestroyed');
	const container = document.getElementById('errorContainer');
	const easterEgg = document.getElementById('easterEgg');
	const pickaxeEl = document.getElementById('pickaxe-cursor');
	const progressBar = document.getElementById('miningProgressBar');
	const progressWrap = document.getElementById('miningProgress');
	const statsEl = document.getElementById('miningStats');
	const subtitleEl = document.getElementById('errorSubtitle');
	const errorDescriptionEl = document.getElementById('errorDescription');
	const titleEl = document.getElementById('errorTitle');

	function activateMiningMode() {
		miningMode = true;
		container.classList.add('mining-active');
		titleEl.style.animation = 'titleChange 0.6s ease forwards';
		setTimeout(() => {
			titleEl.textContent = 'Mine Your Way Out!';
			titleEl.style.animation = '';
		}, 300);
		subtitleEl.style.animation = 'subtitleFade 0.6s ease forwards';
		setTimeout(() => {
			subtitleEl.textContent = 'Hold down on a block to mine it.';
			subtitleEl.style.animation = '';
		}, 300);
		easterEgg.classList.add('egg-active');
		playSound('activate');
	}

	function celebrateAllDestroyed() {
		playSound('victory');
		setTimeout(() => {
			titleEl.textContent = 'You mined the 404!';
			subtitleEl.textContent = '🎉 Achievement Unlocked: Block Breaker!';
			errorDescriptionEl.textContent = 'Thank you for playing Projekt City!';
			statsEl.style.display = 'flex';
			easterEgg.remove();
			disableMiningMode()
		}, 300);
	}

	function disableMiningMode() {
		if (!miningMode) return;
		miningMode = false;
		container.classList.remove('mining-active');
		pickaxeEl.style.display = 'none';
		stopMining();
	}

	function destroyBlock(id, block) {
		destroyed[id] = true;
		activeBlock = null;
		progressWrap.style.opacity = '0';
		progressBar.style.width = '0%';
		blocksDestroyed++;
		if (statsEl.style.display === 'none') statsEl.style.display = 'flex';
		blocksEl.textContent = blocksDestroyed;
		const rect = block.getBoundingClientRect();
		playSound('break');
		const parent = block.closest('.block-digit');
		parent.style.animation = 'blockDestroy 0.4s ease-in forwards';
		setTimeout(() => {
			parent.style.visibility = 'hidden';
			if (Object.values(destroyed).filter(v => !v).length === 0) {
				celebrateAllDestroyed();
			}
		}, 400);
	}

	document.addEventListener('mousemove', function(e) {
		if (!miningMode) return;
		pickaxeEl.style.left = e.clientX - 37.5 + 'px';
		pickaxeEl.style.top = e.clientY - 37.5 + 'px';
		pickaxeEl.style.display = 'block';
	});

	document.querySelectorAll('.mineable-block').forEach(function(block) {
		const id = block.dataset.block;
		currentStage[id] = 0;
		destroyed[id] = false;
		block.querySelectorAll('.cube-face').forEach(f => f.classList.add('stage_0'));

		block.addEventListener('mousedown', function(e) {
			if (!miningMode || destroyed[id]) return;
			e.preventDefault();
			startMining(id, block);
		});
		block.addEventListener('mouseup', stopMining);
		block.addEventListener('mouseleave', stopMining);

		block.addEventListener('touchstart', function(e) {
			if (!miningMode || destroyed[id]) return;
			e.preventDefault();
			startMining(id, block);
		}, {
			passive: false
		});
		block.addEventListener('touchend', stopMining);
	});

	easterEgg.addEventListener('click', function() {
		if (miningMode) {
			disableMiningMode();
		} else {
			activateMiningMode();
		}
	});

	easterEgg.addEventListener('mouseenter', function() {
		if (!miningMode) easterEgg.classList.add('egg-hint');
	});
	easterEgg.addEventListener('mouseleave', function() {
		easterEgg.classList.remove('egg-hint');
	});

	function doMiningTick(id, block) {
		if (destroyed[id]) return;
		currentStage[id] = Math.min(currentStage[id] + 1, TOTAL_STAGES);
		updateCracks(id);
		updateProgress(id);
		playSound('hit');
		const rect = block.getBoundingClientRect();
		if (currentStage[id] >= TOTAL_STAGES) {
			clearInterval(miningTimer);
			miningTimer = null;
			destroyBlock(id, block);
		}
	}

	function getAudio() {
		if (!audioCtx) audioCtx = new(window.AudioContext || window.webkitAudioContext)();
		return audioCtx;
	}

	function playSound(type) {
		try {
			const ctx = getAudio();
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.connect(gain);
			gain.connect(ctx.destination);
			switch (type) {
				case 'hit':
					osc.frequency.setValueAtTime(180 + Math.random() * 40, ctx.currentTime);
					osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);
					gain.gain.setValueAtTime(0.15, ctx.currentTime);
					gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
					osc.type = 'square';
					osc.start(ctx.currentTime);
					osc.stop(ctx.currentTime + 0.09);
					break;
				case 'break':
					osc.frequency.setValueAtTime(300, ctx.currentTime);
					osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.3);
					gain.gain.setValueAtTime(0.4, ctx.currentTime);
					gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
					osc.type = 'sawtooth';
					osc.start(ctx.currentTime);
					osc.stop(ctx.currentTime + 0.3);
					break;
				case 'activate':
					[440, 554, 659].forEach((freq, i) => {
						const o2 = ctx.createOscillator();
						const g2 = ctx.createGain();
						o2.connect(g2);
						g2.connect(ctx.destination);
						o2.frequency.value = freq;
						o2.type = 'square';
						g2.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.1);
						g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.15);
						o2.start(ctx.currentTime + i * 0.1);
						o2.stop(ctx.currentTime + i * 0.1 + 0.15);
					});
					return;
				case 'victory':
					[523, 659, 784, 1047].forEach((freq, i) => {
						const o2 = ctx.createOscillator();
						const g2 = ctx.createGain();
						o2.connect(g2);
						g2.connect(ctx.destination);
						o2.frequency.value = freq;
						o2.type = 'square';
						g2.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.12);
						g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.2);
						o2.start(ctx.currentTime + i * 0.12);
						o2.stop(ctx.currentTime + i * 0.12 + 0.2);
					});
					return;
			}
		} catch (e) {}
	}

	function startMining(id, block) {
		if (activeBlock === id) return;
		stopMining();
		activeBlock = id;
		progressWrap.style.opacity = '1';
		updateProgress(id);
		startSwing();
		doMiningTick(id, block);
		miningTimer = setInterval(function() {
			doMiningTick(id, block);
		}, MINE_INTERVAL);
	}

	function startSwing() {
		pickaxeEl.classList.add('swinging');
	}

	function stopMining() {
		if (miningTimer) {
			clearInterval(miningTimer);
			miningTimer = null;
		}
		if (holdTimer) {
			clearTimeout(holdTimer);
			holdTimer = null;
		}
		stopSwing();
		if (activeBlock !== null && !destroyed[activeBlock]) {
			const id = activeBlock;
			currentStage[id] = 0;
			const cube = document.querySelector('.mineable-block[data-block="' + id + '"]');
			if (cube) {
				cube.querySelectorAll('.cube-face').forEach(function(face) {
					for (let i = 0; i <= 9; i++) face.classList.remove('stage_' + i);
					face.classList.add('stage_0');
				});
			}
			setTimeout(() => {
				progressWrap.style.opacity = '0';
				progressBar.style.width = '0%';
			}, 300);
		}
		activeBlock = null;
	}

	function stopSwing() {
		pickaxeEl.classList.remove('swinging');
		void pickaxeEl.offsetWidth;
		pickaxeEl.style.transform = '';
	}

	function updateCracks(id) {
		const cube = document.querySelector('.mineable-block[data-block="' + id + '"]');
		if (!cube) return;
		const stage = currentStage[id];
		cube.querySelectorAll('.cube-face').forEach(function(face) {
			for (let i = 0; i <= 9; i++) face.classList.remove('stage_' + i);
			face.classList.add('stage_' + stage);
		});
	}

	function updateProgress(id) {
		progressBar.style.width = (currentStage[id] / TOTAL_STAGES * 100) + '%';
	}
})();

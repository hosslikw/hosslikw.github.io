const W = new WeakMap()

function D(o, t, e, s) {
	if (!o && !W.has(t)) return !1
	const i = W.get(t) ?? new WeakMap()
	W.set(t, i)
	const n = i.get(e) ?? new Set()
	i.set(e, n)
	const a = n.has(s)
	return o ? n.add(s) : n.delete(s), a && o
}

function St(o, t) {
	let e = o.target
	if ((e instanceof Text && (e = e.parentElement), e instanceof Element && o.currentTarget instanceof Element)) {
		const s = e.closest(t)
		if (s && o.currentTarget.contains(s)) return s
	}
}

function bt(o, t, e, s = {}) {
	const { signal: i, base: n = document } = s
	if (i?.aborted) return
	const { once: a, ...r } = s,
		c = n instanceof Document ? n.documentElement : n,
		u = !!(typeof s == "object" ? s.capture : s),
		l = (p) => {
			const m = St(p, o)
			if (m) {
				const v = Object.assign(p, {
					delegateTarget: m
				})
				e.call(c, v), a && (c.removeEventListener(t, l, r), D(!1, c, e, h))
			}
		},
		h = JSON.stringify({
			selector: o,
			type: t,
			capture: u
		})
	D(!0, c, e, h) || c.addEventListener(t, l, r),
		i?.addEventListener("abort", () => {
			D(!1, c, e, h)
		})
}

function g() {
	return (
		(g = Object.assign
			? Object.assign.bind()
			: function (o) {
				for (var t = 1; t < arguments.length; t++) {
					var e = arguments[t]
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s])
				}
				return o
			}),
		g.apply(this, arguments)
	)
}
const at = (o, t) =>
	String(o)
		.toLowerCase()
		.replace(/[\s/_.]+/g, "-")
		.replace(/[^\w-]+/g, "")
		.replace(/--+/g, "-")
		.replace(/^-+|-+$/g, "") ||
	t ||
	"",
	y = ({ hash: o } = {}) => location.pathname + location.search + (o ? location.hash : ""),
	kt = (o, t = {}) => {
		const e = g(
			{
				url: (o =
					o ||
					y({
						hash: !0
					})),
				random: Math.random(),
				source: "swup"
			},
			t
		)
		history.pushState(e, "", o)
	},
	q = (o = null, t = {}) => {
		o =
			o ||
			y({
				hash: !0
			})
		const e = g(
			{},
			history.state || {},
			{
				url: o,
				random: Math.random(),
				source: "swup"
			},
			t
		)
		history.replaceState(e, "", o)
	},
	Lt = (o, t, e, s) => {
		const i = new AbortController()
		return (
			(s = g({}, s, {
				signal: i.signal
			})),
			bt(o, t, e, s),
			{
				destroy: () => i.abort()
			}
		)
	}
let b = class V extends URL {
	constructor(t, e = document.baseURI) {
		super(t.toString(), e)
	}
	get url() {
		return this.pathname + this.search
	}
	static fromElement(t) {
		const e = t.getAttribute("href") || t.getAttribute("xlink:href") || ""
		return new V(e)
	}
	static fromUrl(t) {
		return new V(t)
	}
}
class Et {
	constructor(t) {
		; (this.swup = void 0), (this.pages = new Map()), (this.swup = t)
	}
	get size() {
		return this.pages.size
	}
	get all() {
		const t = new Map()
		return (
			this.pages.forEach((e, s) => {
				t.set(s, g({}, e))
			}),
			t
		)
	}
	has(t) {
		return this.pages.has(this.resolve(t))
	}
	get(t) {
		const e = this.pages.get(this.resolve(t))
		return e && g({}, e)
	}
	set(t, e) {
		; (e = g({}, e, {
			url: (t = this.resolve(t))
		})),
			this.pages.set(t, e),
			this.swup.hooks.callSync("cache:set", {
				page: e
			})
	}
	update(t, e) {
		t = this.resolve(t)
		const s = g({}, this.get(t), e, {
			url: t
		})
		this.pages.set(t, s)
	}
	delete(t) {
		this.pages.delete(this.resolve(t))
	}
	clear() {
		this.pages.clear(), this.swup.hooks.callSync("cache:clear", void 0)
	}
	prune(t) {
		this.pages.forEach((e, s) => {
			t(s, e) && this.delete(s)
		})
	}
	resolve(t) {
		const { url: e } = b.fromUrl(t)
		return this.swup.resolveUrl(e)
	}
}
const F = (o, t = document) => t.querySelector(o),
	x = (o, t = document) => Array.from(t.querySelectorAll(o)),
	lt = () =>
		new Promise((o) => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					o()
				})
			})
		})

function ct(o) {
	return !!o && (typeof o == "object" || typeof o == "function") && typeof o.then == "function"
}

function Tt(o, t = []) {
	return new Promise((e, s) => {
		const i = o(...t)
		ct(i) ? i.then(e, s) : e(i)
	})
}
const et = (o) => (window.CSS && window.CSS.escape ? CSS.escape(o) : o),
	ot = (o) => 1e3 * Number(o.slice(0, -1).replace(",", "."))
class Pt {
	constructor(t) {
		; (this.swup = void 0), (this.swupClasses = ["to-", "is-changing", "is-rendering", "is-popstate", "is-animating"]), (this.swup = t)
	}
	get selectors() {
		const { scope: t } = this.swup.visit.animation
		return t === "containers" ? this.swup.visit.containers : t === "html" ? ["html"] : Array.isArray(t) ? t : []
	}
	get selector() {
		return this.selectors.join(",")
	}
	get targets() {
		return this.selector.trim() ? x(this.selector) : []
	}
	add(...t) {
		this.targets.forEach((e) => e.classList.add(...t))
	}
	remove(...t) {
		this.targets.forEach((e) => e.classList.remove(...t))
	}
	clear() {
		this.targets.forEach((t) => {
			const e = t.className.split(" ").filter((s) => this.isSwupClass(s))
			t.classList.remove(...e)
		})
	}
	isSwupClass(t) {
		return this.swupClasses.some((e) => t.startsWith(e))
	}
}

function qt({ to: o, from: t = this.currentPageUrl, hash: e, el: s, event: i }) {
	return {
		id: Math.random(),
		from: {
			url: t
		},
		to: {
			url: o,
			hash: e
		},
		containers: this.options.containers,
		animation: {
			animate: !0,
			wait: !1,
			name: void 0,
			scope: this.options.animationScope,
			selector: this.options.animationSelector
		},
		trigger: {
			el: s,
			event: i
		},
		cache: {
			read: this.options.cache,
			write: this.options.cache
		},
		history: {
			action: "push",
			popstate: !1,
			direction: void 0
		},
		scroll: {
			reset: !0,
			target: void 0
		}
	}
}
class At {
	constructor(t) {
		; (this.swup = void 0),
			(this.registry = new Map()),
			(this.hooks = [
				"animation:out:start",
				"animation:out:await",
				"animation:out:end",
				"animation:in:start",
				"animation:in:await",
				"animation:in:end",
				"animation:skip",
				"cache:clear",
				"cache:set",
				"content:replace",
				"content:scroll",
				"enable",
				"disable",
				"fetch:request",
				"fetch:error",
				"history:popstate",
				"link:click",
				"link:self",
				"link:anchor",
				"link:newtab",
				"page:load",
				"page:view",
				"scroll:top",
				"scroll:anchor",
				"visit:start",
				"visit:end"
			]),
			(this.swup = t),
			this.init()
	}
	init() {
		this.hooks.forEach((t) => this.create(t))
	}
	create(t) {
		this.registry.has(t) || this.registry.set(t, new Map())
	}
	exists(t) {
		return this.registry.has(t)
	}
	get(t) {
		const e = this.registry.get(t)
		if (e) return e
		console.error(`Unknown hook '${t}'`)
	}
	clear() {
		this.registry.forEach((t) => t.clear())
	}
	on(t, e, s = {}) {
		const i = this.get(t)
		if (!i) return console.warn(`Hook '${t}' not found.`), () => { }
		const n = g({}, s, {
			id: i.size + 1,
			hook: t,
			handler: e
		})
		return i.set(e, n), () => this.off(t, e)
	}
	before(t, e, s = {}) {
		return this.on(
			t,
			e,
			g({}, s, {
				before: !0
			})
		)
	}
	replace(t, e, s = {}) {
		return this.on(
			t,
			e,
			g({}, s, {
				replace: !0
			})
		)
	}
	once(t, e, s = {}) {
		return this.on(
			t,
			e,
			g({}, s, {
				once: !0
			})
		)
	}
	off(t, e) {
		const s = this.get(t)
		s && e ? s.delete(e) || console.warn(`Handler for hook '${t}' not found.`) : s && s.clear()
	}
	async call(t, e, s) {
		const { before: i, handler: n, after: a } = this.getHandlers(t, s)
		await this.run(i, e)
		const [r] = await this.run(n, e)
		return await this.run(a, e), this.dispatchDomEvent(t, e), r
	}
	callSync(t, e, s) {
		const { before: i, handler: n, after: a } = this.getHandlers(t, s)
		this.runSync(i, e)
		const [r] = this.runSync(n, e)
		return this.runSync(a, e), this.dispatchDomEvent(t, e), r
	}
	async run(t, e) {
		const s = []
		for (const { hook: i, handler: n, defaultHandler: a, once: r } of t) {
			const c = await Tt(n, [this.swup.visit, e, a])
			s.push(c), r && this.off(i, n)
		}
		return s
	}
	runSync(t, e) {
		const s = []
		for (const { hook: i, handler: n, defaultHandler: a, once: r } of t) {
			const c = n(this.swup.visit, e, a)
			s.push(c),
				ct(c) && console.warn(`Promise returned from handler for synchronous hook '${i}'.Swup will not wait for it to resolve.`),
				r && this.off(i, n)
		}
		return s
	}
	getHandlers(t, e) {
		const s = this.get(t)
		if (!s)
			return {
				found: !1,
				before: [],
				handler: [],
				after: [],
				replaced: !1
			}
		const i = Array.from(s.values()),
			n = this.sortRegistrations,
			a = i.filter(({ before: h, replace: d }) => h && !d).sort(n),
			r = i
				.filter(({ replace: h }) => h)
				.filter((h) => !0)
				.sort(n),
			c = i.filter(({ before: h, replace: d }) => !h && !d).sort(n),
			u = r.length > 0
		let l = []
		if (
			e &&
			((l = [
				{
					id: 0,
					hook: t,
					handler: e
				}
			]),
				u)
		) {
			const h = r.length - 1,
				d = (p) => {
					const m = r[p - 1]
					return m ? (v, w) => m.handler(v, w, d(p - 1)) : e
				}
			l = [
				{
					id: 0,
					hook: t,
					handler: r[h].handler,
					defaultHandler: d(h)
				}
			]
		}
		return {
			found: !0,
			before: a,
			handler: l,
			after: c,
			replaced: u
		}
	}
	sortRegistrations(t, e) {
		var s, i
		return ((s = t.priority) != null ? s : 0) - ((i = e.priority) != null ? i : 0) || t.id - e.id || 0
	}
	dispatchDomEvent(t, e) {
		document.dispatchEvent(
			new CustomEvent(`swup:${t}`, {
				detail: {
					hook: t,
					args: e,
					visit: this.swup.visit
				}
			})
		)
	}
}
const xt = (o) => {
	if ((o && o.charAt(0) === "#" && (o = o.substring(1)), !o)) return null
	const t = decodeURIComponent(o)
	let e = document.getElementById(o) || document.getElementById(t) || F(`a[name='${et(o)}']`) || F(`a[name='${et(t)}']`)
	return e || o !== "top" || (e = document.body), e
},
	P = "transition",
	H = "animation"
async function Mt({ elements: o, selector: t }) {
	if (t === !1 && !o) return
	let e = []
	if (o) e = Array.from(o)
	else if (t && ((e = x(t, document.body)), !e.length)) return void console.warn(`[swup] No elements found matching animationSelector \`${t}\``)
	const s = e.map((i) =>
		(function (n) {
			const {
				type: a,
				timeout: r,
				propCount: c
			} = (function (u, l) {
				const h = window.getComputedStyle(u),
					d = O(h, `${P}Delay`),
					p = O(h, `${P}Duration`),
					m = st(d, p),
					v = O(h, `${H}Delay`),
					w = O(h, `${H}Duration`),
					f = st(v, w)
				let _ = null,
					B = 0,
					tt = 0
				return (
					(B = Math.max(m, f)),
					(_ = B > 0 ? (m > f ? P : H) : null),
					(tt = _ ? (_ === P ? p.length : w.length) : 0),
					{
						type: _,
						timeout: B,
						propCount: tt
					}
				)
			})(n)
			return (
				!(!a || !r) &&
				new Promise((u) => {
					const l = `${a}end`,
						h = performance.now()
					let d = 0
					const p = () => {
						n.removeEventListener(l, m), u()
					},
						m = (v) => {
							if (v.target === n) {
								if (
									!(function (w) {
										return [`${P}end`, `${H}end`].includes(w.type)
									})(v)
								)
									throw new Error("Not a transition or animation event.")
									; (performance.now() - h) / 1e3 < v.elapsedTime || (++d >= c && p())
							}
						}
					setTimeout(() => {
						d < c && p()
					}, r + 1),
						n.addEventListener(l, m)
				})
			)
		})(i)
	)
	s.filter(Boolean).length > 0 ? await Promise.all(s) : t && console.warn(`[swup] No CSS animation duration defined on elements matching \`${t}\``)
}

function O(o, t) {
	return (o[t] || "").split(", ")
}

function st(o, t) {
	for (; o.length < t.length;) o = o.concat(o)
	return Math.max(...t.map((e, s) => ot(e) + ot(o[s])))
}

function Ct(o, t = {}, e = {}) {
	if (typeof o != "string") throw new Error("swup.navigate() requires a URL parameter")
	if (
		this.shouldIgnoreVisit(o, {
			el: e.el,
			event: e.event
		})
	)
		return void (window.location.href = o)
	const { url: s, hash: i } = b.fromUrl(o)
		; (this.visit = this.createVisit(
			g({}, e, {
				to: s,
				hash: i
			})
		)),
			this.performNavigation(t)
}
async function _t(o = {}) {
	const t = this.visit,
		{ el: e } = t.trigger
		; (o.referrer = o.referrer || this.currentPageUrl), o.animate === !1 && (t.animation.animate = !1), t.animation.animate || this.classes.clear()
	const s = o.history || e?.getAttribute("data-swup-history") || void 0
	s && ["push", "replace"].includes(s) && (t.history.action = s)
	const i = o.animation || e?.getAttribute("data-swup-animation") || void 0
	var n, a
	i && (t.animation.name = i),
		typeof o.cache == "object"
			? ((t.cache.read = (n = o.cache.read) != null ? n : t.cache.read), (t.cache.write = (a = o.cache.write) != null ? a : t.cache.write))
			: o.cache !== void 0 &&
			(t.cache = {
				read: !!o.cache,
				write: !!o.cache
			}),
		delete o.cache
	try {
		await this.hooks.call("visit:start", void 0)
		const r = this.hooks.call(
			"page:load",
			{
				options: o
			},
			async (l, h) => {
				let d
				return l.cache.read && (d = this.cache.get(l.to.url)), (h.page = d || (await this.fetchPage(l.to.url, h.options))), (h.cache = !!d), h.page
			}
		)
		if (!t.history.popstate) {
			const l = t.to.url + t.to.hash
			t.history.action === "replace" || t.to.url === this.currentPageUrl
				? q(l)
				: (this.currentHistoryIndex++,
					kt(l, {
						index: this.currentHistoryIndex
					}))
		}
		if (((this.currentPageUrl = y()), t.animation.wait)) {
			const { html: l } = await r
			t.to.html = l
		}
		const c = this.animatePageOut(),
			[u] = await Promise.all([r, c])
		if (t.id !== this.visit.id) return
		await this.renderPage(u), await this.animatePageIn(), await this.hooks.call("visit:end", void 0, () => this.classes.clear())
	} catch (r) {
		if (!r) return
		console.error(r), (this.options.skipPopStateHandling = () => ((window.location.href = t.to.url + t.to.hash), !0)), window.history.go(-1)
	}
}
class it extends Error {
	constructor(t, e) {
		super(t), (this.url = void 0), (this.status = void 0), (this.name = "FetchError"), (this.url = e.url), (this.status = e.status)
	}
}
async function Ht(o, t = {}) {
	o = b.fromUrl(o).url
	const e = g({}, this.options.requestHeaders, t.headers)
	t = g({}, t, {
		headers: e
	})
	const s = await this.hooks.call(
		"fetch:request",
		{
			url: o,
			options: t
		},
		(u, { url: l, options: h }) => fetch(l, h)
	),
		{ status: i, url: n } = s,
		a = await s.text()
	if (i === 500)
		throw (
			(this.hooks.call("fetch:error", {
				status: i,
				response: s,
				url: n
			}),
				new it(`Server error: ${n}`, {
					status: i,
					url: n
				}))
		)
	if (!a)
		throw new it(`Empty response: ${n}`, {
			status: i,
			url: n
		})
	const { url: r } = b.fromUrl(n),
		c = {
			url: r,
			html: a
		}
	return !this.visit.cache.write || (t.method && t.method !== "GET") || o !== r || this.cache.set(c.url, c), c
}
const Ot = async function () {
	this.visit.animation.animate
		? (await this.hooks.call("animation:out:start", void 0, (o) => {
			this.classes.add("is-changing", "is-leaving", "is-animating"),
				o.history.popstate && this.classes.add("is-popstate"),
				o.animation.name && this.classes.add(`to-${at(o.animation.name)}`)
		}),
			await this.hooks.call(
				"animation:out:await",
				{
					skip: !1
				},
				async (o, { skip: t }) => {
					t ||
						(await this.awaitAnimations({
							selector: o.animation.selector
						}))
				}
			),
			await this.hooks.call("animation:out:end", void 0))
		: await this.hooks.call("animation:skip", void 0)
},
	Ut = function ({ html: o }, { containers: t } = this.options) {
		var e
		const s = new DOMParser().parseFromString(o, "text/html"),
			i = ((e = s.querySelector("title")) == null ? void 0 : e.innerText) || ""
		document.title = i
		const n = x('[data-swup-persist]:not([data-swup-persist=""])'),
			a = t
				.map((r) => {
					const c = document.querySelector(r),
						u = s.querySelector(r)
					return c && u
						? (c.replaceWith(u), !0)
						: (c || console.warn(`[swup] Container missing in current document: ${r}`),
							u || console.warn(`[swup] Container missing in incoming document: ${r}`),
							!1)
				})
				.filter(Boolean)
		return (
			n.forEach((r) => {
				const c = r.getAttribute("data-swup-persist"),
					u = F(`[data-swup-persist="${c}"]`)
				u && u !== r && u.replaceWith(r)
			}),
			a.length === t.length
		)
	},
	Yt = function () {
		const o = {
			behavior: "auto"
		},
			{ target: t, reset: e } = this.visit.scroll,
			s = t ?? this.visit.to.hash
		let i = !1
		return (
			s &&
			(i = this.hooks.callSync(
				"scroll:anchor",
				{
					hash: s,
					options: o
				},
				(n, { hash: a, options: r }) => {
					const c = this.getAnchorElement(a)
					return c && c.scrollIntoView(r), !!c
				}
			)),
			e &&
			!i &&
			(i = this.hooks.callSync(
				"scroll:top",
				{
					options: o
				},
				(n, { options: a }) => (
					window.scrollTo(
						g(
							{
								top: 0,
								left: 0
							},
							a
						)
					),
					!0
				)
			)),
			i
		)
	},
	$t = async function () {
		if (!this.visit.animation.animate) return
		const o = this.hooks.call(
			"animation:in:await",
			{
				skip: !1
			},
			async (t, { skip: e }) => {
				e ||
					(await this.awaitAnimations({
						selector: t.animation.selector
					}))
			}
		)
		await lt(),
			await this.hooks.call("animation:in:start", void 0, () => {
				this.classes.remove("is-animating")
			}),
			await o,
			await this.hooks.call("animation:in:end", void 0)
	},
	Rt = async function (o) {
		const { url: t, html: e } = o
		this.classes.remove("is-leaving"),
			this.isSameResolvedUrl(y(), t) || (q(t), (this.currentPageUrl = y()), (this.visit.to.url = this.currentPageUrl)),
			this.visit.animation.animate && this.classes.add("is-rendering"),
			(this.visit.to.html = e),
			await this.hooks.call(
				"content:replace",
				{
					page: o
				},
				(s, { page: i }) => {
					if (
						!this.replaceContent(i, {
							containers: s.containers
						})
					)
						throw new Error("[swup] Container mismatch, aborting")
					s.animation.animate &&
						(this.classes.add("is-animating", "is-changing", "is-rendering"), s.animation.name && this.classes.add(`to-${at(s.animation.name)}`))
				}
			),
			await this.hooks.call("content:scroll", void 0, () => this.scrollToContent()),
			await this.hooks.call("page:view", {
				url: this.currentPageUrl,
				title: document.title
			})
	},
	It = function (o) {
		var t
		if (((t = o), !!t?.isSwupPlugin)) {
			if (((o.swup = this), !o._checkRequirements || o._checkRequirements()))
				return o._beforeMount && o._beforeMount(), o.mount(), this.plugins.push(o), this.plugins
		} else console.error("Not a swup plugin instance", o)
	}

function jt(o) {
	const t = this.findPlugin(o)
	if (t) return t.unmount(), t._afterUnmount && t._afterUnmount(), (this.plugins = this.plugins.filter((e) => e !== t)), this.plugins
	console.error("No such plugin", t)
}

function Bt(o) {
	return this.plugins.find((t) => t === o || t.name === o || t.name === `Swup${String(o)}`)
}

function Wt(o) {
	if (typeof this.options.resolveUrl != "function") return console.warn("[swup] options.resolveUrl expects a callback function."), o
	const t = this.options.resolveUrl(o)
	return t && typeof t == "string"
		? t.startsWith("//") || t.startsWith("http")
			? (console.warn("[swup] options.resolveUrl needs to return a relative url"), o)
			: t
		: (console.warn("[swup] options.resolveUrl needs to return a url"), o)
}

function Dt(o, t) {
	return this.resolveUrl(o) === this.resolveUrl(t)
}
const Nt = {
	animateHistoryBrowsing: !1,
	animationSelector: '[class*="transition-"]',
	animationScope: "html",
	cache: !0,
	containers: ["#swup"],
	ignoreVisit: (o, { el: t } = {}) => !(t == null || !t.closest("[data-no-swup]")),
	linkSelector: "a[href]",
	linkToSelf: "scroll",
	plugins: [],
	resolveUrl: (o) => o,
	requestHeaders: {
		"X-Requested-With": "swup",
		"Accept": "text/html, application/xhtml+xml"
	},
	skipPopStateHandling: (o) => {
		var t
		return ((t = o.state) == null ? void 0 : t.source) !== "swup"
	}
}
class Vt {
	constructor(t = {}) {
		var e, s
			; (this.version = "4.3.4"),
				(this.options = void 0),
				(this.defaults = Nt),
				(this.plugins = []),
				(this.visit = void 0),
				(this.cache = void 0),
				(this.hooks = void 0),
				(this.classes = void 0),
				(this.currentPageUrl = y()),
				(this.currentHistoryIndex = void 0),
				(this.clickDelegate = void 0),
				(this.use = It),
				(this.unuse = jt),
				(this.findPlugin = Bt),
				(this.log = () => { }),
				(this.navigate = Ct),
				(this.performNavigation = _t),
				(this.createVisit = qt),
				(this.delegateEvent = Lt),
				(this.fetchPage = Ht),
				(this.awaitAnimations = Mt),
				(this.renderPage = Rt),
				(this.replaceContent = Ut),
				(this.animatePageIn = $t),
				(this.animatePageOut = Ot),
				(this.scrollToContent = Yt),
				(this.getAnchorElement = xt),
				(this.getCurrentUrl = y),
				(this.resolveUrl = Wt),
				(this.isSameResolvedUrl = Dt),
				(this.options = g({}, this.defaults, t)),
				(this.handleLinkClick = this.handleLinkClick.bind(this)),
				(this.handlePopState = this.handlePopState.bind(this)),
				(this.cache = new Et(this)),
				(this.classes = new Pt(this)),
				(this.hooks = new At(this)),
				(this.visit = this.createVisit({
					to: ""
				})),
				(this.currentHistoryIndex = (e = (s = history.state) == null ? void 0 : s.index) != null ? e : 1),
				this.checkRequirements() && this.enable()
	}
	checkRequirements() {
		return typeof Promise < "u" || (console.warn("Promise is not supported"), !1)
	}
	async enable() {
		var t
		const { linkSelector: e } = this.options
			; (this.clickDelegate = this.delegateEvent(e, "click", this.handleLinkClick)),
				window.addEventListener("popstate", this.handlePopState),
				this.options.animateHistoryBrowsing && (window.history.scrollRestoration = "manual"),
				this.options.plugins.forEach((s) => this.use(s)),
				((t = history.state) == null ? void 0 : t.source) !== "swup" &&
				q(null, {
					index: this.currentHistoryIndex
				}),
				await lt(),
				await this.hooks.call("enable", void 0, () => {
					document.documentElement.classList.add("swup-enabled")
				})
	}
	async destroy() {
		this.clickDelegate.destroy(),
			window.removeEventListener("popstate", this.handlePopState),
			this.cache.clear(),
			this.options.plugins.forEach((t) => this.unuse(t)),
			await this.hooks.call("disable", void 0, () => {
				document.documentElement.classList.remove("swup-enabled")
			}),
			this.hooks.clear()
	}
	shouldIgnoreVisit(t, { el: e, event: s } = {}) {
		const { origin: i, url: n, hash: a } = b.fromUrl(t)
		return (
			i !== window.location.origin ||
			!(!e || !this.triggerWillOpenNewWindow(e)) ||
			!!this.options.ignoreVisit(n + a, {
				el: e,
				event: s
			})
		)
	}
	handleLinkClick(t) {
		const e = t.delegateTarget,
			{ href: s, url: i, hash: n } = b.fromElement(e)
		this.shouldIgnoreVisit(s, {
			el: e,
			event: t
		}) ||
			((this.visit = this.createVisit({
				to: i,
				hash: n,
				el: e,
				event: t
			})),
				t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
					? this.hooks.call("link:newtab", {
						href: s
					})
					: t.button === 0 &&
					this.hooks.callSync(
						"link:click",
						{
							el: e,
							event: t
						},
						() => {
							var a
							const r = (a = this.visit.from.url) != null ? a : ""
							t.preventDefault(),
								i && i !== r
									? this.isSameResolvedUrl(i, r) || this.performNavigation()
									: n
										? this.hooks.callSync(
											"link:anchor",
											{
												hash: n
											},
											() => {
												q(i + n), this.scrollToContent()
											}
										)
										: this.hooks.callSync("link:self", void 0, () =>
											this.options.linkToSelf === "navigate" ? this.performNavigation() : (q(i), this.scrollToContent())
										)
						}
					))
	}
	handlePopState(t) {
		var e, s, i, n
		const a = (e = (s = t.state) == null ? void 0 : s.url) != null ? e : location.href
		if (this.options.skipPopStateHandling(t) || this.isSameResolvedUrl(y(), this.currentPageUrl)) return
		const { url: r, hash: c } = b.fromUrl(a)
			; (this.visit = this.createVisit({
				to: r,
				hash: c,
				event: t
			})),
				(this.visit.history.popstate = !0)
		const u = (i = (n = t.state) == null ? void 0 : n.index) != null ? i : 0
		u &&
			u !== this.currentHistoryIndex &&
			((this.visit.history.direction = u - this.currentHistoryIndex > 0 ? "forwards" : "backwards"), (this.currentHistoryIndex = u)),
			(this.visit.animation.animate = !1),
			(this.visit.scroll.reset = !1),
			(this.visit.scroll.target = !1),
			this.options.animateHistoryBrowsing && ((this.visit.animation.animate = !0), (this.visit.scroll.reset = !0)),
			this.hooks.callSync(
				"history:popstate",
				{
					event: t
				},
				() => {
					this.performNavigation()
				}
			)
	}
	triggerWillOpenNewWindow(t) {
		return !!t.matches('[download], [target="_blank"]')
	}
}

function A() {
	return (
		(A = Object.assign
			? Object.assign.bind()
			: function (o) {
				for (var t = 1; t < arguments.length; t++) {
					var e = arguments[t]
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s])
				}
				return o
			}),
		A.apply(this, arguments)
	)
}
const nt = (o) =>
	String(o)
		.split(".")
		.map((t) => String(parseInt(t || "0", 10)))
		.concat(["0", "0"])
		.slice(0, 3)
		.join(".")
let Ft = class {
	constructor() {
		; (this.isSwupPlugin = !0), (this.swup = void 0), (this.version = void 0), (this.requires = {}), (this.handlersToUnregister = [])
	}
	mount() { }
	unmount() {
		this.handlersToUnregister.forEach((t) => t()), (this.handlersToUnregister = [])
	}
	_beforeMount() {
		if (!this.name) throw new Error("You must define a name of plugin when creating a class.")
	}
	_afterUnmount() { }
	_checkRequirements() {
		return (
			typeof this.requires != "object" ||
			Object.entries(this.requires).forEach(([t, e]) => {
				if (
					!(function (s, i, n) {
						const a = (function (r, c) {
							var u
							if (r === "swup") return (u = c.version) != null ? u : ""
							{
								var l
								const h = c.findPlugin(r)
								return (l = h?.version) != null ? l : ""
							}
						})(s, n)
						return (
							!!a &&
							((r, c) =>
								c.every((u) => {
									const [, l, h] = u.match(/^([\D]+)?(.*)$/) || []
									var d, p
									return ((m, v) => {
										const w = {
											"": (f) => f === 0,
											">": (f) => f > 0,
											">=": (f) => f >= 0,
											"<": (f) => f < 0,
											"<=": (f) => f <= 0
										}
										return (w[v] || w[""])(m)
									})(
										((p = h),
											(d = nt((d = r))),
											(p = nt(p)),
											d.localeCompare(p, void 0, {
												numeric: !0
											})),
										l || ">="
									)
								}))(a, i)
						)
					})(t, (e = Array.isArray(e) ? e : [e]), this.swup)
				) {
					const s = `${t} ${e.join(", ")}`
					throw new Error(`Plugin version mismatch: ${this.name} requires ${s}`)
				}
			}),
			!0
		)
	}
	on(t, e, s = {}) {
		var i
		e = !(i = e).name.startsWith("bound ") || i.hasOwnProperty("prototype") ? e.bind(this) : e
		const n = this.swup.hooks.on(t, e, s)
		return this.handlersToUnregister.push(n), n
	}
	once(t, e, s = {}) {
		return this.on(
			t,
			e,
			A({}, s, {
				once: !0
			})
		)
	}
	before(t, e, s = {}) {
		return this.on(
			t,
			e,
			A({}, s, {
				before: !0
			})
		)
	}
	replace(t, e, s = {}) {
		return this.on(
			t,
			e,
			A({}, s, {
				replace: !0
			})
		)
	}
	off(t, e) {
		return this.swup.hooks.off(t, e)
	}
}

function K() {
	return (
		(K = Object.assign
			? Object.assign.bind()
			: function (o) {
				for (var t = 1; t < arguments.length; t++) {
					var e = arguments[t]
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s])
				}
				return o
			}),
		K.apply(this, arguments)
	)
}
class Kt {
	constructor(t) {
		; (this._raf = null),
			(this._positionY = 0),
			(this._velocityY = 0),
			(this._targetPositionY = 0),
			(this._targetPositionYWithOffset = 0),
			(this._direction = 0),
			(this.scrollTo = (e) => {
				if (e && e.nodeType) this._targetPositionY = Math.round(e.getBoundingClientRect().top + window.pageYOffset)
				else {
					if (parseInt(this._targetPositionY) !== this._targetPositionY) return void console.error("Argument must be a number or an element.")
					this._targetPositionY = Math.round(e)
				}
				this._targetPositionY > document.documentElement.scrollHeight - window.innerHeight &&
					(this._targetPositionY = document.documentElement.scrollHeight - window.innerHeight),
					(this._positionY = document.body.scrollTop || document.documentElement.scrollTop),
					(this._direction = this._positionY > this._targetPositionY ? -1 : 1),
					(this._targetPositionYWithOffset = this._targetPositionY + this._direction),
					(this._velocityY = 0),
					this._positionY !== this._targetPositionY ? (this.options.onStart(), this._animate()) : this.options.onAlreadyAtPositions()
			}),
			(this._animate = () => {
				this._update(),
					this._render(),
					(this._direction === 1 && this._targetPositionY > this._positionY) || (this._direction === -1 && this._targetPositionY < this._positionY)
						? ((this._raf = requestAnimationFrame(this._animate)), this.options.onTick())
						: ((this._positionY = this._targetPositionY), this._render(), (this._raf = null), this.options.onTick(), this.options.onEnd())
			}),
			(this._update = () => {
				const e = this._targetPositionYWithOffset - this._positionY
				return (
					(this._velocityY += e * this.options.acceleration),
					(this._velocityY *= this.options.friction),
					(this._positionY += this._velocityY),
					Math.abs(e)
				)
			}),
			(this._render = () => {
				window.scrollTo(0, this._positionY)
			}),
			(this.options = K(
				{},
				{
					onAlreadyAtPositions: () => { },
					onCancel: () => { },
					onEnd: () => { },
					onStart: () => { },
					onTick: () => { },
					friction: 0.7,
					acceleration: 0.04
				},
				t
			)),
			t && t.friction && (this.options.friction = 1 - t.friction),
			window.addEventListener(
				"mousewheel",
				(e) => {
					this._raf && (this.options.onCancel(), cancelAnimationFrame(this._raf), (this._raf = null))
				},
				{
					passive: !0
				}
			)
	}
}

function z() {
	return (
		(z = Object.assign
			? Object.assign.bind()
			: function (o) {
				for (var t = 1; t < arguments.length; t++) {
					var e = arguments[t]
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s])
				}
				return o
			}),
		z.apply(this, arguments)
	)
}
class zt extends Ft {
	constructor(t = {}) {
		super(),
			(this.name = "SwupScrollPlugin"),
			(this.requires = {
				swup: ">=4.2.0"
			}),
			(this.scrl = void 0),
			(this.defaults = {
				doScrollingRightAway: !1,
				animateScroll: {
					betweenPages: !0,
					samePageWithHash: !0,
					samePage: !0
				},
				scrollFriction: 0.3,
				scrollAcceleration: 0.04,
				getAnchorElement: void 0,
				offset: 0,
				scrollContainers: "[data-swup-scroll-container]",
				shouldResetScrollPosition: () => !0,
				markScrollTarget: !1
			}),
			(this.options = void 0),
			(this.cachedScrollPositions = {}),
			(this.previousScrollRestoration = void 0),
			(this.currentCacheKey = void 0),
			(this.getAnchorElement = (e = "") =>
				typeof this.options.getAnchorElement == "function" ? this.options.getAnchorElement(e) : this.swup.getAnchorElement(e)),
			(this.getOffset = (e) =>
				e ? (typeof this.options.offset == "function" ? parseInt(String(this.options.offset(e)), 10) : parseInt(String(this.options.offset), 10)) : 0),
			(this.onBeforeLinkToSelf = (e) => {
				e.scroll.animate = this.shouldAnimate("samePage")
			}),
			(this.handleScrollToTop = (e) => {
				var s, i
				return (s = (i = this.swup).scrollTo) == null || s.call(i, 0, e.scroll.animate), !0
			}),
			(this.onBeforeLinkToAnchor = (e) => {
				e.scroll.animate = this.shouldAnimate("samePageWithHash")
			}),
			(this.handleScrollToAnchor = (e, { hash: s }) => this.maybeScrollToAnchor(s, e.scroll.animate)),
			(this.onBeforeVisitStart = (e) => {
				; (e.scroll.scrolledToContent = !1), (e.scroll.animate = this.shouldAnimate("betweenPages"))
			}),
			(this.onVisitStart = (e) => {
				var s
				this.cacheScrollPositions(e.from.url), this.maybeResetScrollPositions(e)
				const i = (s = e.scroll.target) != null ? s : e.to.hash
				e.scroll.animate && this.options.doScrollingRightAway && !i && this.doScrollingBetweenPages(e)
			}),
			(this.handleScrollToContent = (e) => {
				e.scroll.scrolledToContent || this.doScrollingBetweenPages(e), this.restoreScrollContainers(e.to.url)
			}),
			(this.doScrollingBetweenPages = (e) => {
				var s, i
				if (e.history.popstate && !e.animation.animate) return
				const n = (s = e.scroll.target) != null ? s : e.to.hash
				if ((n && this.maybeScrollToAnchor(n, e.scroll.animate)) || !e.scroll.reset) return
				const a = this.getCachedScrollPositions(e.to.url),
					r = (a == null || (i = a.window) == null ? void 0 : i.top) || 0
				requestAnimationFrame(() => {
					var c, u
					return (c = (u = this.swup).scrollTo) == null ? void 0 : c.call(u, r, e.scroll.animate)
				}),
					(e.scroll.scrolledToContent = !0)
			}),
			(this.maybeResetScrollPositions = (e) => {
				const { popstate: s } = e.history,
					{ url: i } = e.to,
					{ el: n } = e.trigger
				s || (n && !this.options.shouldResetScrollPosition(n)) || this.resetScrollPositions(i)
			}),
			(this.options = z({}, this.defaults, t))
	}
	mount() {
		const t = this.swup
		t.hooks.create("scroll:start"),
			t.hooks.create("scroll:end"),
			(this.scrl = new Kt({
				onStart: () => t.hooks.callSync("scroll:start", void 0),
				onEnd: () => t.hooks.callSync("scroll:end", void 0),
				onCancel: () => t.hooks.callSync("scroll:end", void 0),
				friction: this.options.scrollFriction,
				acceleration: this.options.scrollAcceleration
			})),
			(t.scrollTo = (e, s = !0) => {
				s ? this.scrl.scrollTo(e) : (t.hooks.callSync("scroll:start", void 0), window.scrollTo(0, e), t.hooks.callSync("scroll:end", void 0))
			}),
			(this.previousScrollRestoration = window.history.scrollRestoration),
			t.options.animateHistoryBrowsing && (window.history.scrollRestoration = "manual"),
			(this.updateScrollTarget = this.updateScrollTarget.bind(this)),
			this.options.markScrollTarget &&
			(window.addEventListener("popstate", this.updateScrollTarget),
				window.addEventListener("hashchange", this.updateScrollTarget),
				this.on("page:view", this.updateScrollTarget),
				this.on("link:anchor", this.updateScrollTarget),
				this.on("link:self", this.updateScrollTarget),
				this.updateScrollTarget()),
			this.before("visit:start", this.onBeforeVisitStart, {
				priority: -1
			}),
			this.on("visit:start", this.onVisitStart, {
				priority: 1
			}),
			this.replace("content:scroll", this.handleScrollToContent),
			this.before("link:self", this.onBeforeLinkToSelf, {
				priority: -1
			}),
			this.replace("scroll:top", this.handleScrollToTop),
			this.before("link:anchor", this.onBeforeLinkToAnchor, {
				priority: -1
			}),
			this.replace("scroll:anchor", this.handleScrollToAnchor)
	}
	unmount() {
		super.unmount(),
			this.previousScrollRestoration && (window.history.scrollRestoration = this.previousScrollRestoration),
			window.removeEventListener("popstate", this.updateScrollTarget),
			window.removeEventListener("hashchange", this.updateScrollTarget),
			(this.cachedScrollPositions = {}),
			delete this.swup.scrollTo,
			delete this.scrl
	}
	shouldAnimate(t) {
		return typeof this.options.animateScroll == "boolean" ? this.options.animateScroll : this.options.animateScroll[t]
	}
	maybeScrollToAnchor(t, e = !1) {
		var s, i
		if (!t) return !1
		const n = this.getAnchorElement(t)
		if (!n) return console.warn(`Anchor target ${t} not found`), !1
		if (!(n instanceof Element)) return console.warn(`Anchor target ${t} is not a DOM node`), !1
		const { top: a } = n.getBoundingClientRect(),
			r = a + window.scrollY - this.getOffset(n)
		return (s = (i = this.swup).scrollTo) == null || s.call(i, r, e), !0
	}
	cacheScrollPositions(t) {
		const e = this.swup.resolveUrl(t),
			s = x(this.options.scrollContainers).map((n) => ({
				top: n.scrollTop,
				left: n.scrollLeft
			})),
			i = {
				window: {
					top: window.scrollY,
					left: window.scrollX
				},
				containers: s
			}
		this.cachedScrollPositions[e] = i
	}
	resetScrollPositions(t) {
		const e = this.swup.resolveUrl(t)
		delete this.cachedScrollPositions[e]
	}
	getCachedScrollPositions(t) {
		const e = this.swup.resolveUrl(t)
		return this.cachedScrollPositions[e]
	}
	restoreScrollContainers(t) {
		const e = this.getCachedScrollPositions(t)
		e &&
			e.containers.length !== 0 &&
			x(this.options.scrollContainers).forEach((s, i) => {
				const n = e.containers[i]
				n != null && ((s.scrollTop = n.top), (s.scrollLeft = n.left))
			})
	}
	updateScrollTarget() {
		var t
		const { hash: e } = window.location,
			s = document.querySelector("[data-swup-scroll-target]")
		let i = this.getAnchorElement(e)
		i instanceof HTMLBodyElement && (i = null),
			s !== i && (s?.removeAttribute("data-swup-scroll-target"), (t = i) == null || t.setAttribute("data-swup-scroll-target", ""))
	}
}
const Xt = {
	containers: ["#page"],
	linkSelector:
		'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup]), a[data-swup]',
	plugins: [new zt()]
},
	C = new Vt(Xt)
C.hooks.on("visit:end", () => {
	const o = document.querySelector(".page-transition")
	if (o) {
		const t = document.querySelector(".specifics.css-image")
		t && t.classList.add("show"),
			setTimeout(() => {
				o.parentNode.removeChild(o)
			}, 200)
	}
})
C.hooks.on("visit:start", () => {
	L.classList.remove("active"),
		document.body.classList.remove("mobile-menu-open"),
		k.classList.contains("show") &&
		(k.classList.remove("show"),
			document.querySelector(".mobile-menu-box-animate").classList.remove("animate-in"),
			document.querySelector(".mobile-menu-box-animate").classList.add("animate-out"),
			setTimeout(() => {
				document.querySelector(".mobile-menu-box-animate").classList.remove("animate-out")
			}, 600)),
		document.querySelector(".header-logo").classList.remove("menu-open")
})
C.hooks.on("content:replace", () => {
	Qt(), (E = 1)
})
const ht = () => {
	Jt()
},
	ut = (o) => {
		o.keyCode === 71 && o.ctrlKey === !0 && document.querySelector(".grid-overlay").classList.toggle("show")
	},
	J = () => {
		document.body.classList.toggle("dark-mode")
		let o = "light"
		const t = document.querySelectorAll(".toggle-mode")
		document.body.classList.contains("dark-mode")
			? ((o = "dark"),
				t.forEach((e) => {
					e.querySelector(".indicator > span").innerHTML = "Y"
				}))
			: t.forEach((e) => {
				e.querySelector(".indicator > span").innerHTML = "N"
			}),
			sessionStorage.setItem("theme", o)
	},
	Q = () => {
		document.body.classList.toggle("text-mode")
		let o = "off"
		const t = document.querySelectorAll(".toggle-text-mode")
		document.body.classList.contains("text-mode")
			? ((o = "on"),
				t.forEach((e) => {
					e.querySelector(".indicator > span").innerHTML = "Y"
				}))
			: t.forEach((e) => {
				e.querySelector(".indicator > span").innerHTML = "N"
			}),
			sessionStorage.setItem("textMode", o)
	},
	Z = () => {
		document.body.classList.toggle("mono-mode")
		let o = "off"
		const t = document.querySelectorAll(".toggle-mono-mode")
		document.body.classList.contains("mono-mode")
			? ((o = "on"),
				t.forEach((e) => {
					e.querySelector(".indicator > span").innerHTML = "Y"
				}))
			: t.forEach((e) => {
				e.querySelector(".indicator > span").innerHTML = "N"
			}),
			sessionStorage.setItem("monoMode", o)
	},
	L = document.querySelector(".mobile-menu"),
	k = document.querySelector(".mobile-menu-box"),
	dt = () => {
		L.classList.toggle("active"),
			document.body.classList.toggle("mobile-menu-open"),
			k.classList.toggle("show"),
			document.querySelector(".mobile-menu-box-animate").style.setProperty("--targetHeight", k.clientHeight + "px"),
			k.classList.contains("show")
				? (document.querySelector(".mobile-menu-box-animate").classList.remove("animate-out"),
					document.querySelector(".mobile-menu-box-animate").classList.add("animate-in"))
				: (document.querySelector(".mobile-menu-box-animate").classList.remove("animate-in"),
					document.querySelector(".mobile-menu-box-animate").classList.add("animate-out"),
					setTimeout(() => {
						document.querySelector(".mobile-menu-box-animate").classList.remove("animate-out")
					}, 600)),
			document.querySelector(".header-logo").classList.toggle("menu-open")
	},
	mt = (o) => {
		o.keyCode === 68 && J(), o.keyCode === 84 && Q(), o.keyCode === 77 && Z()
	},
	rt = document.querySelectorAll("header ul li"),
	pt = (o) => {
		const t = o.currentTarget.getAttribute("href"),
			e = document.querySelector("#page"),
			s = document.createElement("div")
		s.classList.add("page-transition"), e.parentNode.insertBefore(s, e.nextSibling)
		const i = o.currentTarget.querySelector(".frame")
		s.appendChild(i.querySelector("img")), (i.style.opacity = "0")
		const n = o.currentTarget.getAttribute("style")
		s.setAttribute("style", n)
		const a = i.getBoundingClientRect().top,
			r = i.getBoundingClientRect().left,
			c = i.getBoundingClientRect().width
		return (
			(s.style.top = a + "px"), (s.style.left = r + "px"), (s.style.width = c + "px"), s.classList.add("animate"), C.navigate(t), o.preventDefault(), !1
		)
	},
	T = document.querySelector(".header-logo"),
	I = document.querySelectorAll(".header-logo svg")
let M = T.clientHeight + T.scrollTop,
	gt = T.querySelector("svg").clientHeight
const X = () => {
	if (window.innerWidth > 768) {
		let o = (document.body.scrollTop + document.documentElement.scrollTop) / M,
			t = 36 + (gt - 36) * (1 - o)
		o > 0 && o <= 1
			? I.forEach((e) => {
				e.style.height = t + "px"
			})
			: o > 1
				? I.forEach((e) => {
					e.style.height = "36px"
				})
				: o == 0 &&
				I.forEach((e) => {
					e.style.height = "auto"
				})
	}
},
	ft = document.documentElement,
	vt = window
let N = vt.scrollY || ft.scrollTop,
	S,
	U = 0,
	G = 0
const j = document.querySelector("header"),
	wt = () => {
		; (S = vt.scrollY || ft.scrollTop),
			S > N ? (U = 2) : S < N && (U = 1),
			S > M && U !== G && Gt(U, S),
			S > M ? j.classList.add("scrolled") : j.classList.remove("scrolled"),
			(N = S)
	},
	Gt = (o, t) => {
		o === 2 && t > M
			? (j.classList.add("hide"),
				(G = o),
				L.classList.remove("active"),
				document.body.classList.remove("mobile-menu-open"),
				k.classList.contains("show") &&
				(k.classList.remove("show"),
					document.querySelector(".mobile-menu-box-animate").classList.remove("animate-in"),
					document.querySelector(".mobile-menu-box-animate").classList.add("animate-out"),
					setTimeout(() => {
						document.querySelector(".mobile-menu-box-animate").classList.remove("animate-out")
					}, 600)),
				document.querySelector(".header-logo").classList.remove("menu-open"))
			: o === 1 && (j.classList.remove("hide"), (G = o))
	}
let E = 1
const yt = () => {
	wt(), (E = 1)
},
	Jt = () => {
		rt.forEach((l) => {
			l.classList.remove("active")
		})
		let o = document.querySelector("main").getAttribute("data-page")
		rt.forEach((l) => {
			l.getAttribute("data-page") === o && l.classList.add("active")
		}),
			document.addEventListener("keydown", ut)
		const t = document.querySelectorAll(".toggle-mode")
		t &&
			t.forEach((l) => {
				l.addEventListener("click", J)
			})
		const e = document.querySelectorAll(".toggle-text-mode")
		e &&
			e.forEach((l) => {
				l.addEventListener("click", Q)
			})
		const s = document.querySelectorAll(".toggle-mono-mode")
		s &&
			s.forEach((l) => {
				l.addEventListener("click", Z)
			}),
			L && L.addEventListener("click", dt),
			document.addEventListener("keyup", mt)
		const i = () => {
			let l = window.innerWidth,
				h = window.innerHeight
			const d = document.querySelector(".screen-res"),
				p = document.querySelector(".system-os")
			d.innerHTML = l + "x" + h
			let m = "UnknownOS"
			navigator.appVersion.indexOf("Win") != -1 && (m = "Windows"),
				navigator.appVersion.indexOf("iPhone") != -1 && (m = "iOS"),
				navigator.appVersion.indexOf("Macintosh") != -1 && (m = "macOS"),
				navigator.appVersion.indexOf("X11") != -1 && (m = "UNIX"),
				navigator.appVersion.indexOf("Linux") != -1 && (m = "Linux"),
				(p.innerHTML = m)
		}
		i(), window.addEventListener("scroll", yt), X(), window.addEventListener("scroll", X)
		const n = () => {
			i(), (E = 1), (M = T.clientHeight + T.scrollTop), (gt = T.querySelector("svg").clientHeight)
		}
		var a
		window.onresize = () => {
			I.forEach((l) => {
				l.style.height = "auto"
			}),
				clearTimeout(a),
				(a = setTimeout(n, 150))
		}
		let r = new IntersectionObserver(
			(l, h) => {
				l.forEach((d) => {
					d.isIntersecting
						? (d.target.classList.add("has-been-seen"),
							d.target.classList.add("active"),
							d.target.style.setProperty("--i", E),
							setTimeout(
								() => {
									d.target.classList.add("animation-complete")
								},
								E * 80 + 1e3
							),
							E++)
						: d.target.classList.remove("active")
				})
			},
			{
				rootMargin: "0px 0px -170px 0px"
			}
		)
		document.querySelectorAll(".reveal").forEach((l) => {
			r.observe(l)
		}),
			wt()
		const u = document.querySelectorAll(".projects a.project")
		u &&
			u.forEach((l) => {
				l.addEventListener("click", pt)
			})
	},
	Qt = () => {
		document.removeEventListener("keydown", ut)
		const o = document.querySelectorAll(".toggle-mode")
		o &&
			o.forEach((i) => {
				i.removeEventListener("click", J)
			})
		const t = document.querySelectorAll(".toggle-text-mode")
		t &&
			t.forEach((i) => {
				i.removeEventListener("click", Q)
			})
		const e = document.querySelectorAll(".toggle-mono-mode")
		e &&
			e.forEach((i) => {
				i.removeEventListener("click", Z)
			}),
			L && L.removeEventListener("click", dt),
			document.removeEventListener("keyup", mt)
		const s = document.querySelectorAll(".projects a.project")
		s &&
			s.forEach((i) => {
				i.removeEventListener("click", pt)
			}),
			window.removeEventListener("scroll", yt),
			window.removeEventListener("scroll", X)
	}
document.addEventListener("DOMContentLoaded", () => {
	const o = document.querySelector(".specifics.css-image")
	o && o.classList.add("show"),
		setTimeout(() => {
			document.querySelectorAll(".hide-letter").forEach((e) => {
				e.classList.add("hide")
			})
		}, 2e3),
		ht()
})
C.hooks.on("page:view", ht)
const Y = sessionStorage.getItem("theme")
Y && Y == "dark"
	? (document.body.classList.add("dark-mode"),
		document.addEventListener("DOMContentLoaded", () => {
			document.querySelectorAll(".toggle-mode").forEach((t) => {
				t.querySelector(".indicator > span").innerHTML = "Y"
			})
		}))
	: Y && Y == "light" && document.body.classList.remove("dark-mode")
const $ = sessionStorage.getItem("textMode")
$ && $ == "on"
	? (document.body.classList.add("text-mode"),
		document.addEventListener("DOMContentLoaded", () => {
			document.querySelectorAll(".toggle-text-mode").forEach((t) => {
				t.querySelector(".indicator > span").innerHTML = "Y"
			})
		}))
	: $ && $ == "off" && document.body.classList.remove("text-mode")
const R = sessionStorage.getItem("monoMode")
R && R == "on"
	? (document.body.classList.add("mono-mode"),
		document.addEventListener("DOMContentLoaded", () => {
			document.querySelectorAll(".toggle-mono-mode").forEach((t) => {
				t.querySelector(".indicator > span").innerHTML = "Y"
			})
		}))
	: R && R == "off" && document.body.classList.remove("mono-mode")

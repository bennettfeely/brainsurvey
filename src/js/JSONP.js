// JSONP by larryosborn
// https://github.com/larryosborn/JSONP
(function() {
	var e, n, r, o, t, l, u, d;
	(r = function(e) {
		return window.document.createElement(e);
	}),
		(o = window.encodeURIComponent),
		(u = Math.random),
		(e = function(e) {
			var o, l, u, i, a, c, f;
			if (
				(null == e && (e = {}),
				(c = {
					data: e.data || {},
					error: e.error || t,
					success: e.success || t,
					beforeSend: e.beforeSend || t,
					complete: e.complete || t,
					url: e.url || ""
				}),
				(c.computedUrl = n(c)),
				0 === c.url.length)
			)
				throw new Error("MissingUrl");
			return (
				(i = !1),
				c.beforeSend({}, c) !== !1 &&
					((u = e.callbackName || "callback"),
					(l = e.callbackFunc || "jsonp_" + d(15)),
					(o = c.data[u] = l),
					(window[o] = function(e) {
						return (
							(window[o] = null),
							c.success(e, c),
							c.complete(e, c)
						);
					}),
					(f = r("script")),
					(f.src = n(c)),
					(f.async = !0),
					(f.onerror = function(e) {
						return (
							c.error({ url: f.src, event: e }),
							c.complete({ url: f.src, event: e }, c)
						);
					}),
					(f.onload = f.onreadystatechange = function() {
						var e, n;
						if (
							!(
								i ||
								("loaded" !== (e = this.readyState) &&
									"complete" !== e)
							)
						)
							return (
								(i = !0),
								f
									? ((f.onload = f.onreadystatechange = null),
									  null != (n = f.parentNode) &&
											n.removeChild(f),
									  (f = null))
									: void 0
							);
					}),
					(a =
						window.document.getElementsByTagName("head")[0] ||
						window.document.documentElement),
					a.insertBefore(f, a.firstChild)),
				{
					abort: function() {
						return (
							(window[o] = function() {
								return (window[o] = null);
							}),
							(i = !0),
							(null != f
							? f.parentNode
							: void 0)
								? ((f.onload = f.onreadystatechange = null),
								  f.parentNode.removeChild(f),
								  (f = null))
								: void 0
						);
					}
				}
			);
		}),
		(t = function() {}),
		(n = function(e) {
			var n;
			return (
				(n = e.url),
				(n += e.url.indexOf("?") < 0 ? "?" : "&"),
				(n += l(e.data))
			);
		}),
		(d = function(e) {
			var n;
			for (n = ""; n.length < e; )
				n += u()
					.toString(36)
					.slice(2, 3);
			return n;
		}),
		(l = function(e) {
			var n, r, t;
			return (
				(n = (function() {
					var n;
					n = [];
					for (r in e) (t = e[r]), n.push(o(r) + "=" + o(t));
					return n;
				})()),
				n.join("&")
			);
		}),
		("undefined" != typeof define && null !== define
		? define.amd
		: void 0)
			? define(function() {
					return e;
			  })
			: ("undefined" != typeof module && null !== module
				? module.exports
				: void 0)
				? (module.exports = e)
				: (this.JSONP = e);
}.call(this));

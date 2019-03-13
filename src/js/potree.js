"use strict";

function BinaryHeap(a) {
    this.content = [];
    this.scoreFunction = a;
}
BinaryHeap.prototype = {
    push: function(a) {
        this.content.push(a);
        this.bubbleUp(this.content.length - 1);
    },
    pop: function() {
        var a = this.content[0],
            b = this.content.pop();
        0 < this.content.length && ((this.content[0] = b), this.sinkDown(0));
        return a;
    },
    remove: function(a) {
        for (var b = this.content.length, c = 0; c < b; c++)
            if (this.content[c] == a) {
                a = this.content.pop();
                if (c == b - 1) break;
                this.content[c] = a;
                this.bubbleUp(c);
                this.sinkDown(c);
                break;
            }
    },
    size: function() {
        return this.content.length;
    },
    bubbleUp: function(a) {
        for (var b = this.content[a], c = this.scoreFunction(b); 0 < a; ) {
            var e = Math.floor((a + 1) / 2) - 1,
                d = this.content[e];
            if (c >= this.scoreFunction(d)) break;
            this.content[e] = b;
            this.content[a] = d;
            a = e;
        }
    },
    sinkDown: function(a) {
        for (
            var b = this.content.length,
                c = this.content[a],
                e = this.scoreFunction(c);
            ;

        ) {
            var d = 2 * (a + 1),
                f = d - 1,
                g = null;
            if (f < b) {
                var k = this.scoreFunction(this.content[f]);
                k < e && (g = f);
            }
            d < b &&
                this.scoreFunction(this.content[d]) < (null == g ? e : k) &&
                (g = d);
            if (null == g) break;
            this.content[a] = this.content[g];
            this.content[g] = c;
            a = g;
        }
    }
};

function LRUItem(a) {
    this.next = this.previous = null;
    this.node = a;
}

function LRU() {
    this.last = this.first = null;
    this.items = {};
    this.numPoints = this.elements = 0;
}
LRU.prototype.size = function() {
    return this.elements;
};
LRU.prototype.contains = function(a) {
    return null == this.items[a.id];
};
LRU.prototype.touch = function(a) {
    if (a.loaded)
        if (null == this.items[a.id]) {
            var b = new LRUItem(a);
            b.previous = this.last;
            this.last = b;
            null !== b.previous && (b.previous.next = b);
            this.items[a.id] = b;
            this.elements++;
            null === this.first && (this.first = b);
            this.numPoints += a.numPoints;
        } else
            (b = this.items[a.id]),
                null === b.previous
                    ? null !== b.next &&
                      ((this.first = b.next),
                      (this.first.previous = null),
                      (b.previous = this.last),
                      (b.next = null),
                      (this.last = b),
                      (b.previous.next = b))
                    : null !== b.next &&
                      ((b.previous.next = b.next),
                      (b.next.previous = b.previous),
                      (b.previous = this.last),
                      (b.next = null),
                      (this.last = b),
                      (b.previous.next = b));
};
LRU.prototype.remove = function(a) {
    var b = this.items[a.id];
    b &&
        (1 === this.elements
            ? (this.last = this.first = null)
            : (b.previous ||
                  ((this.first = b.next), (this.first.previous = null)),
              b.next || ((this.last = b.previous), (this.last.next = null)),
              b.previous &&
                  b.next &&
                  ((b.previous.next = b.next), (b.next.previous = b.previous))),
        delete this.items[a.id],
        this.elements--,
        (this.numPoints -= a.numPoints));
};
LRU.prototype.getLRUItem = function() {
    return null === this.first ? null : this.first.node;
};
LRU.prototype.freeMemory = function() {
    if (!(1 >= this.elements))
        for (; this.numPoints > Potree.pointLoadLimit; )
            this.disposeDescendants(this.first.node);
};
LRU.prototype.disposeDescendants = function(a) {
    for (a = [a]; 0 < a.length; ) {
        var b = a.pop();
        b.dispose();
        this.remove(b);
        for (var c in b.children)
            b.children.hasOwnProperty(c) &&
                b.children[c].loaded &&
                a.push(b.children[c]);
    }
};
LRU.prototype.toString = function() {
    for (var a = "{ ", b = this.first; null !== b; )
        (a += b.node.id), null !== b.next && (a += ", "), (b = b.next);
    return (a = a + "}" + ("(" + this.size() + ")"));
};
class EnumItem {
    constructor(a) {
        for (var b of Object.keys(a)) this[b] = a[b];
    }
    inspect() {
        return `Enum(${this.name}: ${this.value})`;
    }
}
class Enum {
    constructor(a) {
        this.object = a;
        for (var b of Object.keys(a)) {
            var c = a[b];
            "object" === typeof c
                ? (c.name = b)
                : (c = {
                      name: b,
                      value: c
                  });
            this[b] = new EnumItem(c);
        }
    }
    fromValue(a) {
        for (var b of Object.keys(this.object))
            if (this[b].value === a) return this[b];
        throw Error(`No enum for value: ${a}`);
    }
}
class HelperUtils {
    static generateDataTexture(a, b, c) {
        var e = a * b,
            d = new Uint8Array(4 * a * b),
            f = Math.floor(255 * c.r),
            g = Math.floor(255 * c.g);
        c = Math.floor(255 * c.b);
        for (var k = 0; k < e; k++)
            (d[3 * k] = f), (d[3 * k + 1] = g), (d[3 * k + 2] = c);
        a = new THREE.DataTexture(d, a, b, THREE.RGBAFormat);
        a.needsUpdate = !0;
        a.magFilter = THREE.NearestFilter;
        return a;
    }
    static computeTransformedBoundingBox(a, b) {
        a = [
            new THREE.Vector3(a.min.x, a.min.y, a.min.z).applyMatrix4(b),
            new THREE.Vector3(a.min.x, a.min.y, a.min.z).applyMatrix4(b),
            new THREE.Vector3(a.max.x, a.min.y, a.min.z).applyMatrix4(b),
            new THREE.Vector3(a.min.x, a.max.y, a.min.z).applyMatrix4(b),
            new THREE.Vector3(a.min.x, a.min.y, a.max.z).applyMatrix4(b),
            new THREE.Vector3(a.min.x, a.max.y, a.max.z).applyMatrix4(b),
            new THREE.Vector3(a.max.x, a.max.y, a.min.z).applyMatrix4(b),
            new THREE.Vector3(a.max.x, a.min.y, a.max.z).applyMatrix4(b),
            new THREE.Vector3(a.max.x, a.max.y, a.max.z).applyMatrix4(b)
        ];
        b = new THREE.Box3();
        b.setFromPoints(a);
        return b;
    }
}

function VersionUtils(a) {
    this.version = a;
    var b = -1 === a.indexOf(".") ? a.length : a.indexOf(".");
    this.versionMajor = parseInt(a.substr(0, b));
    this.versionMinor = parseInt(a.substr(b + 1));
    0 === this.versionMinor.length && (this.versionMinor = 0);
}
VersionUtils.prototype.newerThan = function(a) {
    a = new VersionUtils(a);
    return this.versionMajor > a.versionMajor ||
        (this.versionMajor === a.versionMajor &&
            this.versionMinor > a.versionMinor)
        ? !0
        : !1;
};
VersionUtils.prototype.equalOrHigher = function(a) {
    a = new VersionUtils(a);
    return this.versionMajor > a.versionMajor ||
        (this.versionMajor === a.versionMajor &&
            this.versionMinor >= a.versionMinor)
        ? !0
        : !1;
};
VersionUtils.prototype.upTo = function(a) {
    return !this.newerThan(a);
};
class WorkerManager {
    constructor() {
        this.workers = [];
        for (var a = 0; 5 > a; a++) this.workers.push([]);
    }
    getWorker(a) {
        return 0 < this.workers[a].length
            ? this.workers[a].pop()
            : new Worker(Potree.workerPath + WorkerManager.URLS[a]);
    }
    returnWorker(a, b) {
        this.workers[a].push(b);
    }
    runTask(a, b, c, e) {
        var d = this,
            f = this.getWorker(a);
        f.onmessage = function(c) {
            b(c);
            d.returnWorker(a, f);
        };
        void 0 !== e ? f.postMessage(c, e) : f.postMessage(c);
    }
}
WorkerManager.BINARY_DECODER = 0;
WorkerManager.LAS_LAZ = 1;
WorkerManager.LAS_DECODER = 2;
WorkerManager.GREYHOUND = 3;
WorkerManager.DEM = 4;
WorkerManager.URLS = [
    "/workers/BinaryDecoderWorker.min.js",
    "/workers/LASLAZWorker.min.js",
    "/workers/LASDecoderWorker.min.js",
    "/workers/GreyhoundBinaryDecoderWorker.min.js",
    "/workers/DEMWorker.min.js"
];

function Potree() {}
Potree.getBasePath = function() {
    if (document.currentScript.src) {
        var a = new URL(document.currentScript.src + "/..").href;
        "/" === a.slice(-1) && (a = a.slice(0, -1));
        return a;
    }
    console.error(
        "Potree: Was unable to find its script path using document.currentScript."
    );
    return "";
};
Potree.workerPath = Potree.getBasePath();
Potree.maxNodesLoadGPUFrame = 20;
Potree.maxDEMLevel = 0;
Potree.maxNodesLoading =
    void 0 !== navigator.hardwareConcurrency
        ? navigator.hardwareConcurrency
        : 4;
Potree.pointLoadLimit = 1e10;
Potree.framenumber = 0;
Potree.numNodesLoading = 0;
Potree.debug = {};
Potree.measureTimings = !1;
Potree.workerPool = new WorkerManager();
Potree.lru = new LRU();
Potree.attributeLocations = {
    position: 0,
    color: 1,
    intensity: 2,
    classification: 3,
    returnNumber: 4,
    numberOfReturns: 5,
    pointSourceID: 6,
    indices: 7,
    normal: 8,
    spacing: 9
};
Potree.Classification = {
    DEFAULT: {
        0: new THREE.Vector4(0.5, 0.5, 0.5, 1),
        1: new THREE.Vector4(0.5, 0.5, 0.5, 1),
        2: new THREE.Vector4(0.63, 0.32, 0.18, 1),
        3: new THREE.Vector4(0, 1, 0, 1),
        4: new THREE.Vector4(0, 0.8, 0, 1),
        5: new THREE.Vector4(0, 0.6, 0, 1),
        6: new THREE.Vector4(1, 0.66, 0, 1),
        7: new THREE.Vector4(1, 0, 1, 1),
        8: new THREE.Vector4(1, 0, 0, 1),
        9: new THREE.Vector4(0, 0, 1, 1),
        12: new THREE.Vector4(1, 1, 0, 1),
        DEFAULT: new THREE.Vector4(0.3, 0.6, 0.6, 0.5)
    }
};
Potree.ClipTask = {
    NONE: 0,
    HIGHLIGHT: 1,
    SHOW_INSIDE: 2,
    SHOW_OUTSIDE: 3
};
Potree.ClipMethod = {
    INSIDE_ANY: 0,
    INSIDE_ALL: 1
};
Potree.PointSizeType = {
    FIXED: 0,
    ATTENUATED: 1,
    ADAPTIVE: 2
};
Potree.PointShape = {
    SQUARE: 0,
    CIRCLE: 1,
    PARABOLOID: 2
};
Potree.PointColorType = {
    RGB: 0,
    COLOR: 1,
    DEPTH: 2,
    HEIGHT: 3,
    ELEVATION: 3,
    INTENSITY: 4,
    INTENSITY_GRADIENT: 5,
    LOD: 6,
    LEVEL_OF_DETAIL: 6,
    POINT_INDEX: 7,
    CLASSIFICATION: 8,
    RETURN_NUMBER: 9,
    SOURCE: 10,
    NORMAL: 11,
    PHONG: 12,
    RGB_HEIGHT: 13,
    COMPOSITE: 50
};
Potree.TreeType = {
    OCTREE: 0,
    KDTREE: 1
};
Potree.loadPointCloud = function(a, b, c) {
    var e = function(a) {
        void 0 !== b && (a.name = b);
        c({
            type: "pointcloud_loaded",
            pointcloud: a
        });
    };
    if (0 === a.indexOf("greyhound://"))
        Potree.GreyhoundLoader.load(a, function(a) {
            a && e(new PointCloudOctree(a));
        });
    else if (0 < a.indexOf("cloud.js"))
        Potree.POCLoader.load(a, function(a) {
            a && e(new PointCloudOctree(a));
        });
    else if (0 < a.indexOf(".vpc"))
        PointCloudArena4DGeometry.load(a, function(a) {
            a && e(new PointCloudArena4D(a));
        });
    else throw Error("Potree: Failed to load point cloud from URL " + a);
};
Potree.updateVisibility = function(a, b, c) {
    var e = 0,
        d = 0,
        f = new Map(a.map(a => [a, 0])),
        g = [],
        k = [],
        h = [],
        l = Infinity,
        m = Potree.updateVisibilityStructures(a, b, c),
        p = m.frustums,
        n = m.camObjPositions;
    m = m.priorityQueue;
    var q = 0;
    c = c.domElement.clientHeight;
    Potree._pointcloudTransformVersion ||
        (Potree._pointcloudTransformVersion = new Map());
    for (var r = Potree._pointcloudTransformVersion, t = 0; t < a.length; t++) {
        var u = a[t];
        if (u.visible)
            if ((u.updateMatrixWorld(), r.has(u))) {
                var w = r.get(u);
                w.transform.equals(u.matrixWorld) ||
                    (w.number++,
                    w.transform.copy(u.matrixWorld),
                    u.dispatchEvent({
                        type: "transformation_changed",
                        target: u
                    }));
            } else
                r.set(u, {
                    number: 0,
                    transform: u.matrixWorld.clone()
                });
    }
    for (; 0 < m.size(); ) {
        w = m.pop();
        var v = w.node;
        t = w.parent;
        u = a[w.pointcloud];
        var x = v.getBoundingBox(),
            C = n[w.pointcloud],
            y = p[w.pointcloud].intersectsBox(x);
        x = u.maxLevel || Infinity;
        var A = v.getLevel();
        y = (y = y && !(f.get(u) + v.getNumPoints() > u.pointBudget)) && A < x;
        v.spacing
            ? (l = Math.min(l, v.spacing))
            : v.geometryNode &&
              v.geometryNode.spacing &&
              (l = Math.min(l, v.geometryNode.spacing));
        if (y)
            for (
                e++,
                    d += v.getNumPoints(),
                    x = f.get(u),
                    f.set(u, x + v.getNumPoints()),
                    u.numVisibleNodes++,
                    u.numVisiblePoints += v.getNumPoints(),
                    !v.isGeometryNode() ||
                        (t && !t.isTreeNode()) ||
                        (v.isLoaded() && q < Potree.maxNodesLoadGPUFrame
                            ? ((v = u.toTreeNode(v, t)), q++)
                            : (h.push(v), k.push(v))),
                    v.isTreeNode() &&
                        (Potree.lru.touch(v.geometryNode),
                        (v.sceneNode.visible = !0),
                        (v.sceneNode.material = u.material),
                        g.push(v),
                        u.visibleNodes.push(v),
                        void 0 === v._transformVersion &&
                            (v._transformVersion = -1),
                        (t = r.get(u)),
                        v._transformVersion !== t.number &&
                            (v.sceneNode.updateMatrix(),
                            v.sceneNode.matrixWorld.multiplyMatrices(
                                u.matrixWorld,
                                v.sceneNode.matrix
                            ),
                            (v._transformVersion = t.number)),
                        u.showBoundingBox &&
                        !v.boundingBoxNode &&
                        v.getBoundingBox
                            ? ((t = new THREE.Box3Helper(v.getBoundingBox())),
                              (t.matrixAutoUpdate = !1),
                              u.boundingBoxNodes.push(t),
                              (v.boundingBoxNode = t),
                              v.boundingBoxNode.matrix.copy(u.matrixWorld))
                            : u.showBoundingBox
                            ? ((v.boundingBoxNode.visible = !0),
                              v.boundingBoxNode.matrix.copy(u.matrixWorld))
                            : !u.showBoundingBox &&
                              v.boundingBoxNode &&
                              (v.boundingBoxNode.visible = !1)),
                    x = v.getChildren(),
                    t = 0;
                t < x.length;
                t++
            ) {
                A = x[t];
                var B = 0;
                if (b.isPerspectiveCamera) {
                    var z = A.getBoundingSphere(new THREE.Sphere());
                    y = z.center.distanceTo(C);
                    z = z.radius;
                    B =
                        ((0.5 * c) /
                            (Math.tan((b.fov * Math.PI) / 180 / 2) * y)) *
                        z;
                    if (B < u.minimumNodePixelSize) continue;
                    0 > y - z && (B = Number.MAX_VALUE);
                } else
                    (z = A.getBoundingBox()),
                        (y = A.getBoundingSphere(
                            new THREE.Sphere()
                        ).center.distanceTo(C)),
                        (B =
                            z.max
                                .clone()
                                .sub(z.min)
                                .length() / y);
                m.push({
                    pointcloud: w.pointcloud,
                    node: A,
                    parent: v,
                    weight: B
                });
            }
    }
    a = a.filter(a => a.generateDEM && a.dem instanceof PotreeDEM);
    for (u of a)
        (a = u.visibleNodes.filter(a => a.getLevel() <= Potree.maxDEMLevel)),
            u.dem.update(a);
    for (t = 0; t < Math.min(Potree.maxNodesLoading, h.length); t++)
        h[t].load();
    return {
        visibleNodes: g,
        numVisiblePoints: d,
        lowestSpacing: l
    };
};
Potree.updatePointClouds = function(a, b, c) {
    for (var e = Potree.updateVisibility(a, b, c), d = 0; d < a.length; d++)
        a[d].updateMaterial(a[d].material, a[d].visibleNodes, b, c),
            a[d].updateVisibleBounds();
    Potree.lru.freeMemory();
    return e;
};
Potree.updateVisibilityStructures = function(a, b, c) {
    c = [];
    for (
        var e = [],
            d = new BinaryHeap(function(a) {
                return 1 / a.weight;
            }),
            f = 0;
        f < a.length;
        f++
    ) {
        var g = a[f];
        if (g.initialized()) {
            g.numVisibleNodes = 0;
            g.numVisiblePoints = 0;
            g.deepestVisibleLevel = 0;
            g.visibleNodes = [];
            g.visibleGeometry = [];
            b.updateMatrixWorld();
            var k = new THREE.Frustum(),
                h = b.matrixWorldInverse,
                l = g.matrixWorld,
                m = b.clone();
            m.near = b.near;
            m.updateProjectionMatrix();
            m = b.projectionMatrix;
            h = new THREE.Matrix4()
                .multiply(m)
                .multiply(h)
                .multiply(l);
            k.setFromMatrix(h);
            c.push(k);
            k = b.matrixWorld;
            l = new THREE.Matrix4().getInverse(l);
            l = new THREE.Matrix4().multiply(l).multiply(k);
            l = new THREE.Vector3().setFromMatrixPosition(l);
            e.push(l);
            g.visible &&
                null !== g.root &&
                d.push({
                    pointcloud: f,
                    node: g.root,
                    weight: Number.MAX_VALUE
                });
            g.root.isTreeNode() && g.hideDescendants(g.root.sceneNode);
            for (l = 0; l < g.boundingBoxNodes.length; l++)
                g.boundingBoxNodes[l].visible = !1;
        }
    }
    return {
        frustums: c,
        camObjPositions: e,
        priorityQueue: d
    };
};
Potree.shuffleArray = function(a) {
    for (var b = a.length - 1; 0 < b; b--) {
        var c = Math.floor(Math.random() * (b + 1)),
            e = a[b];
        a[b] = a[c];
        a[c] = e;
    }
};
Potree.paramThreeToGL = function(a, b) {
    if (b === THREE.RepeatWrapping) return a.REPEAT;
    if (b === THREE.ClampToEdgeWrapping) return a.CLAMP_TO_EDGE;
    if (b === THREE.MirroredRepeatWrapping) return a.MIRRORED_REPEAT;
    if (b === THREE.NearestFilter) return a.NEAREST;
    if (b === THREE.NearestMipMapNearestFilter) return a.NEAREST_MIPMAP_NEAREST;
    if (b === THREE.NearestMipMapLinearFilter) return a.NEAREST_MIPMAP_LINEAR;
    if (b === THREE.LinearFilter) return a.LINEAR;
    if (b === THREE.LinearMipMapNearestFilter) return a.LINEAR_MIPMAP_NEAREST;
    if (b === THREE.LinearMipMapLinearFilter) return a.LINEAR_MIPMAP_LINEAR;
    if (b === THREE.UnsignedByteType) return a.UNSIGNED_BYTE;
    if (b === THREE.UnsignedShort4444Type) return a.UNSIGNED_SHORT_4_4_4_4;
    if (b === THREE.UnsignedShort5551Type) return a.UNSIGNED_SHORT_5_5_5_1;
    if (b === THREE.UnsignedShort565Type) return a.UNSIGNED_SHORT_5_6_5;
    if (b === THREE.ByteType) return a.BYTE;
    if (b === THREE.ShortType) return a.SHORT;
    if (b === THREE.UnsignedShortType) return a.UNSIGNED_SHORT;
    if (b === THREE.IntType) return a.INT;
    if (b === THREE.UnsignedIntType) return a.UNSIGNED_INT;
    if (b === THREE.FloatType) return a.FLOAT;
    if (b === THREE.HalfFloatType) {
        var c = extensions.get("OES_texture_half_float");
        if (null !== c) return c.HALF_FLOAT_OES;
    }
    if (b === THREE.AlphaFormat) return a.ALPHA;
    if (b === THREE.RGBFormat) return a.RGB;
    if (b === THREE.RGBAFormat) return a.RGBA;
    if (b === THREE.LuminanceFormat) return a.LUMINANCE;
    if (b === THREE.LuminanceAlphaFormat) return a.LUMINANCE_ALPHA;
    if (b === THREE.DepthFormat) return a.DEPTH_COMPONENT;
    if (b === THREE.DepthStencilFormat) return a.DEPTH_STENCIL;
    if (b === THREE.AddEquation) return a.FUNC_ADD;
    if (b === THREE.SubtractEquation) return a.FUNC_SUBTRACT;
    if (b === THREE.ReverseSubtractEquation) return a.FUNC_REVERSE_SUBTRACT;
    if (b === THREE.ZeroFactor) return a.ZERO;
    if (b === THREE.OneFactor) return a.ONE;
    if (b === THREE.SrcColorFactor) return a.SRC_COLOR;
    if (b === THREE.OneMinusSrcColorFactor) return a.ONE_MINUS_SRC_COLOR;
    if (b === THREE.SrcAlphaFactor) return a.SRC_ALPHA;
    if (b === THREE.OneMinusSrcAlphaFactor) return a.ONE_MINUS_SRC_ALPHA;
    if (b === THREE.DstAlphaFactor) return a.DST_ALPHA;
    if (b === THREE.OneMinusDstAlphaFactor) return a.ONE_MINUS_DST_ALPHA;
    if (b === THREE.DstColorFactor) return a.DST_COLOR;
    if (b === THREE.OneMinusDstColorFactor) return a.ONE_MINUS_DST_COLOR;
    if (b === THREE.SrcAlphaSaturateFactor) return a.SRC_ALPHA_SATURATE;
    if (
        b === THREE.RGB_S3TC_DXT1_Format ||
        b === RGBA_S3TC_DXT1_Format ||
        b === THREE.RGBA_S3TC_DXT3_Format ||
        b === RGBA_S3TC_DXT5_Format
    )
        if (
            ((c = extensions.get("WEBGL_compressed_texture_s3tc")), null !== c)
        ) {
            if (b === THREE.RGB_S3TC_DXT1_Format)
                return c.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (b === THREE.RGBA_S3TC_DXT1_Format)
                return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (b === THREE.RGBA_S3TC_DXT3_Format)
                return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (b === THREE.RGBA_S3TC_DXT5_Format)
                return c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
    if (
        b === THREE.RGB_PVRTC_4BPPV1_Format ||
        b === THREE.RGB_PVRTC_2BPPV1_Format ||
        b === THREE.RGBA_PVRTC_4BPPV1_Format ||
        b === THREE.RGBA_PVRTC_2BPPV1_Format
    )
        if (
            ((c = extensions.get("WEBGL_compressed_texture_pvrtc")), null !== c)
        ) {
            if (b === THREE.RGB_PVRTC_4BPPV1_Format)
                return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (b === THREE.RGB_PVRTC_2BPPV1_Format)
                return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (b === THREE.RGBA_PVRTC_4BPPV1_Format)
                return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (b === THREE.RGBA_PVRTC_2BPPV1_Format)
                return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
    if (
        b === THREE.RGB_ETC1_Format &&
        ((c = extensions.get("WEBGL_compressed_texture_etc1")), null !== c)
    )
        return c.COMPRESSED_RGB_ETC1_WEBGL;
    if (b === THREE.MinEquation || b === THREE.MaxEquation)
        if (((c = extensions.get("EXT_blend_minmax")), null !== c)) {
            if (b === THREE.MinEquation) return c.MIN_EXT;
            if (b === THREE.MaxEquation) return c.MAX_EXT;
        }
    return b === UnsignedInt248Type &&
        ((c = extensions.get("WEBGL_depth_texture")), null !== c)
        ? c.UNSIGNED_INT_24_8_WEBGL
        : 0;
};
Potree.PointAttributeNames = {
    POSITION_CARTESIAN: 0,
    COLOR_PACKED: 1,
    COLOR_FLOATS_1: 2,
    COLOR_FLOATS_255: 3,
    NORMAL_FLOATS: 4,
    FILLER: 5,
    INTENSITY: 6,
    CLASSIFICATION: 7,
    NORMAL_SPHEREMAPPED: 8,
    NORMAL_OCT16: 9,
    NORMAL: 10,
    RETURN_NUMBER: 11,
    NUMBER_OF_RETURNS: 12,
    SOURCE_ID: 13,
    INDICES: 14,
    SPACING: 15
};
Potree.PointAttributeTypes = {
    DATA_TYPE_DOUBLE: {
        ordinal: 0,
        size: 8
    },
    DATA_TYPE_FLOAT: {
        ordinal: 1,
        size: 4
    },
    DATA_TYPE_INT8: {
        ordinal: 2,
        size: 1
    },
    DATA_TYPE_UINT8: {
        ordinal: 3,
        size: 1
    },
    DATA_TYPE_INT16: {
        ordinal: 4,
        size: 2
    },
    DATA_TYPE_UINT16: {
        ordinal: 5,
        size: 2
    },
    DATA_TYPE_INT32: {
        ordinal: 6,
        size: 4
    },
    DATA_TYPE_UINT32: {
        ordinal: 7,
        size: 4
    },
    DATA_TYPE_INT64: {
        ordinal: 8,
        size: 8
    },
    DATA_TYPE_UINT64: {
        ordinal: 9,
        size: 8
    }
};
var i = 0,
    obj;
for (obj in Potree.PointAttributeTypes)
    (Potree.PointAttributeTypes[i] = Potree.PointAttributeTypes[obj]), i++;
Potree.PointAttribute = function(a, b, c) {
    this.name = a;
    this.type = b;
    this.numElements = c;
    this.byteSize = this.numElements * this.type.size;
};
Potree.PointAttribute.POSITION_CARTESIAN = new Potree.PointAttribute(
    Potree.PointAttributeNames.POSITION_CARTESIAN,
    Potree.PointAttributeTypes.DATA_TYPE_FLOAT,
    3
);
Potree.PointAttribute.RGBA_PACKED = new Potree.PointAttribute(
    Potree.PointAttributeNames.COLOR_PACKED,
    Potree.PointAttributeTypes.DATA_TYPE_INT8,
    4
);
Potree.PointAttribute.COLOR_PACKED = Potree.PointAttribute.RGBA_PACKED;
Potree.PointAttribute.RGB_PACKED = new Potree.PointAttribute(
    Potree.PointAttributeNames.COLOR_PACKED,
    Potree.PointAttributeTypes.DATA_TYPE_INT8,
    3
);
Potree.PointAttribute.NORMAL_FLOATS = new Potree.PointAttribute(
    Potree.PointAttributeNames.NORMAL_FLOATS,
    Potree.PointAttributeTypes.DATA_TYPE_FLOAT,
    3
);
Potree.PointAttribute.FILLER_1B = new Potree.PointAttribute(
    Potree.PointAttributeNames.FILLER,
    Potree.PointAttributeTypes.DATA_TYPE_UINT8,
    1
);
Potree.PointAttribute.INTENSITY = new Potree.PointAttribute(
    Potree.PointAttributeNames.INTENSITY,
    Potree.PointAttributeTypes.DATA_TYPE_UINT16,
    1
);
Potree.PointAttribute.CLASSIFICATION = new Potree.PointAttribute(
    Potree.PointAttributeNames.CLASSIFICATION,
    Potree.PointAttributeTypes.DATA_TYPE_UINT8,
    1
);
Potree.PointAttribute.NORMAL_SPHEREMAPPED = new Potree.PointAttribute(
    Potree.PointAttributeNames.NORMAL_SPHEREMAPPED,
    Potree.PointAttributeTypes.DATA_TYPE_UINT8,
    2
);
Potree.PointAttribute.NORMAL_OCT16 = new Potree.PointAttribute(
    Potree.PointAttributeNames.NORMAL_OCT16,
    Potree.PointAttributeTypes.DATA_TYPE_UINT8,
    2
);
Potree.PointAttribute.NORMAL = new Potree.PointAttribute(
    Potree.PointAttributeNames.NORMAL,
    Potree.PointAttributeTypes.DATA_TYPE_FLOAT,
    3
);
Potree.PointAttribute.RETURN_NUMBER = new Potree.PointAttribute(
    Potree.PointAttributeNames.RETURN_NUMBER,
    Potree.PointAttributeTypes.DATA_TYPE_UINT8,
    1
);
Potree.PointAttribute.NUMBER_OF_RETURNS = new Potree.PointAttribute(
    Potree.PointAttributeNames.NUMBER_OF_RETURNS,
    Potree.PointAttributeTypes.DATA_TYPE_UINT8,
    1
);
Potree.PointAttribute.SOURCE_ID = new Potree.PointAttribute(
    Potree.PointAttributeNames.SOURCE_ID,
    Potree.PointAttributeTypes.DATA_TYPE_UINT8,
    1
);
Potree.PointAttribute.INDICES = new Potree.PointAttribute(
    Potree.PointAttributeNames.INDICES,
    Potree.PointAttributeTypes.DATA_TYPE_UINT32,
    1
);
Potree.PointAttribute.SPACING = new Potree.PointAttribute(
    Potree.PointAttributeNames.SPACING,
    Potree.PointAttributeTypes.DATA_TYPE_FLOAT,
    1
);
Potree.PointAttributes = function(a) {
    this.attributes = [];
    this.size = this.byteSize = 0;
    if (null != a)
        for (var b = 0; b < a.length; b++) {
            var c = Potree.PointAttribute[a[b]];
            this.attributes.push(c);
            this.byteSize += c.byteSize;
            this.size++;
        }
};
Potree.PointAttributes.prototype.add = function(a) {
    this.attributes.push(a);
    this.byteSize += a.byteSize;
    this.size++;
};
Potree.PointAttributes.prototype.hasColors = function() {
    for (var a in this.attributes)
        if (this.attributes[a].name === Potree.PointAttributeNames.COLOR_PACKED)
            return !0;
    return !1;
};
Potree.PointAttributes.prototype.hasNormals = function() {
    for (var a in this.attributes) {
        var b = this.attributes[a];
        if (
            b === Potree.PointAttribute.NORMAL_SPHEREMAPPED ||
            b === Potree.PointAttribute.NORMAL_FLOATS ||
            b === Potree.PointAttribute.NORMAL ||
            b === Potree.PointAttribute.NORMAL_OCT16
        )
            return !0;
    }
    return !1;
};
var PotreeGradients = {
    RAINBOW: [
        [0, new THREE.Color(0.278, 0, 0.714)],
        [1 / 6, new THREE.Color(0, 0, 1)],
        [2 / 6, new THREE.Color(0, 1, 1)],
        [0.5, new THREE.Color(0, 1, 0)],
        [4 / 6, new THREE.Color(1, 1, 0)],
        [5 / 6, new THREE.Color(1, 0.64, 0)],
        [1, new THREE.Color(1, 0, 0)]
    ],
    SPECTRAL: [
        [0, new THREE.Color(0.3686, 0.3098, 0.6353)],
        [0.1, new THREE.Color(0.1961, 0.5333, 0.7412)],
        [0.2, new THREE.Color(0.4, 0.7608, 0.6471)],
        [0.3, new THREE.Color(0.6706, 0.8667, 0.6431)],
        [0.4, new THREE.Color(0.902, 0.9608, 0.5961)],
        [0.5, new THREE.Color(1, 1, 0.749)],
        [0.6, new THREE.Color(0.9961, 0.8784, 0.5451)],
        [0.7, new THREE.Color(0.9922, 0.6824, 0.3804)],
        [0.8, new THREE.Color(0.9569, 0.4275, 0.2627)],
        [0.9, new THREE.Color(0.8353, 0.2431, 0.3098)],
        [1, new THREE.Color(0.6196, 0.0039, 0.2588)]
    ],
    PLASMA: [
        [0, new THREE.Color(0.241, 0.015, 0.61)],
        [0.1, new THREE.Color(0.387, 0.001, 0.654)],
        [0.2, new THREE.Color(0.524, 0.025, 0.653)],
        [0.3, new THREE.Color(0.651, 0.125, 0.596)],
        [0.4, new THREE.Color(0.752, 0.227, 0.513)],
        [0.5, new THREE.Color(0.837, 0.329, 0.431)],
        [0.6, new THREE.Color(0.907, 0.435, 0.353)],
        [0.7, new THREE.Color(0.963, 0.554, 0.272)],
        [0.8, new THREE.Color(0.992, 0.681, 0.195)],
        [0.9, new THREE.Color(0.987, 0.822, 0.144)],
        [1, new THREE.Color(0.94, 0.975, 0.131)]
    ],
    YELLOW_GREEN: [
        [0, new THREE.Color(0.1647, 0.2824, 0.3451)],
        [0.1, new THREE.Color(0.1338, 0.3555, 0.4227)],
        [0.2, new THREE.Color(0.061, 0.4319, 0.4864)],
        [0.3, new THREE.Color(0, 0.5099, 0.5319)],
        [0.4, new THREE.Color(0, 0.5881, 0.5569)],
        [0.5, new THREE.Color(0.137, 0.665, 0.5614)],
        [0.6, new THREE.Color(0.2906, 0.7395, 0.5477)],
        [0.7, new THREE.Color(0.4453, 0.8099, 0.5201)],
        [0.8, new THREE.Color(0.6102, 0.8748, 0.485)],
        [0.9, new THREE.Color(0.7883, 0.9323, 0.4514)],
        [1, new THREE.Color(0.9804, 0.9804, 0.4314)]
    ],
    VIRIDIS: [
        [0, new THREE.Color(0.267, 0.005, 0.329)],
        [0.1, new THREE.Color(0.283, 0.141, 0.458)],
        [0.2, new THREE.Color(0.254, 0.265, 0.53)],
        [0.3, new THREE.Color(0.207, 0.372, 0.553)],
        [0.4, new THREE.Color(0.164, 0.471, 0.558)],
        [0.5, new THREE.Color(0.128, 0.567, 0.551)],
        [0.6, new THREE.Color(0.135, 0.659, 0.518)],
        [0.7, new THREE.Color(0.267, 0.749, 0.441)],
        [0.8, new THREE.Color(0.478, 0.821, 0.318)],
        [0.9, new THREE.Color(0.741, 0.873, 0.15)],
        [1, new THREE.Color(0.993, 0.906, 0.144)]
    ],
    INFERNO: [
        [0, new THREE.Color(0.077, 0.042, 0.206)],
        [0.1, new THREE.Color(0.225, 0.036, 0.388)],
        [0.2, new THREE.Color(0.373, 0.074, 0.432)],
        [0.3, new THREE.Color(0.522, 0.128, 0.42)],
        [0.4, new THREE.Color(0.665, 0.182, 0.37)],
        [0.5, new THREE.Color(0.797, 0.255, 0.287)],
        [0.6, new THREE.Color(0.902, 0.364, 0.184)],
        [0.7, new THREE.Color(0.969, 0.516, 0.063)],
        [0.8, new THREE.Color(0.988, 0.683, 0.072)],
        [0.9, new THREE.Color(0.961, 0.859, 0.298)],
        [1, new THREE.Color(0.988, 0.998, 0.645)]
    ],
    GRAYSCALE: [[0, new THREE.Color(0, 0, 0)], [1, new THREE.Color(1, 1, 1)]]
};
Potree.Points = class {
    constructor() {
        this.boundingBox = new THREE.Box3();
        this.numPoints = 0;
        this.data = {};
    }
    add(a) {
        var b = this.numPoints,
            c = b + a.numPoints,
            e = Object.keys(this.data),
            d = Object.keys(a.data),
            f = new Set([...e, ...d]),
            g;
        for (g of f)
            if (e.includes(g) && d.includes(g)) {
                var k = this.data[g].constructor;
                f = new k(this.data[g].length + a.data[g].length);
                f.set(this.data[g], 0);
                f.set(a.data[g], this.data[g].length);
                this.data[g] = f;
            } else
                e.includes(g) && !d.includes(g)
                    ? ((f = this.data[g].length / this.numPoints),
                      (k = this.data[g].constructor),
                      (k = new k(f * c)),
                      k.set(this.data[g], 0),
                      (this.data[g] = k))
                    : !e.includes(g) &&
                      d.includes(g) &&
                      ((f = a.data[g].length / a.numPoints),
                      (k = a.data[g].constructor),
                      (k = new k(f * c)),
                      k.set(a.data[g], f * b),
                      (this.data[g] = k));
        this.numPoints = c;
        this.boundingBox.union(a.boundingBox);
    }
};
Potree.Shader = class {
    constructor(a, b, c, e) {
        this.gl = a;
        this.name = b;
        this.vsSource = c;
        this.fsSource = e;
        this.cache = new Map();
        this.program = this.fs = this.vs = null;
        this.uniformLocations = {};
        this.attributeLocations = {};
        this.update(c, e);
    }
    update(a, b) {
        this.vsSource = a;
        this.fsSource = b;
        this.linkProgram();
    }
    compileShader(a, b) {
        var c = this.gl;
        c.shaderSource(a, b);
        c.compileShader(a);
        if (!c.getShaderParameter(a, c.COMPILE_STATUS))
            throw ((a = c.getShaderInfoLog(a)),
            Error("Potree: Could not compile shader " + this.name + ", " + a));
    }
    linkProgram() {
        var a = this.gl;
        this.uniformLocations = {};
        this.attributeLocations = {};
        a.useProgram(null);
        var b = this.cache.get(`${this.vsSource}, ${this.fsSource}`);
        if (b)
            (this.program = b.program),
                (this.vs = b.vs),
                (this.fs = b.fs),
                (this.attributeLocations = b.attributeLocations),
                (this.uniformLocations = b.uniformLocations);
        else {
            this.vs = a.createShader(a.VERTEX_SHADER);
            this.fs = a.createShader(a.FRAGMENT_SHADER);
            this.program = a.createProgram();
            for (var c of Object.keys(Potree.attributeLocations))
                (b = Potree.attributeLocations[c]),
                    a.bindAttribLocation(this.program, b, c);
            this.compileShader(this.vs, this.vsSource);
            this.compileShader(this.fs, this.fsSource);
            c = this.program;
            a.attachShader(c, this.vs);
            a.attachShader(c, this.fs);
            a.linkProgram(c);
            a.detachShader(c, this.vs);
            a.detachShader(c, this.fs);
            if (!a.getProgramParameter(c, a.LINK_STATUS))
                throw ((a = a.getProgramInfoLog(c)),
                Error(
                    "Potree: Could not link program " + this.name + ", " + a
                ));
            for (
                var e = a.getProgramParameter(c, a.ACTIVE_ATTRIBUTES), d = 0;
                d < e;
                d++
            ) {
                var f = a.getActiveAttrib(c, d);
                b = a.getAttribLocation(c, f.name);
                this.attributeLocations[f.name] = b;
            }
            e = a.getProgramParameter(c, a.ACTIVE_UNIFORMS);
            for (d = 0; d < e; d++)
                (f = a.getActiveUniform(c, d)),
                    (b = a.getUniformLocation(c, f.name)),
                    (this.uniformLocations[f.name] = b);
            b = {
                program: this.program,
                vs: this.vs,
                fs: this.fs,
                attributeLocations: this.attributeLocations,
                uniformLocations: this.uniformLocations
            };
            this.cache.set(`${this.vsSource}, ${this.fsSource}`, b);
        }
    }
    setUniformMatrix4(a, b) {
        const c = this.gl;
        a = this.uniformLocations[a];
        null != a &&
            ((b = new Float32Array(b.elements)), c.uniformMatrix4fv(a, !1, b));
    }
    setUniform1f(a, b) {
        a = this.uniformLocations[a];
        null != a && this.gl.uniform1f(a, b);
    }
    setUniformBoolean(a, b) {
        a = this.uniformLocations[a];
        null != a && this.gl.uniform1i(a, b);
    }
    setUniformTexture(a, b) {
        a = this.uniformLocations[a];
        null != a && this.gl.uniform1i(a, b);
    }
    setUniform2f(a, b) {
        a = this.uniformLocations[a];
        null != a && this.gl.uniform2f(a, b[0], b[1]);
    }
    setUniform3f(a, b) {
        a = this.uniformLocations[a];
        null != a && this.gl.uniform3f(a, b[0], b[1], b[2]);
    }
    setUniform(a, b) {
        b.constructor === THREE.Matrix4
            ? this.setUniformMatrix4(a, b)
            : "number" === typeof b
            ? this.setUniform1f(a, b)
            : "boolean" === typeof b
            ? this.setUniformBoolean(a, b)
            : b instanceof Potree.WebGLTexture
            ? this.setUniformTexture(a, b)
            : b instanceof Array
            ? 2 === b.length
                ? this.setUniform2f(a, b)
                : 3 === b.length && this.setUniform3f(a, b)
            : console.error("Potree: Unhandled uniform type: ", a, b);
    }
    setUniform1i(a, b) {
        a = this.uniformLocations[a];
        null != a && this.gl.uniform1i(a, b);
    }
};
Potree.WebGLTexture = class {
    constructor(a, b) {
        this.gl = a;
        this.texture = b;
        this.id = a.createTexture();
        this.target = a.TEXTURE_2D;
        this.version = -1;
        this.update(b);
    }
    update() {
        if (this.texture.image) {
            var a = this.gl,
                b = this.texture;
            if (this.version !== b.version) {
                this.target = a.TEXTURE_2D;
                a.bindTexture(this.target, this.id);
                var c = Potree.paramThreeToGL(a, b.format),
                    e = b.image.width,
                    d = b.image.height,
                    f = Potree.paramThreeToGL(a, b.type);
                a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, b.flipY);
                a.pixelStorei(
                    a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    b.premultiplyAlpha
                );
                a.pixelStorei(a.UNPACK_ALIGNMENT, b.unpackAlignment);
                if (b instanceof THREE.DataTexture) {
                    var g = b.image.data;
                    a.texParameteri(
                        this.target,
                        a.TEXTURE_WRAP_S,
                        a.CLAMP_TO_EDGE
                    );
                    a.texParameteri(
                        this.target,
                        a.TEXTURE_WRAP_T,
                        a.CLAMP_TO_EDGE
                    );
                    a.texParameteri(
                        this.target,
                        a.TEXTURE_MAG_FILTER,
                        Potree.paramThreeToGL(a, b.magFilter)
                    );
                    a.texParameteri(
                        this.target,
                        a.TEXTURE_MIN_FILTER,
                        Potree.paramThreeToGL(a, b.minFilter)
                    );
                    a.texImage2D(this.target, 0, c, e, d, 0, c, f, g);
                } else
                    b instanceof THREE.CanvasTexture &&
                        ((g = b.image),
                        a.texParameteri(
                            this.target,
                            a.TEXTURE_WRAP_S,
                            Potree.paramThreeToGL(a, b.wrapS)
                        ),
                        a.texParameteri(
                            this.target,
                            a.TEXTURE_WRAP_T,
                            Potree.paramThreeToGL(a, b.wrapT)
                        ),
                        a.texParameteri(
                            this.target,
                            a.TEXTURE_MAG_FILTER,
                            Potree.paramThreeToGL(a, b.magFilter)
                        ),
                        a.texParameteri(
                            this.target,
                            a.TEXTURE_MIN_FILTER,
                            Potree.paramThreeToGL(a, b.minFilter)
                        ),
                        a.texImage2D(this.target, 0, c, c, f, g));
                a.bindTexture(this.target, null);
                this.version = b.version;
            }
        } else this.version = this.texture.version;
    }
};
Potree.WebGLBuffer = class {
    constructor() {
        this.numElements = 0;
        this.vao = null;
        this.vbos = new Map();
    }
};

function PotreeShaders() {}
PotreeShaders["pointcloud.vs"] =
    "\nprecision highp float;\nprecision highp int;\n\n#define max_clip_polygons 8\n#define PI 3.141592653589793\n\n" +
    THREE.ShaderChunk.logdepthbuf_pars_vertex +
    "\n\nattribute vec3 position;\nattribute vec3 color;\nattribute float intensity;\nattribute float classification;\nattribute float returnNumber;\nattribute float numberOfReturns;\nattribute float pointSourceID;\nattribute vec4 indices;\nattribute float spacing;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 uViewInv;\n\nuniform float uScreenWidth;\nuniform float uScreenHeight;\nuniform float fov;\nuniform float near;\nuniform float far;\n\nuniform bool uDebug;\n\nuniform bool uUseOrthographicCamera;\nuniform float uOrthoWidth;\nuniform float uOrthoHeight;\n\n#define CLIPTASK_NONE 0\n#define CLIPTASK_HIGHLIGHT 1\n#define CLIPTASK_SHOW_INSIDE 2\n#define CLIPTASK_SHOW_OUTSIDE 3\n\n#define CLIPMETHOD_INSIDE_ANY 0\n#define CLIPMETHOD_INSIDE_ALL 1\n\nuniform int clipTask;\nuniform int clipMethod;\n\n#if defined(num_clipboxes) && num_clipboxes > 0\n\tuniform mat4 clipBoxes[num_clipboxes];\n#endif\n\n#if defined(num_clipspheres) && num_clipspheres > 0\n\tuniform mat4 uClipSpheres[num_clipspheres];\n#endif\n\n#if defined(num_clippolygons) && num_clippolygons > 0\n\tuniform int uClipPolygonVCount[num_clippolygons];\n\tuniform vec3 uClipPolygonVertices[num_clippolygons * 8];\n\tuniform mat4 uClipPolygonWVP[num_clippolygons];\n#endif\n\nuniform float size;\nuniform float minSize;\nuniform float maxSize;\n\nuniform float uPCIndex;\nuniform float uOctreeSpacing;\nuniform float uNodeSpacing;\nuniform float uOctreeSize;\nuniform vec3 uBBSize;\nuniform float uLevel;\nuniform float uVNStart;\nuniform bool uIsLeafNode;\n\nuniform vec3 uColor;\nuniform float uOpacity;\n\nuniform vec2 elevationRange;\nuniform vec2 intensityRange;\nuniform float intensityGamma;\nuniform float intensityContrast;\nuniform float intensityBrightness;\nuniform float rgbGamma;\nuniform float rgbContrast;\nuniform float rgbBrightness;\nuniform float uTransition;\nuniform float wRGB;\nuniform float wIntensity;\nuniform float wElevation;\nuniform float wClassification;\nuniform float wReturnNumber;\nuniform float wSourceID;\n\nuniform vec3 uShadowColor;\n\nuniform sampler2D visibleNodes;\nuniform sampler2D gradient;\nuniform sampler2D classificationLUT;\n\n#if defined(num_shadowmaps) && num_shadowmaps > 0\n\tuniform sampler2D uShadowMap[num_shadowmaps];\n\tuniform mat4 uShadowWorldView[num_shadowmaps];\n\tuniform mat4 uShadowProj[num_shadowmaps];\n#endif\n\nvarying vec3 vColor;\nvarying float vLogDepth;\nvarying vec3 vViewPosition;\nvarying float vRadius;\nvarying float vPointSize;\n\nfloat round(float number)\n{\n\treturn floor(number + 0.5);\n}\n\n//---------------------\n//OCTREE\n//---------------------\n\n#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_octree)\n\n\t/**\n\t * number of 1-bits up to inclusive index position\n\t * number is treated as if it were an integer in the range 0-255\n\t */\n\tint numberOfOnes(int number, int index)\n\t{\n\t\tint numOnes = 0;\n\t\tint tmp = 128;\n\n\t\tfor(int i = 7; i >= 0; i--)\n\t\t{\n\t\t\tif(number >= tmp)\n\t\t\t{\n\t\t\t\tnumber = number - tmp;\n\n\t\t\t\tif(i <= index)\n\t\t\t\t{\n\t\t\t\t\tnumOnes++;\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\ttmp = tmp / 2;\n\t\t}\n\n\t\treturn numOnes;\n\t}\n\n\t/**\n\t * checks whether the bit at index is 1\n\t * number is treated as if it were an integer in the range 0-255\n\t */\n\tbool isBitSet(int number, int index)\n\t{\n\t\t//weird multi else if due to lack of proper array, int and bitwise support in WebGL 1.0\n\t\tint powi = 1;\n\n\t\tif(index == 0)\n\t\t{\n\t\t\tpowi = 1;\n\t\t}\n\t\telse if(index == 1)\n\t\t{\n\t\t\tpowi = 2;\n\t\t}\n\t\telse if(index == 2)\n\t\t{\n\t\t\tpowi = 4;\n\t\t}\n\t\telse if(index == 3)\n\t\t{\n\t\t\tpowi = 8;\n\t\t}\n\t\telse if(index == 4)\n\t\t{\n\t\t\tpowi = 16;\n\t\t}\n\t\telse if(index == 5)\n\t\t{\n\t\t\tpowi = 32;\n\t\t}\n\t\telse if(index == 6)\n\t\t{\n\t\t\tpowi = 64;\n\t\t}\n\t\telse if(index == 7)\n\t\t{\n\t\t\tpowi = 128;\n\t\t}\n\t\telse\n\t\t{\n\t\t\treturn false;\n\t\t}\n\n\t\tint ndp = number / powi;\n\n\t\treturn mod(float(ndp), 2.0) != 0.0;\n\t}\n\n\t/**\n\t * find the LOD at the point position\n\t */\n\tfloat getLOD()\n\t{\n\t\tvec3 offset = vec3(0.0, 0.0, 0.0);\n\t\tint iOffset = int(uVNStart);\n\t\tfloat depth = uLevel;\n\n\t\tfor(float i = 0.0; i <= 30.0; i++)\n\t\t{\n\t\t\tfloat nodeSizeAtLevel = uOctreeSize / pow(2.0, i + uLevel + 0.0);\n\t\t\t\n\t\t\tvec3 index3d = (position-offset) / nodeSizeAtLevel;\n\t\t\tindex3d = floor(index3d + 0.5);\n\t\t\tint index = int(round(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));\n\t\t\t\n\t\t\tvec4 value = texture2D(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));\n\t\t\tint mask = int(round(value.r * 255.0));\n\n\t\t\tif(isBitSet(mask, index))\n\t\t\t{\n\t\t\t\t//there are more visible child nodes at this position\n\t\t\t\tint advanceG = int(round(value.g * 255.0)) * 256;\n\t\t\t\tint advanceB = int(round(value.b * 255.0));\n\t\t\t\tint advanceChild = numberOfOnes(mask, index - 1);\n\t\t\t\tint advance = advanceG + advanceB + advanceChild;\n\n\t\t\t\tiOffset = iOffset + advance;\n\t\t\t\t\n\t\t\t\tdepth++;\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\t//no more visible child nodes at this position\n\t\t\t\treturn value.a * 255.0;\n\t\t\t\t//return depth;\n\t\t\t}\n\t\t\t\n\t\t\toffset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;\n\t\t}\n\t\t\t\n\t\treturn depth;\n\t}\n\n\tfloat getSpacing()\n\t{\n\t\tvec3 offset = vec3(0.0, 0.0, 0.0);\n\t\tint iOffset = int(uVNStart);\n\t\tfloat depth = uLevel;\n\t\tfloat spacing = uNodeSpacing;\n\n\t\tfor(float i = 0.0; i <= 30.0; i++)\n\t\t{\n\t\t\tfloat nodeSizeAtLevel = uOctreeSize / pow(2.0, i + uLevel + 0.0);\n\t\t\t\n\t\t\tvec3 index3d = (position-offset) / nodeSizeAtLevel;\n\t\t\tindex3d = floor(index3d + 0.5);\n\t\t\tint index = int(round(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));\n\t\t\t\n\t\t\tvec4 value = texture2D(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));\n\t\t\tint mask = int(round(value.r * 255.0));\n\t\t\tfloat spacingFactor = value.a;\n\n\t\t\tif(i > 0.0)\n\t\t\t{\n\t\t\t\tspacing = spacing / (255.0 * spacingFactor);\n\t\t\t}\n\t\t\t\n\t\t\tif(isBitSet(mask, index))\n\t\t\t{\n\t\t\t\t//there are more visible child nodes at this position\n\t\t\t\tint advanceG = int(round(value.g * 255.0)) * 256;\n\t\t\t\tint advanceB = int(round(value.b * 255.0));\n\t\t\t\tint advanceChild = numberOfOnes(mask, index - 1);\n\t\t\t\tint advance = advanceG + advanceB + advanceChild;\n\n\t\t\t\tiOffset = iOffset + advance;\n\n\t\t\t\tdepth++;\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\t//no more visible child nodes at this position\n\t\t\t\treturn spacing;\n\t\t\t}\n\t\t\t\n\t\t\toffset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;\n\t\t}\n\t\t\t\n\t\treturn spacing;\n\t}\n\n\tfloat getPointSizeAttenuation()\n\t{\n\t\treturn pow(2.0, getLOD());\n\t}\n#endif\n\n//---------------------\n//KD-TREE\n//---------------------\n#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_kdtree)\n\tfloat getLOD()\n\t{\n\t\tvec3 offset = vec3(0.0, 0.0, 0.0);\n\t\tfloat iOffset = 0.0;\n\t\tfloat depth = 0.0;\n\t\t\t\n\t\tvec3 size = uBBSize;\t\n\t\tvec3 pos = position;\n\t\t\t\n\t\tfor(float i = 0.0; i <= 1000.0; i++)\n\t\t{\n\t\t\tvec4 value = texture2D(visibleNodes, vec2(iOffset / 2048.0, 0.0));\n\t\t\t\n\t\t\tint children = int(value.r * 255.0);\n\t\t\tfloat next = value.g * 255.0;\n\t\t\tint split = int(value.b * 255.0);\n\t\t\t\n\t\t\tif(next == 0.0)\n\t\t\t{\n\t\t\t \treturn depth;\n\t\t\t}\n\t\t\t\n\t\t\tvec3 splitv = vec3(0.0, 0.0, 0.0);\n\t\t\tif(split == 1)\n\t\t\t{\n\t\t\t\tsplitv.x = 1.0;\n\t\t\t}\n\t\t\telse if(split == 2)\n\t\t\t{\n\t\t\t \tsplitv.y = 1.0;\n\t\t\t}\n\t\t\telse if(split == 4)\n\t\t\t{\n\t\t\t \tsplitv.z = 1.0;\n\t\t\t}\n\t\t\t\n\t\t\tiOffset = iOffset + next;\n\t\t\t\n\t\t\tfloat factor = length(pos * splitv / size);\n\n\t\t\t//Left\n\t\t\tif(factor < 0.5)\n\t\t\t{\n\t\t\t\tif(children == 0 || children == 2)\n\t\t\t\t{\n\t\t\t\t\treturn depth;\n\t\t\t\t}\n\t\t\t}\n\t\t\t//Right\n\t\t\telse\n\t\t\t{\n\t\t\t\tpos = pos - size * splitv * 0.5;\n\t\t\t\tif(children == 0 || children == 1)\n\t\t\t\t{\n\t\t\t\t\treturn depth;\n\t\t\t\t}\n\t\t\t\tif(children == 3)\n\t\t\t\t{\n\t\t\t\t\tiOffset = iOffset + 1.0;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tsize = size * ((1.0 - (splitv + 1.0) / 2.0) + 0.5);\n\t\t\tdepth++;\n\t\t}\n\t\t\t\n\t\treturn depth;\t\n\t}\n\n\tfloat getPointSizeAttenuation()\n\t{\n\t\treturn 0.5 * pow(1.3, getLOD());\n\t}\n#endif\n\n//formula adapted from: http://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/\nfloat getContrastFactor(float contrast)\n{\n\treturn (1.0158730158730156 * (contrast + 1.0)) / (1.0158730158730156 - contrast);\n}\n\nvec3 getRGB()\n{\n\tvec3 rgb = color;\n\t\n\trgb = pow(rgb, vec3(rgbGamma));\n\trgb = rgb + rgbBrightness;\n\trgb = clamp(rgb, 0.0, 1.0);\n\t\n\treturn rgb;\n}\n\nfloat getIntensity()\n{\n\tfloat w = (intensity - intensityRange.x) / (intensityRange.y - intensityRange.x);\n\tw = pow(w, intensityGamma);\n\tw = w + intensityBrightness;\n\tw = (w - 0.5) * getContrastFactor(intensityContrast) + 0.5;\n\tw = clamp(w, 0.0, 1.0);\n\n\treturn w;\n}\n\nvec3 getElevation()\n{\n\tvec4 world = modelMatrix * vec4( position, 1.0 );\n\tfloat w = (world.z - elevationRange.x) / (elevationRange.y - elevationRange.x);\n\treturn texture2D(gradient, vec2(w,1.0-w)).rgb;\n}\n\nvec4 getClassification()\n{\n\tvec2 uv = vec2(classification / 255.0, 0.5);\n\treturn texture2D(classificationLUT, uv);\n}\n\nvec3 getReturnNumber()\n{\n\tif(numberOfReturns == 1.0)\n\t{\n\t\treturn vec3(1.0, 1.0, 0.0);\n\t}\n\telse\n\t{\n\t\tif(returnNumber == 1.0)\n\t\t{\n\t\t\treturn vec3(1.0, 0.0, 0.0);\n\t\t}\n\t\telse if(returnNumber == numberOfReturns)\n\t\t{\n\t\t\treturn vec3(0.0, 0.0, 1.0);\n\t\t}\n\t\telse\n\t\t{\n\t\t\treturn vec3(0.0, 1.0, 0.0);\n\t\t}\n\t}\n}\n\nvec3 getSourceID()\n{\n\tfloat w = mod(pointSourceID, 10.0) / 10.0;\n\treturn texture2D(gradient, vec2(w,1.0 - w)).rgb;\n}\n\nvec3 getCompositeColor()\n{\n\tvec3 c;\n\tfloat w;\n\n\tc += wRGB * getRGB();\n\tw += wRGB;\n\t\n\tc += wIntensity * getIntensity() * vec3(1.0, 1.0, 1.0);\n\tw += wIntensity;\n\t\n\tc += wElevation * getElevation();\n\tw += wElevation;\n\t\n\tc += wReturnNumber * getReturnNumber();\n\tw += wReturnNumber;\n\t\n\tc += wSourceID * getSourceID();\n\tw += wSourceID;\n\t\n\tvec4 cl = wClassification * getClassification();\n    c += cl.a * cl.rgb;\n\tw += wClassification * cl.a;\n\n\tc = c / w;\n\t\n\tif(w == 0.0)\n\t{\n\t\tgl_Position = vec4(100.0, 100.0, 100.0, 0.0);\n\t}\n\t\n\treturn c;\n}\n\nvec3 getColor()\n{\n\tvec3 color;\n\t\n\t#ifdef color_type_rgb\n\t\tcolor = getRGB();\n\t#elif defined color_type_height\n\t\tcolor = getElevation();\n\t#elif defined color_type_rgb_height\n\t\tvec3 cHeight = getElevation();\n\t\tcolor = (1.0 - uTransition) * getRGB() + uTransition * cHeight;\n\t#elif defined color_type_depth\n\t\tfloat linearDepth = gl_Position.w;\n\t\tfloat expDepth = (gl_Position.z / gl_Position.w) * 0.5 + 0.5;\n\t\tcolor = vec3(linearDepth, expDepth, 0.0);\n\t#elif defined color_type_intensity\n\t\tfloat w = getIntensity();\n\t\tcolor = vec3(w, w, w);\n\t#elif defined color_type_intensity_gradient\n\t\tfloat w = getIntensity();\n\t\tcolor = texture2D(gradient, vec2(w,1.0-w)).rgb;\n\t#elif defined color_type_color\n\t\tcolor = uColor;\n\t#elif defined color_type_lod\n\t\tfloat depth = getLOD();\n\t\tfloat w = depth / 10.0;\n\t\tcolor = texture2D(gradient, vec2(w,1.0-w)).rgb;\n\t#elif defined color_type_point_index\n\t\tcolor = indices.rgb;\n\t#elif defined color_type_classification\n\t\tvec4 cl = getClassification(); \n\t\tcolor = cl.rgb;\n\t#elif defined color_type_return_number\n\t\tcolor = getReturnNumber();\n\t#elif defined color_type_source\n\t\tcolor = getSourceID();\n\t#elif defined color_type_normal\n\t\tcolor = (modelMatrix * vec4(normal, 0.0)).xyz;\n\t#elif defined color_type_phong\n\t\tcolor = color;\n\t#elif defined color_type_composite\n\t\tcolor = getCompositeColor();\n\t#endif\n\t\n\treturn color;\n}\n\nfloat getPointSize()\n{\n\tfloat pointSize = 1.0;\n\t\n\tfloat slope = tan(fov / 2.0);\n\tfloat projFactor = -0.5 * uScreenHeight / (slope * vViewPosition.z);\n\t\n\tfloat r = uOctreeSpacing * 1.7;\n\tvRadius = r;\n\n\t#if defined fixed_point_size\n\t\tpointSize = size;\n\t#elif defined attenuated_point_size\n\t\tif(uUseOrthographicCamera)\n\t\t{\n\t\t\tpointSize = size;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tpointSize = size * spacing * projFactor;\n\t\t}\n\t#elif defined adaptive_point_size\n\t\tif(uUseOrthographicCamera)\n\t\t{\n\t\t\tfloat worldSpaceSize = 1.0 * size * r / getPointSizeAttenuation();\n\t\t\tpointSize = (worldSpaceSize / uOrthoWidth) * uScreenWidth;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tif(uIsLeafNode && false)\n\t\t\t{\n\t\t\t\tpointSize = size * spacing * projFactor;\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tfloat worldSpaceSize = 1.0 * size * r / getPointSizeAttenuation();\n\t\t\t\tpointSize = worldSpaceSize * projFactor;\n\t\t\t}\n\t\t}\n\t#endif\n\n\tpointSize = max(minSize, pointSize);\n\tpointSize = min(maxSize, pointSize);\n\t\n\tvRadius = pointSize / projFactor;\n\n\treturn pointSize;\n}\n\n#if defined num_clippolygons && num_clippolygons > 0\n\tbool pointInClipPolygon(vec3 point, int polyIdx)\n\t{\n\t\tmat4 wvp = uClipPolygonWVP[polyIdx];\n\n\t\tvec4 pointNDC = wvp * vec4(point, 1.0);\n\t\tpointNDC.xy = pointNDC.xy / pointNDC.w;\n\n\t\tint j = uClipPolygonVCount[polyIdx] - 1;\n\t\tbool c = false;\n\t\tfor(int i = 0; i < 8; i++)\n\t\t{\n\t\t\tif(i == uClipPolygonVCount[polyIdx])\n\t\t\t{\n\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tvec3 verti = uClipPolygonVertices[polyIdx * 8 + i];\n\t\t\tvec3 vertj = uClipPolygonVertices[polyIdx * 8 + j];\n\n\t\t\tif(((verti.y > pointNDC.y) != (vertj.y > pointNDC.y)) && (pointNDC.x < (vertj.x-verti.x) * (pointNDC.y-verti.y) / (vertj.y-verti.y) + verti.x))\n\t\t\t{\n\t\t\t\tc = !c;\n\t\t\t}\n\n\t\t\tj = i;\n\t\t}\n\n\t\treturn c;\n\t}\n#endif\n\nvoid doClipping()\n{\n\t#if !defined color_type_composite\n\t\tvec4 cl = getClassification(); \n\t\tif(cl.a == 0.0)\n\t\t{\n\t\t\tgl_Position = vec4(100.0, 100.0, 100.0, 0.0);\n\t\t\t\n\t\t\treturn;\n\t\t}\n\t#endif\n\n\tint clipVolumesCount = 0;\n\tint insideCount = 0;\n\n\t#if defined(num_clipboxes) && num_clipboxes > 0\n\t\tfor(int i = 0; i < num_clipboxes; i++)\n\t\t{\n\t\t\tvec4 clipPosition = clipBoxes[i] * modelMatrix * vec4( position, 1.0 );\n\t\t\tbool inside = -0.5 <= clipPosition.x && clipPosition.x <= 0.5;\n\t\t\tinside = inside && -0.5 <= clipPosition.y && clipPosition.y <= 0.5;\n\t\t\tinside = inside && -0.5 <= clipPosition.z && clipPosition.z <= 0.5;\n\n\t\t\tinsideCount = insideCount + (inside ? 1 : 0);\n\t\t\tclipVolumesCount++;\n\t\t}\t\n\t#endif\n\n\t#if defined(num_clippolygons) && num_clippolygons > 0\n\t\tfor(int i = 0; i < num_clippolygons; i++)\n\t\t{\n\t\t\tbool inside = pointInClipPolygon(position, i);\n\n\t\t\tinsideCount = insideCount + (inside ? 1 : 0);\n\t\t\tclipVolumesCount++;\n\t\t}\n\t#endif\n\n\tbool insideAny = insideCount > 0;\n\tbool insideAll = (clipVolumesCount > 0) && (clipVolumesCount == insideCount);\n\n\tif(clipMethod == CLIPMETHOD_INSIDE_ANY)\n\t{\n\t\tif(insideAny && clipTask == CLIPTASK_HIGHLIGHT)\n\t\t{\n\t\t\tvColor.r += 0.5;\n\t\t}\n\t\telse if(!insideAny && clipTask == CLIPTASK_SHOW_INSIDE)\n\t\t{\n\t\t\tgl_Position = vec4(100.0, 100.0, 100.0, 1.0);\n\t\t}\n\t\telse if(insideAny && clipTask == CLIPTASK_SHOW_OUTSIDE)\n\t\t{\n\t\t\tgl_Position = vec4(100.0, 100.0, 100.0, 1.0);\n\t\t}\n\t}\n\telse if(clipMethod == CLIPMETHOD_INSIDE_ALL)\n\t{\n\t\tif(insideAll && clipTask == CLIPTASK_HIGHLIGHT)\n\t\t{\n\t\t\tvColor.r += 0.5;\n\t\t}\n\t\telse if(!insideAll && clipTask == CLIPTASK_SHOW_INSIDE)\n\t\t{\n\t\t\tgl_Position = vec4(100.0, 100.0, 100.0, 1.0);\n\t\t}\n\t\telse if(insideAll && clipTask == CLIPTASK_SHOW_OUTSIDE)\n\t\t{\n\t\t\tgl_Position = vec4(100.0, 100.0, 100.0, 1.0);\n\t\t}\n\t}\n}\n\nvoid main()\n{\n\tvec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n\tvViewPosition = mvPosition.xyz;\n\tgl_Position = projectionMatrix * mvPosition;\n\n\tvLogDepth = log2(-mvPosition.z);\n\n\t//POINT SIZE\n\tfloat pointSize = getPointSize();\n\tgl_PointSize = pointSize;\n\tvPointSize = pointSize;\n\n\t" +
    THREE.ShaderChunk.logdepthbuf_vertex +
    "\n\n\t//COLOR\n\tvColor = getColor();\n\n\t#if defined hq_depth_pass\n\t\tfloat originalDepth = gl_Position.w;\n\t\tfloat adjustedDepth = originalDepth + 2.0 * vRadius;\n\t\tfloat adjust = adjustedDepth / originalDepth;\n\n\t\tmvPosition.xyz = mvPosition.xyz * adjust;\n\t\tgl_Position = projectionMatrix * mvPosition;\n\t#endif\n\n\t//CLIPPING\n\tdoClipping();\n\n\t#if defined num_clipspheres && num_clipspheres > 0\n\t\tfor(int i = 0; i < num_clipspheres; i++)\n\t\t{\n\t\t\tvec4 sphereLocal = uClipSpheres[i] * mvPosition;\n\n\t\t\tfloat distance = length(sphereLocal.xyz);\n\n\t\t\tif(distance < 1.0)\n\t\t\t{\n\t\t\t\tfloat w = distance;\n\t\t\t\tvec3 cGradient = texture2D(gradient, vec2(w, 1.0 - w)).rgb;\n\t\t\t\t\n\t\t\t\tvColor = cGradient;\n\t\t\t}\n\t\t}\n\t#endif\n\n\t#if defined num_shadowmaps && num_shadowmaps > 0\n\n\t\tconst float sm_near = 0.1;\n\t\tconst float sm_far = 10000.0;\n\n\t\tfor(int i = 0; i < num_shadowmaps; i++)\n\t\t{\n\t\t\tvec3 viewPos = (uShadowWorldView[i] * vec4(position, 1.0)).xyz;\n\t\t\tfloat distanceToLight = abs(viewPos.z);\n\t\t\t\n\t\t\tvec4 projPos = uShadowProj[i] * uShadowWorldView[i] * vec4(position, 1);\n\t\t\tvec3 nc = projPos.xyz / projPos.w;\n\t\t\t\n\t\t\tfloat u = nc.x * 0.5 + 0.5;\n\t\t\tfloat v = nc.y * 0.5 + 0.5;\n\n\t\t\tvec2 sampleStep = vec2(1.0 / (2.0*1024.0), 1.0 / (2.0*1024.0)) * 1.5;\n\t\t\tvec2 sampleLocations[9];\n\n\t\t\tsampleLocations[0] = vec2(0.0, 0.0);\n\t\t\tsampleLocations[1] = sampleStep;\n\t\t\tsampleLocations[2] = -sampleStep;\n\t\t\tsampleLocations[3] = vec2(sampleStep.x, -sampleStep.y);\n\t\t\tsampleLocations[4] = vec2(-sampleStep.x, sampleStep.y);\n\t\t\tsampleLocations[5] = vec2(0.0, sampleStep.y);\n\t\t\tsampleLocations[6] = vec2(0.0, -sampleStep.y);\n\t\t\tsampleLocations[7] = vec2(sampleStep.x, 0.0);\n\t\t\tsampleLocations[8] = vec2(-sampleStep.x, 0.0);\n\n\t\t\tfloat visibleSamples = 0.0;\n\t\t\tfloat numSamples = 0.0;\n\n\t\t\tfloat bias = vRadius * 2.0;\n\n\t\t\tfor(int j = 0; j < 9; j++)\n\t\t\t{\n\t\t\t\tvec4 depthMapValue = texture2D(uShadowMap[i], vec2(u, v) + sampleLocations[j]);\n\n\t\t\t\tfloat linearDepthFromSM = depthMapValue.x + bias;\n\t\t\t\tfloat linearDepthFromViewer = distanceToLight;\n\n\t\t\t\tif(linearDepthFromSM > linearDepthFromViewer)\n\t\t\t\t{\n\t\t\t\t\tvisibleSamples += 1.0;\n\t\t\t\t}\n\n\t\t\t\tnumSamples += 1.0;\n\t\t\t}\n\n\t\t\tfloat visibility = visibleSamples / numSamples;\n\n\t\t\tif(u < 0.0 || u > 1.0 || v < 0.0 || v > 1.0 || nc.x < -1.0 || nc.x > 1.0 || nc.y < -1.0 || nc.y > 1.0 || nc.z < -1.0 || nc.z > 1.0)\n\t\t\t{\n\t\t\t\t//vColor = vec3(0.0, 0.0, 0.2);\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tvColor = vColor * visibility + vColor * uShadowColor * (1.0 - visibility);\n\t\t\t}\n\t\t}\n\n\t#endif\n}";
PotreeShaders["pointcloud.fs"] =
    "\n\n#if defined USE_LOGDEPTHBUF_EXT || defined paraboloid_point_shape\n\t#extension GL_EXT_frag_depth : enable\n#endif\n\nprecision highp float;\nprecision highp int;\n\n" +
    THREE.ShaderChunk.logdepthbuf_pars_fragment +
    "\n\nuniform mat4 viewMatrix;\nuniform mat4 uViewInv;\nuniform mat4 uProjInv;\nuniform vec3 cameraPosition;\n\nuniform mat4 projectionMatrix;\nuniform float uOpacity;\n\nuniform float blendHardness;\nuniform float blendDepthSupplement;\nuniform float fov;\nuniform float uSpacing;\nuniform float near;\nuniform float far;\nuniform float uPCIndex;\nuniform float uScreenWidth;\nuniform float uScreenHeight;\n\nvarying vec3 vColor;\nvarying float vLogDepth;\nvarying vec3 vViewPosition;\nvarying float vRadius;\nvarying float vPointSize;\nvarying vec3 vPosition;\n\nvoid main()\n{\n\tvec3 color = vColor;\n\tfloat depth = gl_FragCoord.z;\n\n\t#if defined circle_point_shape || defined paraboloid_point_shape\n\t\tfloat u = (2.0 * gl_PointCoord.x) - 1.0;\n\t\tfloat v = (2.0 * gl_PointCoord.y) - 1.0;\n\t#endif\n\t\n\t#if defined circle_point_shape\n\t\tfloat cc = (u*u) + (v*v);\n\t\tif(cc > 1.0)\n\t\t{\n\t\t\tdiscard;\n\t\t}\n\t#endif\n\n\t#if defined color_type_point_index\n\t\tgl_FragColor = vec4(color, uPCIndex / 255.0);\n\t#else\n\t\tgl_FragColor = vec4(color, uOpacity);\n\t#endif\n\n\t#if defined paraboloid_point_shape\n\t\tfloat wi = -( u*u + v*v);\n\t\tvec4 pos = vec4(vViewPosition, 1.0);\n\t\tpos.z += wi * vRadius;\n\t\tfloat linearDepth = -pos.z;\n\t\tpos = projectionMatrix * pos;\n\t\tpos = pos / pos.w;\n\t\tfloat expDepth = pos.z;\n\t\tdepth = (pos.z + 1.0) / 2.0;\n\n\t\tgl_FragDepthEXT = depth;\n\t\t\n\t\t#if defined color_type_depth\n\t\t\tcolor.r = linearDepth;\n\t\t\tcolor.g = expDepth;\n\t\t#endif\n\t#endif\n\t\n\t" +
    THREE.ShaderChunk.logdepthbuf_fragment +
    "\n\n\t#if defined weighted_splats\n\t\tfloat distance = 2.0 * length(gl_PointCoord.xy - 0.5);\n\t\tfloat weight = max(0.0, 1.0 - distance);\n\t\tweight = pow(weight, 1.5);\n\n\t\tgl_FragColor.a = weight;\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * weight;\n\t#endif\n}";
class PotreeDEM {
    constructor(a) {
        this.pointcloud = a;
        this.boundingBox = this.matrix = null;
        this.tileSize = 64;
        this.root = null;
        this.version = 0;
    }
    expandAndFindByBox(a, b) {
        if (0 === b) return [this.root];
        for (var c = [], e = [this.root]; 0 < e.length; ) {
            var d = e.pop(),
                f = d.box.getSize(new THREE.Vector3()),
                g = (a.min.x - d.box.min.x) / f.x,
                k = (a.min.y - d.box.min.y) / f.y,
                h = (a.max.x - d.box.max.x) / f.x,
                l = (a.max.y - d.box.max.y) / f.y;
            g = 0.5 > g ? 0 : 1;
            k = 0.5 > k ? 0 : 1;
            h = 0.5 > h ? 0 : 1;
            l = 0.5 > l ? 0 : 1;
            g =
                0 === g && 0 === k && 1 === h && 1 === l
                    ? [0, 1, 2, 3]
                    : g === h && k === l
                    ? [(g << 1) | k]
                    : [(g << 1) | k, (h << 1) | l];
            for (var m of g)
                void 0 === d.children[m] &&
                    ((g = d.box.clone()),
                    0 < (m & 2) ? (g.min.x += f.x / 2) : (g.max.x -= f.x / 2),
                    0 < (m & 1) ? (g.min.y += f.y / 2) : (g.max.y -= f.y / 2),
                    (g = new PotreeDEMNode(d.name + m, g, this.tileSize)),
                    (d.children[m] = g)),
                    (g = d.children[m]),
                    g.level < b ? e.push(g) : c.push(g);
        }
        return c;
    }
    childIndex(a) {
        var [a, b] = a.map(a => (0.5 > a ? 0 : 1));
        return (a << 1) | b;
    }
    height(a) {
        if (!this.root) return 0;
        for (var b = null, c = [this.root]; ; ) {
            var e = c[c.length - 1],
                d = e.height(a);
            null !== d && (b = d);
            d = e.uv(a);
            d = this.childIndex(d);
            if (e.children[d]) c.push(e.children[d]);
            else break;
        }
        return b + this.pointcloud.position.z;
    }
    update(a) {
        (null !== this.matrix &&
            this.matrix.equals(this.pointcloud.matrixWorld)) ||
            ((this.matrix = this.pointcloud.matrixWorld.clone()),
            (this.boundingBox = this.pointcloud.boundingBox
                .clone()
                .applyMatrix4(this.matrix)),
            (this.root = new PotreeDEMNode(
                "r",
                this.boundingBox,
                this.tileSize
            )),
            this.version++);
        var b = null,
            c;
        for (c of a)
            if (void 0 === c.demVersion || c.demVersion < this.version) {
                b = c;
                break;
            }
        if (null !== b) {
            var e = b
                    .getBoundingBox()
                    .clone()
                    .applyMatrix4(this.matrix),
                d = e.getSize(new THREE.Vector3()),
                f = this.expandAndFindByBox(e, b.getLevel());
            b.demVersion = this.version;
            a = b.geometryNode.geometry.attributes.position.array;
            b = {
                boundingBox: {
                    min: b.getBoundingBox().min.toArray(),
                    max: b.getBoundingBox().max.toArray()
                },
                position: new Float32Array(a).buffer
            };
            var g = this;
            Potree.workerPool.runTask(
                WorkerManager.DEM,
                function(a) {
                    a = new Float32Array(a.data.dem.data);
                    for (var b of f) {
                        for (
                            var c = b.box.getSize(new THREE.Vector3()), k = 0;
                            k < g.tileSize;
                            k++
                        )
                            for (var p = 0; p < g.tileSize; p++) {
                                var n =
                                        (g.tileSize *
                                            (b.box.min.x +
                                                (k / (g.tileSize - 1)) * c.x -
                                                e.min.x)) /
                                        d.x,
                                    q =
                                        (g.tileSize *
                                            (b.box.min.y +
                                                (p / (g.tileSize - 1)) * c.y -
                                                e.min.y)) /
                                        d.y;
                                0 > n ||
                                    n > g.tileSize ||
                                    0 > q ||
                                    q > g.tileSize ||
                                    ((n = Math.min(
                                        Math.floor(n),
                                        g.tileSize - 1
                                    )),
                                    (q = Math.min(
                                        Math.floor(q),
                                        g.tileSize - 1
                                    )),
                                    (b.data[k + g.tileSize * p] =
                                        a[n + g.tileSize * q]));
                            }
                        b.createMipMap();
                        b.mipMapNeedsUpdate = !0;
                    }
                },
                b,
                [b.position]
            );
        }
    }
}
class PotreeDEMNode {
    constructor(a, b, c) {
        this.name = a;
        this.box = b;
        this.tileSize = c;
        this.level = this.name.length - 1;
        this.data = new Float32Array(c * c);
        this.data.fill(-Infinity);
        this.children = [];
        this.mipMap = [this.data];
        this.mipMapNeedsUpdate = !0;
    }
    createMipMap() {
        this.mipMap = [this.data];
        for (
            var a = this.tileSize, b = parseInt(a / 2), c = this.data;
            1 < b;

        ) {
            for (var e = new Float32Array(b * b), d = 0; d < b; d++)
                for (var f = 0; f < b; f++) {
                    var g = c[2 * d + 2 * f * a],
                        k = c[2 * d + 2 * f * a + a],
                        h = c[2 * d + 1 + 2 * f * a],
                        l = c[2 * d + 1 + 2 * f * a + a],
                        [m, p] = [0, 0];
                    isFinite(g) && ((m += g), (p += 1));
                    isFinite(k) && ((m += k), (p += 1));
                    isFinite(h) && ((m += h), (p += 1));
                    isFinite(l) && ((m += l), (p += 1));
                    m /= p;
                    e[d + f * b] = m;
                }
            this.mipMap.push(e);
            c = e;
            a = b;
            b = parseInt(b / 2);
        }
        this.mipMapNeedsUpdate = !1;
    }
    uv(a) {
        var b = this.box.getSize(new THREE.Vector3());
        return [(a.x - this.box.min.x) / b.x, (a.y - this.box.min.y) / b.y];
    }
    heightAtMipMapLevel(a, b) {
        a = this.uv(a);
        var c = parseInt(this.tileSize / parseInt(2 ** b)),
            e = this.mipMap[b],
            d = Math.min(a[0] * c, c - 1);
        a = Math.min(a[1] * c, c - 1);
        b = d % 1;
        var f = a % 1,
            [d, g] = [Math.floor(d), Math.ceil(d)],
            [k, h] = [Math.floor(a), Math.ceil(a)];
        a = e[d + c * k];
        d = e[d + c * h];
        k = e[g + c * k];
        c = e[g + c * h];
        e = isFinite(a) ? (1 - b) * (1 - f) : 0;
        g = isFinite(d) ? (1 - b) * f : 0;
        h = isFinite(k) ? b * (1 - f) : 0;
        b = isFinite(c) ? b * f : 0;
        f = e + g + h + b;
        e /= f;
        g /= f;
        h /= f;
        b /= f;
        if (0 === f) return null;
        f = 0;
        isFinite(a) && (f += a * e);
        isFinite(d) && (f += d * g);
        isFinite(k) && (f += k * h);
        isFinite(c) && (f += c * b);
        return f;
    }
    height(a) {
        for (
            var b = null, c = 0;
            c < this.mipMap.length &&
            ((b = this.heightAtMipMapLevel(a, c)), null === b);
            c++
        );
        return b;
    }
    traverse(a, b = 0) {
        a(this, b);
        for (var c of this.children.filter(a => void 0 !== a))
            c.traverse(a, b + 1);
    }
}
class PointCloudTreeNode {
    constructor() {
        this.needsTransformUpdate = !0;
    }
    getChildren() {}
    getBoundingBox() {}
    isLoaded() {}
    isGeometryNode() {}
    isTreeNode() {}
    getLevel() {}
    getBoundingSphere() {}
}
class PointCloudTree extends THREE.Object3D {
    constructor() {
        super();
        this.dem = new PotreeDEM(this);
    }
    initialized() {
        return null !== this.root;
    }
}
class PointCloudArena4DNode extends PointCloudTreeNode {
    constructor() {
        super();
        this.kdtree = this.sceneNode = this.right = this.left = null;
    }
    getNumPoints() {
        return this.geometryNode.numPoints;
    }
    isLoaded() {
        return !0;
    }
    isTreeNode() {
        return !0;
    }
    isGeometryNode() {
        return !1;
    }
    getLevel() {
        return this.geometryNode.level;
    }
    getBoundingSphere() {
        return this.geometryNode.boundingSphere;
    }
    getBoundingBox() {
        return this.geometryNode.boundingBox;
    }
    toTreeNode(a) {
        var b = null;
        this.left === a
            ? (b = this.left)
            : this.right === a && (b = this.right);
        if (b.loaded) {
            a = new PointCloudArena4DNode();
            var c = THREE.PointCloud(b.geometry, this.kdtree.material);
            c.visible = !1;
            a.kdtree = this.kdtree;
            a.geometryNode = b;
            a.sceneNode = c;
            a.parent = this;
            a.left = this.geometryNode.left;
            a.right = this.geometryNode.right;
        }
    }
    getChildren() {
        var a = [];
        this.left && a.push(this.left);
        this.right && a.push(this.right);
        return a;
    }
}
class PointCloudArena4D extends PointCloudTree {
    constructor(a) {
        super();
        this.root = null;
        a.root
            ? (this.root = a.root)
            : a.addEventListener("hierarchy_loaded", () => {
                  this.root = a.root;
              });
        this.visiblePointsTarget = 2e6;
        this.minimumNodePixelSize = 150;
        this.position.sub(a.offset);
        this.updateMatrix();
        this.numVisiblePoints = this.numVisibleNodes = 0;
        this.boundingBoxNodes = [];
        this.loadQueue = [];
        this.visibleNodes = [];
        this.pcoGeometry = a;
        this.boundingBox = this.pcoGeometry.boundingBox;
        this.boundingSphere = this.pcoGeometry.boundingSphere;
        this.material = new PointCloudMaterial({
            vertexColors: THREE.VertexColors,
            size: 0.05,
            treeType: Potree.TreeType.KDTREE
        });
        this.material.sizeType = Potree.PointSizeType.ATTENUATED;
        this.material.size = 0.05;
        this.profileRequests = [];
        this.name = "";
    }
    getBoundingBoxWorld() {
        this.updateMatrixWorld(!0);
        return HelperUtils.computeTransformedBoundingBox(
            this.boundingBox,
            this.matrixWorld
        );
    }
    setName(a) {
        this.name !== a &&
            ((this.name = a),
            this.dispatchEvent({
                type: "name_changed",
                name: a,
                pointcloud: this
            }));
    }
    getName() {
        return this.name;
    }
    getLevel() {
        return this.level;
    }
    toTreeNode(a, b) {
        var c = new PointCloudArena4DNode(),
            e = new THREE.Points(a.geometry, this.material);
        e.frustumCulled = !0;
        e.onBeforeRender = (b, e, g, k, h, l) => {
            h.program &&
                (b.getContext().useProgram(h.program.program),
                h.program.getUniforms().map.level &&
                    ((e = a.getLevel()),
                    (h.uniforms.level.value = e),
                    h.program
                        .getUniforms()
                        .map.level.setValue(b.getContext(), e)),
                this.visibleNodeTextureOffsets &&
                    h.program.getUniforms().map.vnStart &&
                    ((e = this.visibleNodeTextureOffsets.get(c)),
                    (h.uniforms.vnStart.value = e),
                    h.program
                        .getUniforms()
                        .map.vnStart.setValue(b.getContext(), e)),
                h.program.getUniforms().map.pcIndex &&
                    ((e = c.pcIndex ? c.pcIndex : this.visibleNodes.indexOf(c)),
                    (h.uniforms.pcIndex.value = e),
                    h.program
                        .getUniforms()
                        .map.pcIndex.setValue(b.getContext(), e)));
        };
        c.geometryNode = a;
        c.sceneNode = e;
        c.pointcloud = this;
        c.left = a.left;
        c.right = a.right;
        b
            ? (b.sceneNode.add(e),
              b.left === a ? (b.left = c) : b.right === a && (b.right = c))
            : ((this.root = c), this.add(e));
        a.oneTimeDisposeHandlers.push(function() {
            b.sceneNode.remove(c.sceneNode);
            b.left === c ? (b.left = a) : b.right === c && (b.right = a);
        });
        return c;
    }
    updateMaterial(a, b, c, e) {
        a.fov = (Math.PI / 180) * c.fov;
        a.screenWidth = e.domElement.clientWidth;
        a.screenHeight = e.domElement.clientHeight;
        a.spacing = this.pcoGeometry.spacing;
        a.near = c.near;
        a.far = c.far;
        this.maxLevel > a.levels && (a.levels = this.maxLevel + 2);
        b = this.boundingBox.getSize(new THREE.Vector3());
        a.bbSize = [b.x, b.y, b.z];
    }
    updateVisibleBounds() {}
    hideDescendants(a) {
        for (var b = [], c = 0; c < a.children.length; c++) {
            var e = a.children[c];
            e.visible && b.push(e);
        }
        for (; 0 < b.length; )
            for (
                e = b.shift(),
                    e.visible = !1,
                    e.boundingBoxNode && (e.boundingBoxNode.visible = !1),
                    c = 0;
                c < e.children.length;
                c++
            )
                (a = e.children[c]), a.visible && b.push(a);
    }
    updateMatrixWorld(a) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === a)
            void 0 === this.parent
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(
                      this.parent.matrixWorld,
                      this.matrix
                  ),
                (this.matrixWorldNeedsUpdate = !1);
    }
    nodesOnRay(a, b) {
        var c = [];
        b = b.clone();
        for (var e = 0; e < a.length; e++) {
            var d = a[e],
                f = d
                    .getBoundingSphere(new THREE.Sphere())
                    .clone()
                    .applyMatrix4(d.sceneNode.matrixWorld);
            b.intersectsSphere(f) && c.push(d);
        }
        return c;
    }
    pick(a, b, c, e = {}) {
        var d = a.renderer,
            f = a.pRenderer;
        performance.mark("pick-start");
        var g = (a, b) => (void 0 !== a ? a : b);
        a = g(e.pickWindowSize, 17);
        g(e.pickOutsideClipRegion, !1);
        var k = d.getSize(new THREE.Vector3()),
            h = Math.ceil(g(e.width, k.width));
        k = Math.ceil(g(e.height, k.height));
        var l = g(e.pointSizeType, this.material.pointSizeType);
        g = g(e.pointSize, this.material.size);
        c = this.nodesOnRay(this.visibleNodes, c);
        if (0 === c.length) return null;
        if (!this.pickState) {
            var m = new THREE.Scene(),
                p = new PointCloudMaterial();
            p.pointColorType = Potree.PointColorType.POINT_INDEX;
            this.pickState = {
                renderTarget: new THREE.WebGLRenderTarget(1, 1, {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat
                }),
                material: p,
                scene: m
            };
        }
        m = this.pickState;
        p = m.material;
        p.pointSizeType = l;
        p.shape = this.material.shape;
        p.size = g;
        p.uniforms.minSize.value = this.material.uniforms.minSize.value;
        p.uniforms.maxSize.value = this.material.uniforms.maxSize.value;
        p.classification = this.material.classification;
        e.pickClipped
            ? ((p.clipBoxes = this.material.clipBoxes),
              (p.clipTask =
                  this.material.clipTask === Potree.ClipTask.HIGHLIGHT
                      ? Potree.ClipTask.NONE
                      : this.material.clipTask))
            : (p.clipBoxes = []);
        this.updateMaterial(p, c, b, d);
        m.renderTarget.setSize(h, k);
        g = new THREE.Vector2(e.x, e.y);
        l = d.getContext();
        l.enable(l.SCISSOR_TEST);
        l.scissor(
            parseInt(g.x - (a - 1) / 2),
            parseInt(g.y - (a - 1) / 2),
            parseInt(a),
            parseInt(a)
        );
        d.state.buffers.depth.setTest(p.depthTest);
        d.state.buffers.depth.setMask(p.depthWrite);
        d.state.setBlending(THREE.NoBlending);
        d.clearTarget(m.renderTarget, !0, !0, !0);
        d.setRenderTarget(m.renderTarget);
        l.clearColor(0, 0, 0, 0);
        d.clearTarget(m.renderTarget, !0, !0, !0);
        var n = this.material;
        this.material = p;
        f.renderOctree(this, c, b, m.renderTarget);
        this.material = n;
        b = parseInt(Math.min(Math.max(0, g.x - (a - 1) / 2), h));
        f = parseInt(Math.min(Math.max(0, g.y - (a - 1) / 2), k));
        h = parseInt(Math.min(b + a, h) - b);
        k = parseInt(Math.min(f + a, k) - f);
        h = new Uint8Array(4 * h * k);
        l.readPixels(b, f, a, a, l.RGBA, l.UNSIGNED_BYTE, h);
        d.setRenderTarget(null);
        d.resetGLState();
        d.setScissorTest(!1);
        l.disable(l.SCISSOR_TEST);
        k = new Uint32Array(h.buffer);
        d = [];
        for (b = 0; b < a; b++)
            for (f = 0; f < a; f++)
                if (
                    ((m = b + f * a),
                    (l =
                        Math.pow(b - (a - 1) / 2, 2) +
                        Math.pow(f - (a - 1) / 2, 2)),
                    (g = h[4 * m + 3]),
                    (h[4 * m + 3] = 0),
                    (m = k[m]),
                    (0 !== g || 0 !== m) && void 0 !== g && void 0 !== m)
                ) {
                    var q = {
                        pIndex: m,
                        pcIndex: g,
                        distanceToCenter: l
                    };
                    e.all
                        ? d.push(q)
                        : 0 < d.length
                        ? l < d[0].distanceToCenter && (d[0] = q)
                        : d.push(q);
                }
        for (q of d) {
            a = {};
            if (!c[q.pcIndex]) return null;
            k = c[q.pcIndex];
            h = k.sceneNode;
            k = k.geometryNode.geometry;
            for (var r in k.attributes)
                (l = k.attributes[r]),
                    "position" === r &&
                        ((b = l.array[3 * q.pIndex]),
                        (f = l.array[3 * q.pIndex + 1]),
                        (b = new THREE.Vector3(
                            b,
                            f,
                            l.array[3 * q.pIndex + 2]
                        )),
                        b.applyMatrix4(h.matrixWorld),
                        (a[r] = b));
            q.point = a;
        }
        performance.mark("pick-end");
        performance.measure("pick", "pick-start", "pick-end");
        return e.all ? d.map(a => a.point) : 0 === d.length ? null : d[0].point;
    }
    computeVisibilityTextureData(a) {
        Potree.measureTimings &&
            performance.mark("computeVisibilityTextureData-start");
        var b = new Uint8Array(3 * a.length),
            c = new Map();
        a = a.slice();
        a.sort(function(a, b) {
            var c = a.geometryNode.level,
                d = b.geometryNode.level;
            a = a.geometryNode.number;
            b = b.geometryNode.number;
            return c !== d ? c - d : a < b ? -1 : a > b ? 1 : 0;
        });
        for (var e = [], d = 0; d < a.length; d++)
            e.push(a[d].geometryNode.number);
        for (d = 0; d < a.length; d++) {
            var f = a[d];
            c.set(f, d);
            var g = 0,
                k = 0,
                h = 0;
            f.geometryNode.left &&
                0 < e.indexOf(f.geometryNode.left.number) &&
                ((g += 1), (k = e.indexOf(f.geometryNode.left.number) - d));
            f.geometryNode.right &&
                0 < e.indexOf(f.geometryNode.right.number) &&
                ((g += 2),
                (k = 0 === k ? e.indexOf(f.geometryNode.right.number) - d : k));
            "X" === f.geometryNode.split
                ? (h = 1)
                : "Y" === f.geometryNode.split
                ? (h = 2)
                : "Z" === f.geometryNode.split && (h = 4);
            b[3 * d] = g;
            b[3 * d + 1] = k;
            b[3 * d + 2] = h;
        }
        Potree.measureTimings &&
            (performance.mark("computeVisibilityTextureData-end"),
            performance.measure(
                "render.computeVisibilityTextureData",
                "computeVisibilityTextureData-start",
                "computeVisibilityTextureData-end"
            ));
        return {
            data: b,
            offsets: c
        };
    }
    get progress() {
        return this.pcoGeometry.root ? (0 < Potree.numNodesLoading ? 0 : 1) : 0;
    }
}
class PointCloudOctreeNode extends PointCloudTreeNode {
    constructor() {
        super();
        this.children = {};
        this.octree = this.sceneNode = null;
    }
    getNumPoints() {
        return this.geometryNode.numPoints;
    }
    isLoaded() {
        return !0;
    }
    isTreeNode() {
        return !0;
    }
    isGeometryNode() {
        return !1;
    }
    getLevel() {
        return this.geometryNode.level;
    }
    getBoundingSphere() {
        return this.geometryNode.boundingSphere;
    }
    getBoundingBox() {
        return this.geometryNode.boundingBox;
    }
    getChildren() {
        for (var a = [], b = 0; 8 > b; b++)
            this.children[b] && a.push(this.children[b]);
        return a;
    }
    getPointsInBox(a) {
        if (!this.sceneNode) return null;
        var b = this.geometryNode.buffer,
            c = b.offset("position"),
            e = b.stride,
            d = new DataView(b.data);
        a = new THREE.Matrix4().getInverse(a.matrixWorld);
        a = new THREE.Matrix4().multiplyMatrices(a, this.sceneNode.matrixWorld);
        for (
            var f = [], g = new THREE.Vector4(), k = 0;
            k < b.numElements;
            k++
        ) {
            var h = d.getFloat32(k * e + c + 0, !0),
                l = d.getFloat32(k * e + c + 4, !0),
                m = d.getFloat32(k * e + c + 8, !0);
            g.set(h, l, m, 1);
            g.applyMatrix4(a);
            -0.5 < g.x &&
                0.5 > g.x &&
                -0.5 < g.y &&
                0.5 > g.y &&
                -0.5 < g.z &&
                0.5 > g.z &&
                (g.set(h, l, m, 1).applyMatrix4(this.sceneNode.matrixWorld),
                f.push(new THREE.Vector3(g.x, g.y, g.z)));
        }
        return f;
    }
    get name() {
        return this.geometryNode.name;
    }
}
class PointCloudOctree extends PointCloudTree {
    constructor(a, b) {
        super();
        this.pointBudget = Infinity;
        this.pcoGeometry = a;
        this.boundingBox = this.pcoGeometry.boundingBox;
        this.boundingSphere = this.boundingBox.getBoundingSphere(
            new THREE.Sphere()
        );
        this.material = b || new PointCloudMaterial();
        this.visiblePointsTarget = 2e6;
        this.minimumNodePixelSize = 150;
        this.level = 0;
        this.position.copy(a.offset);
        this.updateMatrix();
        this.showBoundingBox = !1;
        this.boundingBoxNodes = [];
        this.loadQueue = [];
        this.visibleBounds = new THREE.Box3();
        this.visibleNodes = [];
        this.visibleGeometry = [];
        this.generateDEM = !1;
        this.profileRequests = [];
        this.name = "";
        this.tempVector3 = new THREE.Vector3();
        b = [
            this.pcoGeometry.tightBoundingBox,
            this.getBoundingBoxWorld()
        ].find(a => void 0 !== a);
        this.updateMatrixWorld(!0);
        b = HelperUtils.computeTransformedBoundingBox(b, this.matrixWorld);
        var c = b.max.z;
        this.material.heightMin = b.min.z;
        this.material.heightMax = c;
        this.projection = a.projection;
        this.root = this.pcoGeometry.root;
    }
    setName(a) {
        this.name !== a &&
            ((this.name = a),
            this.dispatchEvent({
                type: "name_changed",
                name: a,
                pointcloud: this
            }));
    }
    getName() {
        return this.name;
    }
    toTreeNode(a, b) {
        var c = new PointCloudOctreeNode(),
            e = new THREE.Points(a.geometry, this.material);
        e.name = a.name;
        e.position.copy(a.boundingBox.min);
        e.frustumCulled = !0;
        e.onBeforeRender = (b, d, e, h, l, m) => {
            l.program &&
                (b.getContext().useProgram(l.program.program),
                l.program.getUniforms().map.level &&
                    ((d = a.getLevel()),
                    (l.uniforms.level.value = d),
                    l.program
                        .getUniforms()
                        .map.level.setValue(b.getContext(), d)),
                this.visibleNodeTextureOffsets &&
                    l.program.getUniforms().map.vnStart &&
                    ((d = this.visibleNodeTextureOffsets.get(c)),
                    (l.uniforms.vnStart.value = d),
                    l.program
                        .getUniforms()
                        .map.vnStart.setValue(b.getContext(), d)),
                l.program.getUniforms().map.pcIndex &&
                    ((d = c.pcIndex ? c.pcIndex : this.visibleNodes.indexOf(c)),
                    (l.uniforms.pcIndex.value = d),
                    l.program
                        .getUniforms()
                        .map.pcIndex.setValue(b.getContext(), d)));
        };
        c.geometryNode = a;
        c.sceneNode = e;
        c.pointcloud = this;
        c.children = {};
        for (var d in a.children) c.children[d] = a.children[d];
        b
            ? ((d = parseInt(a.name[a.name.length - 1])),
              b.sceneNode.add(e),
              (b.children[d] = c))
            : ((this.root = c), this.add(e));
        a.oneTimeDisposeHandlers.push(function() {
            var d = parseInt(a.name[a.name.length - 1]);
            b.sceneNode.remove(c.sceneNode);
            b.children[d] = a;
        });
        return c;
    }
    updateVisibleBounds() {
        for (var a = [], b = 0; b < this.visibleNodes.length; b++) {
            for (
                var c = this.visibleNodes[b], e = !0, d = 0;
                d < c.children.length;
                d++
            ) {
                var f = c.children[d];
                f instanceof PointCloudOctreeNode
                    ? (e = e && !f.sceneNode.visible)
                    : f instanceof PointCloudOctreeGeometryNode && (e = !0);
            }
            e && a.push(c);
        }
        this.visibleBounds.min = new THREE.Vector3(
            Infinity,
            Infinity,
            Infinity
        );
        this.visibleBounds.max = new THREE.Vector3(
            -Infinity,
            -Infinity,
            -Infinity
        );
        for (b = 0; b < a.length; b++)
            (c = a[b]),
                this.visibleBounds.expandByPoint(c.getBoundingBox().min),
                this.visibleBounds.expandByPoint(c.getBoundingBox().max);
    }
    updateMaterial(a, b, c, e) {
        a.fov = (Math.PI / 180) * c.fov;
        a.screenWidth = e.domElement.clientWidth;
        a.screenHeight = e.domElement.clientHeight;
        a.spacing =
            this.pcoGeometry.spacing *
            Math.max(this.scale.x, this.scale.y, this.scale.z);
        a.near = c.near;
        a.far = c.far;
        a.uniforms.octreeSize.value = this.pcoGeometry.boundingBox.getSize(
            new THREE.Vector3()
        ).x;
    }
    computeVisibilityTextureData(a, b) {
        Potree.measureTimings &&
            performance.mark("computeVisibilityTextureData-start");
        var c = new Uint8Array(4 * a.length),
            e = new Map();
        a = a.slice();
        a.sort(function(a, b) {
            a = a.geometryNode.name;
            b = b.geometryNode.name;
            return a.length !== b.length
                ? a.length - b.length
                : a < b
                ? -1
                : a > b
                ? 1
                : 0;
        });
        for (
            var d = new THREE.Vector3(),
                f = (a, b) => {
                    d.subVectors(b.center, a.origin);
                    a = d.dot(a.direction);
                    var c = d.dot(d) - a * a;
                    b = b.radius * b.radius;
                    if (c > b) return null;
                    b = a + Math.sqrt(b - c);
                    return 0 > b ? null : b;
                },
                g = new Map(),
                k = new Map(),
                h = 0;
            h < a.length;
            h++
        ) {
            var l = a[h];
            e.set(l, h);
            for (var m = [], p = 0; 8 > p; p++) {
                var n = l.children[p];
                n &&
                    n.constructor === PointCloudOctreeNode &&
                    a.includes(n, h) &&
                    m.push(n);
            }
            c[4 * h] = 0;
            c[4 * h + 1] = 0;
            c[4 * h + 2] = 0;
            c[4 * h + 3] = l.getLevel();
            for (p = 0; p < m.length; p++) {
                n = m[p];
                var q = parseInt(n.geometryNode.name.substr(-1));
                c[4 * h] += Math.pow(2, q);
                0 === p &&
                    ((n = a.indexOf(n, h)),
                    (c[4 * h + 1] = (n - h) >> 8),
                    (c[4 * h + 2] = (n - h) % 256));
            }
            p = l
                .getBoundingBox()
                .clone()
                .getBoundingSphere(new THREE.Sphere());
            p.applyMatrix4(l.sceneNode.matrixWorld);
            p.applyMatrix4(b.matrixWorldInverse);
            m = new THREE.Ray(
                b.position,
                b.getWorldDirection(this.tempVector3)
            );
            m = f(m, p);
            p = p.center.distanceTo(b.position) + p.radius;
            null === m && (m = p);
            m = Math.max(m, p);
            g.has(l.getLevel())
                ? ((p = g.get(l.getLevel())),
                  (p = Math.max(p, m)),
                  g.set(l.getLevel(), p))
                : g.set(l.getLevel(), m);
            if (!l.geometryNode.hasChildren) {
                var r = {
                    distance: m,
                    i: h
                };
                k.set(l, r);
            }
        }
        for ([l, r] of k)
            if (((a = l.getLevel()), (m = r.distance), (h = r.i), !(4 > a))) {
                var t, u;
                for ([t, u] of g) m < 1.2 * u && (c[4 * h + 3] = t);
            }
        Potree.measureTimings &&
            (performance.mark("computeVisibilityTextureData-end"),
            performance.measure(
                "render.computeVisibilityTextureData",
                "computeVisibilityTextureData-start",
                "computeVisibilityTextureData-end"
            ));
        return {
            data: c,
            offsets: e
        };
    }
    nodeIntersectsProfile(a, b) {
        a = a.boundingBox
            .clone()
            .applyMatrix4(this.matrixWorld)
            .getBoundingSphere(new THREE.Sphere());
        for (var c = !1, e = 0; e < b.points.length - 1; e++) {
            var d = new THREE.Vector3(
                    b.points[e + 0].x,
                    b.points[e + 0].y,
                    a.center.z
                ),
                f = new THREE.Vector3(
                    b.points[e + 1].x,
                    b.points[e + 1].y,
                    a.center.z
                );
            d = new THREE.Line3(d, f)
                .closestPointToPoint(a.center, !0)
                .distanceTo(a.center);
            c = c || d < a.radius + b.width;
        }
        return c;
    }
    nodesOnRay(a, b) {
        var c = [];
        b = b.clone();
        for (var e = 0; e < a.length; e++) {
            var d = a[e],
                f = d
                    .getBoundingSphere(new THREE.Sphere())
                    .clone()
                    .applyMatrix4(this.matrixWorld);
            b.intersectsSphere(f) && c.push(d);
        }
        return c;
    }
    updateMatrixWorld(a) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === a)
            this.parent
                ? this.matrixWorld.multiplyMatrices(
                      this.parent.matrixWorld,
                      this.matrix
                  )
                : this.matrixWorld.copy(this.matrix),
                (this.matrixWorldNeedsUpdate = !1);
    }
    hideDescendants(a) {
        for (var b = [], c = 0; c < a.children.length; c++) {
            var e = a.children[c];
            e.visible && b.push(e);
        }
        for (; 0 < b.length; )
            for (
                a = b.shift(), a.visible = !1, c = 0;
                c < a.children.length;
                c++
            )
                (e = a.children[c]), e.visible && b.push(e);
    }
    moveToOrigin() {
        this.position.set(0, 0, 0);
        this.updateMatrixWorld(!0);
        var a = HelperUtils.computeTransformedBoundingBox(
            this.boundingBox,
            this.matrixWorld
        );
        this.position.set(0, 0, 0).sub(a.getCenter());
    }
    moveToGroundPlane() {
        this.updateMatrixWorld(!0);
        var a = HelperUtils.computeTransformedBoundingBox(
            this.boundingBox,
            this.matrixWorld
        );
        this.position.y += -a.min.y;
    }
    getBoundingBoxWorld() {
        this.updateMatrixWorld(!0);
        return HelperUtils.computeTransformedBoundingBox(
            this.boundingBox,
            this.matrixWorld
        );
    }
    getPointsInProfile(a, b, c) {
        if (c)
            return (
                (c = new Potree.ProfileRequest(this, a, b, c)),
                this.profileRequests.push(c),
                c
            );
        c = {
            segments: [],
            boundingBox: new THREE.Box3(),
            projectedBoundingBox: new THREE.Box2()
        };
        for (var e = 0; e < a.points.length - 1; e++) {
            var d = a.points[e],
                f = a.points[e + 1],
                g = this.getProfile(d, f, a.width, b),
                k = {
                    start: d,
                    end: f,
                    points: g,
                    project: null
                };
            c.segments.push(k);
            c.boundingBox.expandByPoint(g.boundingBox.min);
            c.boundingBox.expandByPoint(g.boundingBox.max);
        }
        a = new THREE.Vector3();
        for (e = 0; e < c.segments.length; e++)
            (k = c.segments[e]),
                (d = k.start),
                (f = k.end),
                (b = (function(a, b, c, d) {
                    var e = new THREE.Vector3(1, 0, 0);
                    b = new THREE.Vector3().subVectors(b, a);
                    b.y = 0;
                    b.normalize();
                    var f = Math.acos(e.dot(b));
                    0 < b.z && (f = -f);
                    return function(b) {
                        var e = new THREE.Matrix4().makeTranslation(
                                -a.x,
                                -d.min.y,
                                -a.z
                            ),
                            g = new THREE.Matrix4().makeRotationY(-f),
                            h = new THREE.Matrix4().makeTranslation(c.x, 0, 0);
                        b = b.clone();
                        b.applyMatrix4(e);
                        b.applyMatrix4(g);
                        b.applyMatrix4(h);
                        return b;
                    };
                })(d, f, a.clone(), c.boundingBox.clone())),
                (k.project = b),
                (a.x += new THREE.Vector3(d.x, 0, d.z).distanceTo(
                    new THREE.Vector3(f.x, 0, f.z)
                )),
                (a.y += f.y - d.y);
        c.projectedBoundingBox.min.x = 0;
        c.projectedBoundingBox.min.y = c.boundingBox.min.y;
        c.projectedBoundingBox.max.x = a.x;
        c.projectedBoundingBox.max.y = c.boundingBox.max.y;
        return c;
    }
    getProfile(a, b, c, e, d) {
        a = new Potree.ProfileRequest(a, b, c, e, d);
        this.profileRequests.push(a);
    }
    getVisibleExtent() {
        return this.visibleBounds.applyMatrix4(this.matrixWorld);
    }
    pick(a, b, c, e = {}) {
        var d = a.renderer,
            f = a.pRenderer;
        performance.mark("pick-start");
        var g = (a, b) => (void 0 !== a ? a : b);
        a = g(e.pickWindowSize, 17);
        g(e.pickOutsideClipRegion, !1);
        var k = d.getSize(new THREE.Vector3()),
            h = Math.ceil(g(e.width, k.width));
        k = Math.ceil(g(e.height, k.height));
        var l = g(e.pointSizeType, this.material.pointSizeType);
        g = g(e.pointSize, this.material.size);
        c = this.nodesOnRay(this.visibleNodes, c);
        if (0 === c.length) return null;
        if (!this.pickState) {
            var m = new THREE.Scene(),
                p = new PointCloudMaterial();
            p.pointColorType = Potree.PointColorType.POINT_INDEX;
            this.pickState = {
                renderTarget: new THREE.WebGLRenderTarget(1, 1, {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat
                }),
                material: p,
                scene: m
            };
        }
        m = this.pickState;
        p = m.material;
        p.pointSizeType = l;
        p.shape = this.material.shape;
        p.size = g;
        p.uniforms.minSize.value = this.material.uniforms.minSize.value;
        p.uniforms.maxSize.value = this.material.uniforms.maxSize.value;
        p.classification = this.material.classification;
        e.pickClipped
            ? ((p.clipBoxes = this.material.clipBoxes),
              (p.clipTask =
                  this.material.clipTask === Potree.ClipTask.HIGHLIGHT
                      ? Potree.ClipTask.NONE
                      : this.material.clipTask))
            : (p.clipBoxes = []);
        this.updateMaterial(p, c, b, d);
        m.renderTarget.setSize(h, k);
        g = new THREE.Vector2(e.x, e.y);
        l = d.getContext();
        l.enable(l.SCISSOR_TEST);
        l.scissor(
            parseInt(g.x - (a - 1) / 2),
            parseInt(g.y - (a - 1) / 2),
            parseInt(a),
            parseInt(a)
        );
        d.state.buffers.depth.setTest(p.depthTest);
        d.state.buffers.depth.setMask(p.depthWrite);
        d.state.setBlending(THREE.NoBlending);
        d.setRenderTarget(m.renderTarget);
        l.clearColor(0, 0, 0, 0);
        d.clearTarget(m.renderTarget, !0, !0, !0);
        var n = this.material;
        this.material = p;
        f.renderOctree(this, c, b, m.renderTarget);
        this.material = n;
        b = parseInt(Math.min(Math.max(0, g.x - (a - 1) / 2), h));
        f = parseInt(Math.min(Math.max(0, g.y - (a - 1) / 2), k));
        h = parseInt(Math.min(b + a, h) - b);
        k = parseInt(Math.min(f + a, k) - f);
        h = new Uint8Array(4 * h * k);
        l.readPixels(b, f, a, a, l.RGBA, l.UNSIGNED_BYTE, h);
        d.setRenderTarget(null);
        d.resetGLState();
        d.setScissorTest(!1);
        l.disable(l.SCISSOR_TEST);
        k = new Uint32Array(h.buffer);
        d = [];
        for (b = 0; b < a; b++)
            for (f = 0; f < a; f++)
                if (
                    ((m = b + f * a),
                    (l =
                        Math.pow(b - (a - 1) / 2, 2) +
                        Math.pow(f - (a - 1) / 2, 2)),
                    (g = h[4 * m + 3]),
                    (h[4 * m + 3] = 0),
                    (m = k[m]),
                    (0 !== g || 0 !== m) && void 0 !== g && void 0 !== m)
                ) {
                    var q = {
                        pIndex: m,
                        pcIndex: g,
                        distanceToCenter: l
                    };
                    e.all
                        ? d.push(q)
                        : 0 < d.length
                        ? l < d[0].distanceToCenter && (d[0] = q)
                        : d.push(q);
                }
        for (q of d) {
            a = {};
            if (!c[q.pcIndex]) return null;
            k = c[q.pcIndex];
            h = k.sceneNode;
            k = k.geometryNode.geometry;
            for (var r in k.attributes)
                (l = k.attributes[r]),
                    "position" === r &&
                        ((b = l.array[3 * q.pIndex]),
                        (f = l.array[3 * q.pIndex + 1]),
                        (b = new THREE.Vector3(
                            b,
                            f,
                            l.array[3 * q.pIndex + 2]
                        )),
                        b.applyMatrix4(h.matrixWorld),
                        (a[r] = b));
            q.point = a;
        }
        performance.mark("pick-end");
        performance.measure("pick", "pick-start", "pick-end");
        return e.all ? d.map(a => a.point) : 0 === d.length ? null : d[0].point;
    }
    *getFittedBoxGen(a) {
        var b = new THREE.Box3(),
            c = new THREE.Matrix4().getInverse(a.matrixWorld);
        for (q of this.visibleNodes)
            if (q.sceneNode) {
                for (
                    var e = q.geometryNode.buffer,
                        d = e.offset("position"),
                        f = e.stride,
                        g = new DataView(e.data),
                        k = new THREE.Matrix4().multiplyMatrices(
                            c,
                            q.sceneNode.matrixWorld
                        ),
                        h = new THREE.Vector4(),
                        l = 0;
                    l < e.numElements;
                    l++
                ) {
                    var m = g.getFloat32(l * f + d + 0, !0),
                        p = g.getFloat32(l * f + d + 4, !0),
                        n = g.getFloat32(l * f + d + 8, !0);
                    h.set(m, p, n, 1);
                    h.applyMatrix4(k);
                    -0.5 < h.x &&
                        0.5 > h.x &&
                        -0.5 < h.y &&
                        0.5 > h.y &&
                        -0.5 < h.z &&
                        0.5 > h.z &&
                        b.expandByPoint(h);
                }
                yield;
            }
        var q = b.getCenter().applyMatrix4(a.matrixWorld);
        c = new THREE.Object3D();
        c.position.copy(q);
        c.scale.copy(a.scale);
        c.rotation.copy(a.rotation);
        a = new THREE.Vector3().subVectors(b.max, b.min);
        c.scale.multiply(a);
        yield c;
    }
    getFittedBox(a, b = Infinity) {
        var c = new THREE.Box3(),
            e = new THREE.Matrix4().getInverse(a.matrixWorld),
            d;
        for (d of this.visibleNodes)
            if (d.sceneNode && !(d.getLevel() > b))
                for (
                    var f = d.geometryNode.buffer,
                        g = f.offset("position"),
                        k = f.stride,
                        h = new DataView(f.data),
                        l = new THREE.Matrix4().multiplyMatrices(
                            e,
                            d.sceneNode.matrixWorld
                        ),
                        m = new THREE.Vector4(),
                        p = 0;
                    p < f.numElements;
                    p++
                ) {
                    var n = h.getFloat32(p * k + g + 0, !0),
                        q = h.getFloat32(p * k + g + 4, !0),
                        r = h.getFloat32(p * k + g + 8, !0);
                    m.set(n, q, r, 1);
                    m.applyMatrix4(l);
                    -0.5 < m.x &&
                        0.5 > m.x &&
                        -0.5 < m.y &&
                        0.5 > m.y &&
                        -0.5 < m.z &&
                        0.5 > m.z &&
                        c.expandByPoint(m);
                }
        e = c.getCenter().applyMatrix4(a.matrixWorld);
        b = new THREE.Object3D();
        b.position.copy(e);
        b.scale.copy(a.scale);
        b.rotation.copy(a.rotation);
        a = new THREE.Vector3().subVectors(c.max, c.min);
        b.scale.multiply(a);
        return b;
    }
    get progress() {
        return this.visibleNodes.length / this.visibleGeometry.length;
    }
    find(a) {
        var b = null,
            c;
        for (c of a) b = "r" === c ? this.root : b.children[c];
        return b;
    }
}
class PointCloudOctreeGeometry {
    constructor() {
        this.octreeDir = this.url = null;
        this.spacing = 0;
        this.pointAttributes = this.nodes = this.root = this.boundingBox = null;
        this.hierarchyStepSize = -1;
        this.loader = null;
    }
}
class PointCloudOctreeGeometryNode extends PointCloudTreeNode {
    constructor(a, b, c) {
        super();
        this.id = PointCloudOctreeGeometryNode.IDCount++;
        this.name = a;
        this.index = parseInt(a.charAt(a.length - 1));
        this.pcoGeometry = b;
        this.geometry = null;
        this.boundingBox = c;
        this.boundingSphere = c.getBoundingSphere(new THREE.Sphere());
        this.children = {};
        this.numPoints = 0;
        this.level = null;
        this.loaded = !1;
        this.oneTimeDisposeHandlers = [];
    }
    isGeometryNode() {
        return !0;
    }
    getLevel() {
        return this.level;
    }
    isTreeNode() {
        return !1;
    }
    isLoaded() {
        return this.loaded;
    }
    getBoundingSphere() {
        return this.boundingSphere;
    }
    getBoundingBox() {
        return this.boundingBox;
    }
    getChildren() {
        for (var a = [], b = 0; 8 > b; b++)
            this.children[b] && a.push(this.children[b]);
        return a;
    }
    getURL() {
        var a = "",
            b = this.pcoGeometry.loader.version;
        b.equalOrHigher("1.5")
            ? (a =
                  this.pcoGeometry.octreeDir +
                  "/" +
                  this.getHierarchyPath() +
                  "/" +
                  this.name)
            : b.equalOrHigher("1.4")
            ? (a = this.pcoGeometry.octreeDir + "/" + this.name)
            : b.upTo("1.3") &&
              (a = this.pcoGeometry.octreeDir + "/" + this.name);
        return a;
    }
    getHierarchyPath() {
        for (
            var a = "r/",
                b = this.pcoGeometry.hierarchyStepSize,
                c = this.name.substr(1),
                e = Math.floor(c.length / b),
                d = 0;
            d < e;
            d++
        )
            a += c.substr(d * b, b) + "/";
        return (a = a.slice(0, -1));
    }
    addChild(a) {
        this.children[a.index] = a;
        a.parent = this;
    }
    load() {
        !0 === this.loading ||
            !0 === this.loaded ||
            Potree.numNodesLoading >= Potree.maxNodesLoading ||
            ((this.loading = !0),
            Potree.numNodesLoading++,
            this.pcoGeometry.loader.version.equalOrHigher("1.5")
                ? 0 === this.level % this.pcoGeometry.hierarchyStepSize &&
                  this.hasChildren
                    ? this.loadHierachyThenPoints()
                    : this.loadPoints()
                : this.loadPoints());
    }
    loadPoints() {
        this.pcoGeometry.loader.load(this);
    }
    loadHierachyThenPoints() {
        var a = this;
        if (0 === a.level % a.pcoGeometry.hierarchyStepSize) {
            var b =
                    a.pcoGeometry.octreeDir +
                    "/" +
                    a.getHierarchyPath() +
                    "/" +
                    a.name +
                    ".hrc",
                c = new XMLHttpRequest();
            c.open("GET", b, !0);
            c.responseType = "arraybuffer";
            c.overrideMimeType("text/plain; charset=x-user-defined");
            c.onreadystatechange = function(e) {
                if (4 === c.readyState)
                    if (200 === c.status || 0 === c.status) {
                        var d = c.response,
                            f = new DataView(d),
                            g = [];
                        e = f.getUint8(0);
                        var k = f.getUint32(1, !0);
                        a.numPoints = k;
                        g.push({
                            children: e,
                            numPoints: k,
                            name: a.name
                        });
                        e = [];
                        for (var h = 5; 0 < g.length; ) {
                            var l = g.shift(),
                                m = 1;
                            for (k = 0; 8 > k; k++) {
                                if (0 !== (l.children & m)) {
                                    var p = l.name + k,
                                        n = f.getUint8(h),
                                        q = f.getUint32(h + 1, !0);
                                    g.push({
                                        children: n,
                                        numPoints: q,
                                        name: p
                                    });
                                    e.push({
                                        children: n,
                                        numPoints: q,
                                        name: p
                                    });
                                    h += 5;
                                }
                                m *= 2;
                            }
                            if (h === d.byteLength) break;
                        }
                        d = {};
                        d[a.name] = a;
                        f = a.pcoGeometry;
                        for (k = 0; k < e.length; k++)
                            (g = e[k].name),
                                (h = e[k].numPoints),
                                (p = parseInt(g.charAt(g.length - 1))),
                                (l = g.substring(0, g.length - 1)),
                                (l = d[l]),
                                (m = g.length - 1),
                                (p = Potree.POCLoader.createChildAABB(
                                    l.boundingBox,
                                    p
                                )),
                                (p = new PointCloudOctreeGeometryNode(g, f, p)),
                                (p.level = m),
                                (p.numPoints = h),
                                (p.hasChildren = 0 < e[k].children),
                                (p.spacing = f.spacing / Math.pow(2, m)),
                                l.addChild(p),
                                (d[g] = p);
                        a.loadPoints();
                    } else
                        console.log(
                            "Failed to load file! HTTP status: " +
                                c.status +
                                ", file: " +
                                b
                        ),
                            Potree.numNodesLoading--;
            };
            c.send(null);
        }
    }
    getNumPoints() {
        return this.numPoints;
    }
    dispose() {
        if (this.geometry && null != this.parent) {
            this.geometry.dispose();
            this.geometry = null;
            this.loaded = !1;
            for (var a = 0; a < this.oneTimeDisposeHandlers.length; a++)
                (0, this.oneTimeDisposeHandlers[a])();
            this.oneTimeDisposeHandlers = [];
        }
    }
}
PointCloudOctreeGeometryNode.IDCount = 0;
Object.assign(
    PointCloudOctreeGeometryNode.prototype,
    THREE.EventDispatcher.prototype
);
class PointCloudArena4DGeometryNode {
    constructor() {
        this.pcoGeometry = this.number = this.boundingBox = this.right = this.left = null;
        this.loaded = !1;
        this.level = this.numPoints = 0;
        this.children = [];
        this.oneTimeDisposeHandlers = [];
    }
    isGeometryNode() {
        return !0;
    }
    isTreeNode() {
        return !1;
    }
    isLoaded() {
        return this.loaded;
    }
    getBoundingSphere() {
        return this.boundingSphere;
    }
    getBoundingBox() {
        return this.boundingBox;
    }
    getChildren() {
        var a = [];
        this.left && a.push(this.left);
        this.right && a.push(this.right);
        return a;
    }
    getLevel() {
        return this.level;
    }
    load() {
        if (
            !(
                this.loaded ||
                this.loading ||
                Potree.numNodesLoading >= Potree.maxNodesLoading
            )
        ) {
            this.loading = !0;
            Potree.numNodesLoading++;
            var a = this,
                b = this.pcoGeometry.url + "?node=" + this.number,
                c = new XMLHttpRequest();
            c.overrideMimeType("text/plain");
            c.open("GET", b, !0);
            c.responseType = "arraybuffer";
            c.onreadystatechange = function() {
                if (4 === c.readyState && 200 === c.status) {
                    var b = c.response,
                        d = new DataView(b);
                    b = b.byteLength / 17;
                    var f = new ArrayBuffer(28 * b);
                    new DataView(f);
                    f = new Float32Array(3 * b);
                    for (
                        var g = new Uint8Array(4 * b),
                            k = new Float32Array(b),
                            h = new Uint8Array(b),
                            l = new ArrayBuffer(4 * b),
                            m = new Uint32Array(l),
                            p = new THREE.Box3(),
                            n = 0;
                        n < b;
                        n++
                    ) {
                        var q = d.getFloat32(17 * n, !0) + a.boundingBox.min.x,
                            r =
                                d.getFloat32(17 * n + 4, !0) +
                                a.boundingBox.min.y,
                            t =
                                d.getFloat32(17 * n + 8, !0) +
                                a.boundingBox.min.z,
                            u = d.getUint8(17 * n + 12, !0),
                            w = d.getUint8(17 * n + 13, !0),
                            v = d.getUint8(17 * n + 14, !0),
                            x = d.getUint8(17 * n + 15, !0),
                            C = d.getUint8(17 * n + 16, !0);
                        p.expandByPoint(new THREE.Vector3(q, r, t));
                        f[3 * n] = q;
                        f[3 * n + 1] = r;
                        f[3 * n + 2] = t;
                        g[4 * n] = u;
                        g[4 * n + 1] = w;
                        g[4 * n + 2] = v;
                        g[4 * n + 3] = 255;
                        k[n] = x;
                        h[n] = C;
                        m[n] = n;
                    }
                    d = new THREE.BufferGeometry();
                    d.addAttribute("position", new THREE.BufferAttribute(f, 3));
                    d.addAttribute(
                        "color",
                        new THREE.BufferAttribute(g, 4, !0)
                    );
                    d.addAttribute(
                        "intensity",
                        new THREE.BufferAttribute(k, 1)
                    );
                    d.addAttribute(
                        "classification",
                        new THREE.BufferAttribute(h, 1)
                    );
                    f = new THREE.BufferAttribute(new Uint8Array(l), 4, !0);
                    d.addAttribute("indices", f);
                    a.geometry = d;
                    a.numPoints = b;
                    a.loaded = !0;
                    a.loading = !1;
                    Potree.numNodesLoading--;
                }
            };
            c.send(null);
        }
    }
    dispose() {
        if (this.geometry && null != this.parent) {
            this.geometry.dispose();
            this.geometry = null;
            this.loaded = !1;
            for (var a = 0; a < this.oneTimeDisposeHandlers.length; a++)
                (0, this.oneTimeDisposeHandlers[a])();
            this.oneTimeDisposeHandlers = [];
        }
    }
    getNumPoints() {
        return this.numPoints;
    }
}
class PointCloudArena4DGeometry extends THREE.EventDispatcher {
    constructor() {
        super();
        this.version = this.numPoints = 0;
        this.boundingBox = null;
        this.numNodes = 0;
        this.root = this.url = this.provider = this.name = null;
        this.levels = 0;
        this._spacing = null;
        this.pointAttributes = new Potree.PointAttributes([
            "POSITION_CARTESIAN",
            "COLOR_PACKED"
        ]);
    }
    static load(a, b) {
        var c = new XMLHttpRequest();
        c.overrideMimeType("text/plain");
        c.open("GET", a + "?info", !0);
        c.onreadystatechange = function() {
            try {
                if (4 === c.readyState && 200 === c.status) {
                    var e = JSON.parse(c.responseText),
                        d = new PointCloudArena4DGeometry();
                    d.url = a;
                    d.name = e.Name;
                    d.provider = e.Provider;
                    d.numNodes = e.Nodes;
                    d.numPoints = e.Points;
                    d.version = e.Version;
                    d.boundingBox = new THREE.Box3(
                        new THREE.Vector3().fromArray(
                            e.BoundingBox.slice(0, 3)
                        ),
                        new THREE.Vector3().fromArray(e.BoundingBox.slice(3, 6))
                    );
                    e.Spacing && (d.spacing = e.Spacing);
                    var f = d.boundingBox.min.clone().multiplyScalar(-1);
                    d.boundingBox.min.add(f);
                    d.boundingBox.max.add(f);
                    d.offset = f;
                    var g = d.boundingBox.getCenter(),
                        k =
                            d.boundingBox
                                .getSize(new THREE.Vector3())
                                .length() / 2;
                    d.boundingSphere = new THREE.Sphere(g, k);
                    d.loadHierarchy();
                    b(d);
                } else 4 === c.readyState && b(null);
            } catch (h) {
                console.error(h.message), b(null);
            }
        };
        c.send(null);
    }
    loadHierarchy() {
        var a = this.url + "?tree",
            b = new XMLHttpRequest();
        b.overrideMimeType("text/plain");
        b.open("GET", a, !0);
        b.responseType = "arraybuffer";
        b.onreadystatechange = () => {
            if (4 === b.readyState && 200 === b.status) {
                var a = b.response,
                    e = a.byteLength / 3;
                a = new DataView(a);
                for (var d = [], f = null, g = 0, k = 0; k < e; k++) {
                    var h = a.getUint8(3 * k, !0),
                        l = 0 < (h & 1),
                        m = 0 < (h & 2),
                        p = 0 < (h & 8),
                        n = 0 < (h & 16),
                        q = null;
                    0 < (h & 4) ? (q = "X") : p && (q = "Y");
                    n && (q = "Z");
                    h = new PointCloudArena4DGeometryNode();
                    h.hasLeft = l;
                    h.hasRight = m;
                    h.split = q;
                    h.isLeaf = !l && !m;
                    h.number = k;
                    h.left = null;
                    h.right = null;
                    h.pcoGeometry = this;
                    h.level = d.length;
                    g = Math.max(g, h.level);
                    0 < d.length
                        ? ((l = d[d.length - 1]),
                          (h.boundingBox = l.boundingBox.clone()),
                          (m = l.boundingBox.getSize(new THREE.Vector3())),
                          l.hasLeft && !l.left
                              ? ((l.left = h),
                                l.children.push(h),
                                "X" === l.split
                                    ? (h.boundingBox.max.x =
                                          h.boundingBox.min.x + m.x / 2)
                                    : "Y" === l.split
                                    ? (h.boundingBox.max.y =
                                          h.boundingBox.min.y + m.y / 2)
                                    : "Z" === l.split &&
                                      (h.boundingBox.max.z =
                                          h.boundingBox.min.z + m.z / 2),
                                (l = h.boundingBox.getCenter()),
                                (m =
                                    h.boundingBox
                                        .getSize(new THREE.Vector3())
                                        .length() / 2))
                              : ((l.right = h),
                                l.children.push(h),
                                "X" === l.split
                                    ? (h.boundingBox.min.x += m.x / 2)
                                    : "Y" === l.split
                                    ? (h.boundingBox.min.y += m.y / 2)
                                    : "Z" === l.split &&
                                      (h.boundingBox.min.z += m.z / 2),
                                (l = h.boundingBox.getCenter()),
                                (m =
                                    h.boundingBox
                                        .getSize(new THREE.Vector3())
                                        .length() / 2)),
                          (h.boundingSphere = new THREE.Sphere(l, m)))
                        : ((f = h),
                          (f.boundingBox = this.boundingBox.clone()),
                          (l = f.boundingBox.getCenter()),
                          (m =
                              f.boundingBox
                                  .getSize(new THREE.Vector3())
                                  .length() / 2),
                          (f.boundingSphere = new THREE.Sphere(l, m)));
                    l = h.boundingBox.getSize(new THREE.Vector3());
                    h.spacing = (l.x + l.y + l.z) / 3 / 75;
                    h.estimatedSpacing = h.spacing;
                    d.push(h);
                    if (h.isLeaf)
                        for (h = !1; !h && 0 < d.length; )
                            d.pop(),
                                (h = d[d.length - 1]),
                                (h =
                                    0 < d.length &&
                                    h.hasRight &&
                                    null == h.right);
                }
                this.root = f;
                this.levels = g;
                this.dispatchEvent({
                    type: "hierarchy_loaded"
                });
            }
        };
        b.send(null);
    }
    get spacing() {
        if (this._spacing) return this._spacing;
        if (this.root) return this.root.spacing;
    }
    set spacing(a) {
        this._spacing = a;
    }
}

function PointCloudGreyhoundGeometry() {
    this.spacing = 0;
    this.nodes = this.root = this.boundingBox = null;
    this.pointAttributes = {};
    this.hierarchyStepSize = -1;
    this.serverURL = this.boundingSphere = this.projection = this.offset = this.baseDepth = this.schema = this.loader = null;
    this.normalize = {
        color: !1,
        intensity: !1
    };
}

function PointCloudGreyhoundGeometryNode(a, b, c, e, d) {
    this.id = PointCloudGreyhoundGeometryNode.IDCount++;
    this.name = a;
    this.index = parseInt(a.charAt(a.length - 1));
    this.pcoGeometry = b;
    this.geometry = null;
    this.boundingBox = c;
    this.boundingSphere = c.getBoundingSphere(new THREE.Sphere());
    this.scale = e;
    this.offset = d;
    this.children = {};
    this.numPoints = 0;
    this.level = null;
    this.loaded = !1;
    this.oneTimeDisposeHandlers = [];
    this.baseLoaded = !1;
    a = this.boundingBox.clone();
    a.min.sub(this.pcoGeometry.boundingBox.getCenter());
    a.max.sub(this.pcoGeometry.boundingBox.getCenter());
    this.scale &&
        (a.min.multiplyScalar(1 / this.scale),
        a.max.multiplyScalar(1 / this.scale));
    this.greyhoundBounds = a;
    this.greyhoundOffset = this.pcoGeometry.offset
        .clone()
        .add(
            this.pcoGeometry.boundingBox
                .getSize(new THREE.Vector3())
                .multiplyScalar(0.5)
        );
}
PointCloudGreyhoundGeometryNode.IDCount = 0;
PointCloudGreyhoundGeometryNode.prototype = Object.create(
    PointCloudTreeNode.prototype
);
PointCloudGreyhoundGeometryNode.prototype.isGeometryNode = function() {
    return !0;
};
PointCloudGreyhoundGeometryNode.prototype.isTreeNode = function() {
    return !1;
};
PointCloudGreyhoundGeometryNode.prototype.isLoaded = function() {
    return this.loaded;
};
PointCloudGreyhoundGeometryNode.prototype.getBoundingSphere = function() {
    return this.boundingSphere;
};
PointCloudGreyhoundGeometryNode.prototype.getBoundingBox = function() {
    return this.boundingBox;
};
PointCloudGreyhoundGeometryNode.prototype.getLevel = function() {
    return this.level;
};
PointCloudGreyhoundGeometryNode.prototype.getChildren = function() {
    for (var a = [], b = 0; 8 > b; ++b)
        this.children[b] && a.push(this.children[b]);
    return a;
};
PointCloudGreyhoundGeometryNode.prototype.getURL = function() {
    var a = this.greyhoundBounds;
    a =
        "" +
        this.pcoGeometry.serverURL +
        "read?depthBegin=" +
        (this.baseLoaded ? this.level + this.pcoGeometry.baseDepth : 0) +
        "&depthEnd=" +
        (this.level + this.pcoGeometry.baseDepth + 1) +
        "&bounds=[" +
        (a.min.x +
            "," +
            a.min.y +
            "," +
            a.min.z +
            "," +
            a.max.x +
            "," +
            a.max.y +
            "," +
            a.max.z) +
        "]&schema=" +
        JSON.stringify(this.pcoGeometry.schema) +
        "&compress=true";
    this.scale && (a += "&scale=" + this.scale);
    if (this.greyhoundOffset) {
        var b = this.greyhoundOffset;
        a += "&offset=[" + b.x + "," + b.y + "," + b.z + "]";
    }
    this.baseLoaded || (this.baseLoaded = !0);
    return a;
};
PointCloudGreyhoundGeometryNode.prototype.addChild = function(a) {
    this.children[a.index] = a;
    a.parent = this;
};
PointCloudGreyhoundGeometryNode.prototype.load = function() {
    !0 === this.loading ||
        !0 === this.loaded ||
        Potree.numNodesLoading >= Potree.maxNodesLoading ||
        ((this.loading = !0),
        Potree.numNodesLoading++,
        0 === this.level % this.pcoGeometry.hierarchyStepSize &&
        this.hasChildren
            ? this.loadHierarchyThenPoints()
            : this.loadPoints());
};
PointCloudGreyhoundGeometryNode.prototype.loadPoints = function() {
    this.pcoGeometry.loader.load(this);
};
PointCloudGreyhoundGeometryNode.prototype.loadHierarchyThenPoints = function() {
    var a = [0, 2, 1, 3, 4, 6, 5, 7],
        b = function(b) {
            var c = 0;
            Object.keys(b).forEach(function(b) {
                "swd" === b
                    ? (c += 1 << a[0])
                    : "nwd" === b
                    ? (c += 1 << a[1])
                    : "swu" === b
                    ? (c += 1 << a[2])
                    : "nwu" === b
                    ? (c += 1 << a[3])
                    : "sed" === b
                    ? (c += 1 << a[4])
                    : "ned" === b
                    ? (c += 1 << a[5])
                    : "seu" === b
                    ? (c += 1 << a[6])
                    : "neu" === b && (c += 1 << a[7]);
            });
            return c;
        },
        c = function(d, e, f) {
            var g, h;
            Object.keys(d).forEach(function(k) {
                if ("n" !== k) {
                    switch (k) {
                        case "swd":
                            g = d.swd;
                            h = e + a[0];
                            break;
                        case "nwd":
                            g = d.nwd;
                            h = e + a[1];
                            break;
                        case "swu":
                            g = d.swu;
                            h = e + a[2];
                            break;
                        case "nwu":
                            g = d.nwu;
                            h = e + a[3];
                            break;
                        case "sed":
                            g = d.sed;
                            h = e + a[4];
                            break;
                        case "ned":
                            g = d.ned;
                            h = e + a[5];
                            break;
                        case "seu":
                            g = d.seu;
                            h = e + a[6];
                            break;
                        case "neu":
                            (g = d.neu), (h = e + a[7]);
                    }
                    f.push({
                        children: b(g),
                        numPoints: g.n,
                        name: h
                    });
                    c(g, h, f);
                }
            });
        };
    if (0 === this.level % this.pcoGeometry.hierarchyStepSize) {
        var e = this.level + this.pcoGeometry.baseDepth,
            d = this.greyhoundBounds,
            f =
                "" +
                this.pcoGeometry.serverURL +
                "hierarchy?bounds=[" +
                (d.min.x +
                    "," +
                    d.min.y +
                    "," +
                    d.min.z +
                    "," +
                    d.max.x +
                    "," +
                    d.max.y +
                    "," +
                    d.max.z) +
                "]&depthBegin=" +
                e +
                "&depthEnd=" +
                (e + this.pcoGeometry.hierarchyStepSize + 2);
        this.scale && (f += "&scale=" + this.scale);
        this.greyhoundOffset &&
            ((e = this.greyhoundOffset),
            (f += "&offset=[" + e.x + "," + e.y + "," + e.z + "]"));
        var g = new XMLHttpRequest();
        g.overrideMimeType("text/plain");
        g.open("GET", f, !0);
        var k = this;
        g.onreadystatechange = function() {
            if (4 === g.readyState)
                if (200 === g.status || 0 === g.status) {
                    var a = JSON.parse(g.responseText) || {},
                        b = [];
                    k.numPoints = a.n;
                    c(a, k.name, b);
                    a = {};
                    a[k.name] = k;
                    for (var d = k.pcoGeometry, e = 0; e < b.length; e++) {
                        var n = b[e].name,
                            q = b[e].numPoints,
                            r = parseInt(n.charAt(n.length - 1)),
                            t = n.substring(0, n.length - 1);
                        t = a[t];
                        var u = n.length - 1;
                        r = Potree.GreyhoundLoader.createChildAABB(
                            t.boundingBox,
                            r
                        );
                        r = new PointCloudGreyhoundGeometryNode(
                            n,
                            d,
                            r,
                            k.scale,
                            k.offset
                        );
                        r.level = u;
                        r.numPoints = q;
                        r.hasChildren = 0 < b[e].children;
                        r.spacing = d.spacing / Math.pow(2, u);
                        t.addChild(r);
                        a[n] = r;
                    }
                    k.loadPoints();
                } else
                    console.log(
                        "Failed to load file! HTTP status:",
                        g.status,
                        "file:",
                        f
                    );
        };
        g.send(null);
    }
};
PointCloudGreyhoundGeometryNode.prototype.getNumPoints = function() {
    return this.numPoints;
};
PointCloudGreyhoundGeometryNode.prototype.dispose = function() {
    if (this.geometry && null != this.parent) {
        this.geometry.dispose();
        this.geometry = null;
        this.loaded = !1;
        for (var a = 0; a < this.oneTimeDisposeHandlers.length; a++)
            (0, this.oneTimeDisposeHandlers[a])();
        this.oneTimeDisposeHandlers = [];
    }
};
Object.assign(
    PointCloudGreyhoundGeometryNode.prototype,
    THREE.EventDispatcher.prototype
);
class PointCloudMaterial extends THREE.RawShaderMaterial {
    constructor(a = {}) {
        super();
        this.visibleNodesTexture = HelperUtils.generateDataTexture(
            2048,
            1,
            new THREE.Color(16777215)
        );
        this.visibleNodesTexture.minFilter = THREE.NearestFilter;
        this.visibleNodesTexture.magFilter = THREE.NearestFilter;
        var b = function(a, b) {
                return void 0 !== a ? a : b;
            },
            c = b(a.size, 1),
            e = b(a.minSize, 2),
            d = b(a.maxSize, 50);
        a = b(a.treeType, Potree.TreeType.OCTREE);
        this._pointSizeType = Potree.PointSizeType.FIXED;
        this._shape = Potree.PointShape.SQUARE;
        this._pointColorType = Potree.PointColorType.RGB;
        this._weighted = this._useClipBox = !1;
        this._gradient = PotreeGradients.SPECTRAL;
        this._treeType = a;
        this._snapEnabled = this._useEDL = !1;
        this._numSnapshots = 0;
        this._defaultElevationRangeChanged = this._defaultIntensityRangeChanged = !1;
        this.clipBoxes = [];
        this.clipPolygons = [];
        this.gradientTexture = PointCloudMaterial.generateGradientTexture(
            this._gradient
        );
        this.fog = this.lights = !1;
        this.defines = new Map();
        this.attributes = {
            position: {
                type: "fv",
                value: []
            },
            color: {
                type: "fv",
                value: []
            },
            normal: {
                type: "fv",
                value: []
            },
            intensity: {
                type: "f",
                value: []
            },
            classification: {
                type: "f",
                value: []
            },
            returnNumber: {
                type: "f",
                value: []
            },
            numberOfReturns: {
                type: "f",
                value: []
            },
            pointSourceID: {
                type: "f",
                value: []
            },
            indices: {
                type: "fv",
                value: []
            }
        };
        this.uniforms = {
            level: {
                type: "f",
                value: 0
            },
            vnStart: {
                type: "f",
                value: 0
            },
            spacing: {
                type: "f",
                value: 1
            },
            blendHardness: {
                type: "f",
                value: 2
            },
            blendDepthSupplement: {
                type: "f",
                value: 0
            },
            fov: {
                type: "f",
                value: 1
            },
            screenWidth: {
                type: "f",
                value: 1
            },
            screenHeight: {
                type: "f",
                value: 1
            },
            near: {
                type: "f",
                value: 0.1
            },
            far: {
                type: "f",
                value: 1
            },
            uColor: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            uOpacity: {
                type: "f",
                value: 1
            },
            size: {
                type: "f",
                value: c
            },
            minSize: {
                type: "f",
                value: e
            },
            maxSize: {
                type: "f",
                value: d
            },
            octreeSize: {
                type: "f",
                value: 0
            },
            bbSize: {
                type: "fv",
                value: [0, 0, 0]
            },
            elevationRange: {
                type: "2fv",
                value: [0, 0]
            },
            clipBoxCount: {
                type: "f",
                value: 0
            },
            clipPolygonCount: {
                type: "i",
                value: 0
            },
            clipBoxes: {
                type: "Matrix4fv",
                value: []
            },
            clipPolygons: {
                type: "3fv",
                value: []
            },
            clipPolygonVCount: {
                type: "iv",
                value: []
            },
            clipPolygonVP: {
                type: "Matrix4fv",
                value: []
            },
            visibleNodes: {
                type: "t",
                value: this.visibleNodesTexture
            },
            pcIndex: {
                type: "f",
                value: 0
            },
            gradient: {
                type: "t",
                value: this.gradientTexture
            },
            classificationLUT: {
                type: "t",
                value: this.classificationTexture
            },
            uHQDepthMap: {
                type: "t",
                value: null
            },
            toModel: {
                type: "Matrix4f",
                value: []
            },
            diffuse: {
                type: "fv",
                value: [1, 1, 1]
            },
            transition: {
                type: "f",
                value: 0.5
            },
            intensityRange: {
                type: "fv",
                value: [0, 65e3]
            },
            intensityGamma: {
                type: "f",
                value: 1
            },
            intensityContrast: {
                type: "f",
                value: 0
            },
            intensityBrightness: {
                type: "f",
                value: 0
            },
            rgbGamma: {
                type: "f",
                value: 1
            },
            rgbContrast: {
                type: "f",
                value: 0
            },
            rgbBrightness: {
                type: "f",
                value: 0
            },
            wRGB: {
                type: "f",
                value: 1
            },
            wIntensity: {
                type: "f",
                value: 0
            },
            wElevation: {
                type: "f",
                value: 0
            },
            wClassification: {
                type: "f",
                value: 0
            },
            wReturnNumber: {
                type: "f",
                value: 0
            },
            wSourceID: {
                type: "f",
                value: 0
            },
            useOrthographicCamera: {
                type: "b",
                value: !1
            },
            clipTask: {
                type: "i",
                value: 1
            },
            clipMethod: {
                type: "i",
                value: 1
            },
            uSnapshot: {
                type: "tv",
                value: []
            },
            uSnapshotDepth: {
                type: "tv",
                value: []
            },
            uSnapView: {
                type: "Matrix4fv",
                value: []
            },
            uSnapProj: {
                type: "Matrix4fv",
                value: []
            },
            uSnapProjInv: {
                type: "Matrix4fv",
                value: []
            },
            uSnapViewInv: {
                type: "Matrix4fv",
                value: []
            },
            uShadowColor: {
                type: "3fv",
                value: [0, 0, 0]
            }
        };
        this.classification = Potree.Classification.DEFAULT;
        this.defaultAttributeValues.normal = [0, 0, 0];
        this.defaultAttributeValues.classification = [0, 0, 0];
        this.defaultAttributeValues.indices = [0, 0, 0, 0];
        this.vertexColors = THREE.VertexColors;
        c = this.getDefines();
        this.vertexShader = c + PotreeShaders["pointcloud.vs"];
        this.fragmentShader = c + PotreeShaders["pointcloud.fs"];
    }
    setDefine(a, b) {
        void 0 !== b && null !== b
            ? this.defines.get(a) !== b &&
              (this.defines.set(a, b), this.updateShaderSource())
            : this.removeDefine(a);
    }
    removeDefine(a) {
        this.defines.delete(a);
    }
    updateShaderSource() {
        var a = this.getDefines();
        this.vertexShader = a + PotreeShaders["pointcloud.vs"];
        this.fragmentShader = a + PotreeShaders["pointcloud.fs"];
        this.depthFunc = THREE.LessEqualDepth;
        this.needsUpdate = this.depthWrite = this.depthTest = !0;
    }
    onBeforeCompile(a, b) {
        b.capabilities.logarithmicDepthBuffer &&
            ((a.fragmentShader =
                "#define USE_LOGDEPTHBUF\n#define USE_LOGDEPTHBUF_EXT\n#define EPSILON 1e-6\n" +
                a.fragmentShader),
            (a.vertexShader =
                "#define USE_LOGDEPTHBUF\n#define USE_LOGDEPTHBUF_EXT\n#define EPSILON 1e-6\n" +
                a.vertexShader));
    }
    getDefines() {
        var a = [];
        this.pointSizeType === Potree.PointSizeType.FIXED
            ? a.push("#define fixed_point_size")
            : this.pointSizeType === Potree.PointSizeType.ATTENUATED
            ? a.push("#define attenuated_point_size")
            : this.pointSizeType === Potree.PointSizeType.ADAPTIVE &&
              a.push("#define adaptive_point_size");
        this.shape === Potree.PointShape.SQUARE
            ? a.push("#define square_point_shape")
            : this.shape === Potree.PointShape.CIRCLE
            ? a.push("#define circle_point_shape")
            : this.shape === Potree.PointShape.PARABOLOID &&
              a.push("#define paraboloid_point_shape");
        this._useEDL && a.push("#define use_edl");
        this._snapEnabled && a.push("#define snap_enabled");
        this._pointColorType === Potree.PointColorType.RGB
            ? a.push("#define color_type_rgb")
            : this._pointColorType === Potree.PointColorType.COLOR
            ? a.push("#define color_type_color")
            : this._pointColorType === Potree.PointColorType.DEPTH
            ? a.push("#define color_type_depth")
            : this._pointColorType === Potree.PointColorType.HEIGHT
            ? a.push("#define color_type_height")
            : this._pointColorType === Potree.PointColorType.INTENSITY
            ? a.push("#define color_type_intensity")
            : this._pointColorType === Potree.PointColorType.INTENSITY_GRADIENT
            ? a.push("#define color_type_intensity_gradient")
            : this._pointColorType === Potree.PointColorType.LOD
            ? a.push("#define color_type_lod")
            : this._pointColorType === Potree.PointColorType.POINT_INDEX
            ? a.push("#define color_type_point_index")
            : this._pointColorType === Potree.PointColorType.CLASSIFICATION
            ? a.push("#define color_type_classification")
            : this._pointColorType === Potree.PointColorType.RETURN_NUMBER
            ? a.push("#define color_type_return_number")
            : this._pointColorType === Potree.PointColorType.SOURCE
            ? a.push("#define color_type_source")
            : this._pointColorType === Potree.PointColorType.NORMAL
            ? a.push("#define color_type_normal")
            : this._pointColorType === Potree.PointColorType.PHONG
            ? a.push("#define color_type_phong")
            : this._pointColorType === Potree.PointColorType.RGB_HEIGHT
            ? a.push("#define color_type_rgb_height")
            : this._pointColorType === Potree.PointColorType.COMPOSITE &&
              a.push("#define color_type_composite");
        this._treeType === Potree.TreeType.OCTREE
            ? a.push("#define tree_type_octree")
            : this._treeType === Potree.TreeType.KDTREE &&
              a.push("#define tree_type_kdtree");
        this.weighted && a.push("#define weighted_splats");
        var b;
        for ([, b] of this.defines) a.push(b);
        return a.join("\n");
    }
    setClipBoxes(a) {
        if (a) {
            var b =
                this.clipBoxes.length !== a.length &&
                (0 === a.length || 0 === this.clipBoxes.length);
            this.uniforms.clipBoxCount.value = this.clipBoxes.length;
            this.clipBoxes = a;
            b && this.updateShaderSource();
            this.uniforms.clipBoxes.value = new Float32Array(
                16 * this.clipBoxes.length
            );
            for (b = 0; b < this.clipBoxes.length; b++)
                this.uniforms.clipBoxes.value.set(
                    a[b].inverse.elements,
                    16 * b
                );
            for (b = 0; b < this.uniforms.clipBoxes.value.length; b++)
                Number.isNaN(this.uniforms.clipBoxes.value[b]) &&
                    (this.uniforms.clipBoxes.value[b] = Infinity);
        }
    }
    setClipPolygons(a, b) {
        a &&
            ((this.clipPolygons = a),
            this.clipPolygons.length !== a.length && this.updateShaderSource());
    }
    get gradient() {
        return this._gradient;
    }
    set gradient(a) {
        this._gradient !== a &&
            ((this._gradient = a),
            (this.gradientTexture = PointCloudMaterial.generateGradientTexture(
                this._gradient
            )),
            (this.uniforms.gradient.value = this.gradientTexture));
    }
    get useOrthographicCamera() {
        return this.uniforms.useOrthographicCamera.value;
    }
    set useOrthographicCamera(a) {
        this.uniforms.useOrthographicCamera.value !== a &&
            (this.uniforms.useOrthographicCamera.value = a);
    }
    get classification() {
        return this._classification;
    }
    set classification(a) {
        var b = {},
            c;
        for (c of Object.keys(a)) b[c] = a[c].clone();
        if (void 0 === this._classification) a = !1;
        else {
            a =
                Object.keys(b).length ===
                Object.keys(this._classification).length;
            for (c of Object.keys(b))
                a =
                    (a = a && void 0 !== this._classification[c]) &&
                    b[c].equals(this._classification[c]);
        }
        a || ((this._classification = b), this.recomputeClassification());
    }
    recomputeClassification() {
        this.classificationTexture = PointCloudMaterial.generateClassificationTexture(
            this._classification
        );
        this.uniforms.classificationLUT.value = this.classificationTexture;
        this.dispatchEvent({
            type: "material_property_changed",
            target: this
        });
    }
    get numSnapshots() {
        return this._numSnapshots;
    }
    set numSnapshots(a) {
        this._numSnapshots = a;
    }
    get snapEnabled() {
        return this._snapEnabled;
    }
    set snapEnabled(a) {
        this._snapEnabled !== a &&
            ((this._snapEnabled = a), this.updateShaderSource());
    }
    get spacing() {
        return this.uniforms.spacing.value;
    }
    set spacing(a) {
        this.uniforms.spacing.value !== a && (this.uniforms.spacing.value = a);
    }
    get useClipBox() {
        return this._useClipBox;
    }
    set useClipBox(a) {
        this._useClipBox !== a &&
            ((this._useClipBox = a), this.updateShaderSource());
    }
    get clipTask() {
        return this.uniforms.clipTask.value;
    }
    set clipTask(a) {
        this.uniforms.clipTask.value = a;
    }
    get clipMethod() {
        return this.uniforms.clipMethod.value;
    }
    set clipMethod(a) {
        this.uniforms.clipMethod.value = a;
    }
    get weighted() {
        return this._weighted;
    }
    set weighted(a) {
        this._weighted !== a &&
            ((this._weighted = a), this.updateShaderSource());
    }
    get fov() {
        return this.uniforms.fov.value;
    }
    set fov(a) {
        this.uniforms.fov.value !== a &&
            ((this.uniforms.fov.value = a), this.updateShaderSource());
    }
    get screenWidth() {
        return this.uniforms.screenWidth.value;
    }
    set screenWidth(a) {
        this.uniforms.screenWidth.value !== a &&
            ((this.uniforms.screenWidth.value = a), this.updateShaderSource());
    }
    get screenHeight() {
        return this.uniforms.screenHeight.value;
    }
    set screenHeight(a) {
        this.uniforms.screenHeight.value !== a &&
            ((this.uniforms.screenHeight.value = a), this.updateShaderSource());
    }
    get near() {
        return this.uniforms.near.value;
    }
    set near(a) {
        this.uniforms.near.value !== a && (this.uniforms.near.value = a);
    }
    get far() {
        return this.uniforms.far.value;
    }
    set far(a) {
        this.uniforms.far.value !== a && (this.uniforms.far.value = a);
    }
    get opacity() {
        return this.uniforms.uOpacity.value;
    }
    set opacity(a) {
        this.uniforms &&
            this.uniforms.uOpacity &&
            this.uniforms.uOpacity.value !== a &&
            ((this.uniforms.uOpacity.value = a),
            this.updateShaderSource(),
            this.dispatchEvent({
                type: "opacity_changed",
                target: this
            }),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get pointColorType() {
        return this._pointColorType;
    }
    set pointColorType(a) {
        this._pointColorType !== a &&
            ((this._pointColorType = a),
            this.updateShaderSource(),
            this.dispatchEvent({
                type: "point_color_type_changed",
                target: this
            }),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get pointSizeType() {
        return this._pointSizeType;
    }
    set pointSizeType(a) {
        this._pointSizeType !== a &&
            ((this._pointSizeType = a),
            this.updateShaderSource(),
            this.dispatchEvent({
                type: "point_size_type_changed",
                target: this
            }),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get useEDL() {
        return this._useEDL;
    }
    set useEDL(a) {
        this._useEDL !== a && ((this._useEDL = a), this.updateShaderSource());
    }
    get color() {
        return this.uniforms.uColor.value;
    }
    set color(a) {
        this.uniforms.uColor.value.equals(a) ||
            (this.uniforms.uColor.value.copy(a),
            this.dispatchEvent({
                type: "color_changed",
                target: this
            }),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get shape() {
        return this._shape;
    }
    set shape(a) {
        this._shape !== a &&
            ((this._shape = a),
            this.updateShaderSource(),
            this.dispatchEvent({
                type: "point_shape_changed",
                target: this
            }),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get treeType() {
        return this._treeType;
    }
    set treeType(a) {
        this._treeType !== a &&
            ((this._treeType = a), this.updateShaderSource());
    }
    get bbSize() {
        return this.uniforms.bbSize.value;
    }
    set bbSize(a) {
        this.uniforms.bbSize.value = a;
    }
    get size() {
        return this.uniforms.size.value;
    }
    set size(a) {
        this.uniforms.size.value !== a &&
            ((this.uniforms.size.value = a),
            this.dispatchEvent({
                type: "point_size_changed",
                target: this
            }),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get elevationRange() {
        return this.uniforms.elevationRange.value;
    }
    set elevationRange(a) {
        if (
            this.uniforms.elevationRange.value[0] !== a[0] ||
            this.uniforms.elevationRange.value[1] !== a[1]
        )
            (this.uniforms.elevationRange.value = a),
                (this._defaultElevationRangeChanged = !0),
                this.dispatchEvent({
                    type: "material_property_changed",
                    target: this
                });
    }
    get heightMin() {
        return this.uniforms.elevationRange.value[0];
    }
    set heightMin(a) {
        this.elevationRange = [a, this.elevationRange[1]];
    }
    get heightMax() {
        return this.uniforms.elevationRange.value[1];
    }
    set heightMax(a) {
        this.elevationRange = [this.elevationRange[0], a];
    }
    get transition() {
        return this.uniforms.transition.value;
    }
    set transition(a) {
        this.uniforms.transition.value = a;
    }
    get intensityRange() {
        return this.uniforms.intensityRange.value;
    }
    set intensityRange(a) {
        a instanceof Array &&
            2 === a.length &&
            (a[0] !== this.uniforms.intensityRange.value[0] ||
                a[1] !== this.uniforms.intensityRange.value[1]) &&
            ((this.uniforms.intensityRange.value = a),
            (this._defaultIntensityRangeChanged = !0),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get intensityGamma() {
        return this.uniforms.intensityGamma.value;
    }
    set intensityGamma(a) {
        this.uniforms.intensityGamma.value !== a &&
            ((this.uniforms.intensityGamma.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get intensityContrast() {
        return this.uniforms.intensityContrast.value;
    }
    set intensityContrast(a) {
        this.uniforms.intensityContrast.value !== a &&
            ((this.uniforms.intensityContrast.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get intensityBrightness() {
        return this.uniforms.intensityBrightness.value;
    }
    set intensityBrightness(a) {
        this.uniforms.intensityBrightness.value !== a &&
            ((this.uniforms.intensityBrightness.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get rgbGamma() {
        return this.uniforms.rgbGamma.value;
    }
    set rgbGamma(a) {
        this.uniforms.rgbGamma.value !== a &&
            ((this.uniforms.rgbGamma.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get rgbContrast() {
        return this.uniforms.rgbContrast.value;
    }
    set rgbContrast(a) {
        this.uniforms.rgbContrast.value !== a &&
            ((this.uniforms.rgbContrast.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get rgbBrightness() {
        return this.uniforms.rgbBrightness.value;
    }
    set rgbBrightness(a) {
        this.uniforms.rgbBrightness.value !== a &&
            ((this.uniforms.rgbBrightness.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get weightRGB() {
        return this.uniforms.wRGB.value;
    }
    set weightRGB(a) {
        this.uniforms.wRGB.value !== a &&
            ((this.uniforms.wRGB.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get weightIntensity() {
        return this.uniforms.wIntensity.value;
    }
    set weightIntensity(a) {
        this.uniforms.wIntensity.value !== a &&
            ((this.uniforms.wIntensity.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get weightElevation() {
        return this.uniforms.wElevation.value;
    }
    set weightElevation(a) {
        this.uniforms.wElevation.value !== a &&
            ((this.uniforms.wElevation.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get weightClassification() {
        return this.uniforms.wClassification.value;
    }
    set weightClassification(a) {
        this.uniforms.wClassification.value !== a &&
            ((this.uniforms.wClassification.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get weightReturnNumber() {
        return this.uniforms.wReturnNumber.value;
    }
    set weightReturnNumber(a) {
        this.uniforms.wReturnNumber.value !== a &&
            ((this.uniforms.wReturnNumber.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    get weightSourceID() {
        return this.uniforms.wSourceID.value;
    }
    set weightSourceID(a) {
        this.uniforms.wSourceID.value !== a &&
            ((this.uniforms.wSourceID.value = a),
            this.dispatchEvent({
                type: "material_property_changed",
                target: this
            }));
    }
    static generateGradientTexture(a) {
        var b = document.createElement("canvas");
        b.width = 64;
        b.height = 64;
        var c = b.getContext("2d");
        c.rect(0, 0, 64, 64);
        for (
            var e = c.createLinearGradient(0, 0, 64, 64), d = 0;
            d < a.length;
            d++
        ) {
            var f = a[d];
            e.addColorStop(f[0], "#" + f[1].getHexString());
        }
        c.fillStyle = e;
        c.fill();
        a = new THREE.CanvasTexture(b);
        a.needsUpdate = !0;
        a.minFilter = THREE.LinearFilter;
        return a;
    }
    static generateClassificationTexture(a) {
        for (var b = new Uint8Array(262144), c = 0; 256 > c; c++)
            for (var e = 0; 256 > e; e++) {
                var d = c + 256 * e;
                var f = a[c] ? a[c] : a[c % 32] ? a[c % 32] : a.DEFAULT;
                b[4 * d] = 255 * f.x;
                b[4 * d + 1] = 255 * f.y;
                b[4 * d + 2] = 255 * f.z;
                b[4 * d + 3] = 255 * f.w;
            }
        a = new THREE.DataTexture(b, 256, 256, THREE.RGBAFormat);
        a.magFilter = THREE.NearestFilter;
        a.needsUpdate = !0;
        return a;
    }
    disableEvents() {
        void 0 === this._hiddenListeners &&
            ((this._hiddenListeners = this._listeners), (this._listeners = {}));
    }
    enableEvents() {
        this._listeners = this._hiddenListeners;
        this._hiddenListeners = void 0;
    }
    copyFrom(a) {
        for (var b of this.uniforms)
            this.uniforms[b].value = a.uniforms[b].value;
    }
}
var pointFormatReaders = {
    0: function(a) {
        return {
            position: [a.getInt32(0, !0), a.getInt32(4, !0), a.getInt32(8, !0)],
            intensity: a.getUint16(12, !0),
            classification: a.getUint8(16, !0)
        };
    },
    1: function(a) {
        return {
            position: [a.getInt32(0, !0), a.getInt32(4, !0), a.getInt32(8, !0)],
            intensity: a.getUint16(12, !0),
            classification: a.getUint8(16, !0)
        };
    },
    2: function(a) {
        return {
            position: [a.getInt32(0, !0), a.getInt32(4, !0), a.getInt32(8, !0)],
            intensity: a.getUint16(12, !0),
            classification: a.getUint8(16, !0),
            color: [
                a.getUint16(20, !0),
                a.getUint16(22, !0),
                a.getUint16(24, !0)
            ]
        };
    },
    3: function(a) {
        return {
            position: [a.getInt32(0, !0), a.getInt32(4, !0), a.getInt32(8, !0)],
            intensity: a.getUint16(12, !0),
            classification: a.getUint8(16, !0),
            color: [
                a.getUint16(28, !0),
                a.getUint16(30, !0),
                a.getUint16(32, !0)
            ]
        };
    }
};

function readAs(a, b, c, e) {
    e = void 0 === e || 0 === e ? 1 : e;
    a = a.slice(c, c + b.BYTES_PER_ELEMENT * e);
    b = new b(a);
    if (void 0 === e || 1 === e) return b[0];
    a = [];
    for (c = 0; c < e; c++) a.push(b[c]);
    return a;
}

function parseLASHeader(a) {
    var b = {};
    b.pointsOffset = readAs(a, Uint32Array, 96);
    b.pointsFormatId = readAs(a, Uint8Array, 104);
    b.pointsStructSize = readAs(a, Uint16Array, 105);
    b.pointsCount = readAs(a, Uint32Array, 107);
    var c = 131;
    b.scale = readAs(a, Float64Array, c, 3);
    c += 24;
    b.offset = readAs(a, Float64Array, c, 3);
    a = readAs(a, Float64Array, c + 24, 6);
    b.maxs = [a[0], a[2], a[4]];
    b.mins = [a[1], a[3], a[5]];
    return b;
}
var LASLoader = function(a) {
    this.arraybuffer = a;
};
LASLoader.prototype.open = function() {
    this.readOffset = 0;
    return new Promise(function(a, b) {
        setTimeout(a, 0);
    });
};
LASLoader.prototype.getHeader = function() {
    var a = this;
    return new Promise(function(b, c) {
        setTimeout(function() {
            a.header = parseLASHeader(a.arraybuffer);
            b(a.header);
        }, 0);
    });
};
LASLoader.prototype.readData = function(a, b, c) {
    var e = this;
    return new Promise(function(b, f) {
        setTimeout(function() {
            if (!e.header)
                return f(
                    Error(
                        "Cannot start reading data till a header request is issued"
                    )
                );
            if (1 >= c) {
                a = Math.min(a, e.header.pointsCount - e.readOffset);
                var d =
                    e.header.pointsOffset +
                    e.readOffset * e.header.pointsStructSize;
                b({
                    buffer: e.arraybuffer.slice(
                        d,
                        d + a * e.header.pointsStructSize
                    ),
                    count: a,
                    hasMoreData: e.readOffset + a < e.header.pointsCount
                });
                e.readOffset += a;
            } else {
                for (
                    var k = Math.min(
                            a * c,
                            e.header.pointsCount - e.readOffset
                        ),
                        h = 0,
                        l = new Uint8Array(
                            Math.ceil(k / c) * e.header.pointsStructSize
                        ),
                        m = 0;
                    m < k;
                    m++
                )
                    0 === m % c &&
                        ((d =
                            e.header.pointsOffset +
                            e.readOffset * e.header.pointsStructSize),
                        (d = new Uint8Array(
                            e.arraybuffer,
                            d,
                            e.header.pointsStructSize
                        )),
                        l.set(d, h * e.header.pointsStructSize),
                        h++),
                        e.readOffset++;
                b({
                    buffer: l.buffer,
                    count: h,
                    hasMoreData: e.readOffset < e.header.pointsCount
                });
            }
        }, 0);
    });
};
LASLoader.prototype.close = function() {
    var a = this;
    return new Promise(function(b, c) {
        a.arraybuffer = null;
        setTimeout(b, 0);
    });
};
var LAZLoader = function(a) {
    var b = this;
    this.arraybuffer = a;
    this.nextCB = null;
    this.dorr = function(a, e) {
        b.nextCB = e;
        Potree.workerPool.runTask(
            WorkerManager.LAS_LAZ,
            function(a) {
                null !== b.nextCB && (b.nextCB(a.data), (b.nextCB = null));
            },
            a
        );
    };
};
LAZLoader.prototype.open = function() {
    var a = this;
    return new Promise(function(b, c) {
        a.dorr(
            {
                type: "open",
                arraybuffer: a.arraybuffer
            },
            function(a) {
                if (1 !== a.status) return c(Error("Failed to open file"));
                b(!0);
            }
        );
    });
};
LAZLoader.prototype.getHeader = function() {
    var a = this;
    return new Promise(function(b, c) {
        a.dorr(
            {
                type: "header"
            },
            function(a) {
                if (1 !== a.status) return c(Error("Failed to get header"));
                b(a.header);
            }
        );
    });
};
LAZLoader.prototype.readData = function(a, b, c) {
    var e = this;
    return new Promise(function(d, f) {
        e.dorr(
            {
                type: "read",
                count: a,
                offset: b,
                skip: c
            },
            function(a) {
                if (1 !== a.status) return f(Error("Failed to read data"));
                d({
                    buffer: a.buffer,
                    count: a.count,
                    hasMoreData: a.hasMoreData
                });
            }
        );
    });
};
LAZLoader.prototype.close = function() {
    var a = this;
    return new Promise(function(b, c) {
        a.dorr(
            {
                type: "close"
            },
            function(a) {
                if (1 !== a.status) return c(Error("Failed to close file"));
                b(!0);
            }
        );
    });
};
var LASFile = function(a) {
    this.arraybuffer = a;
    this.determineVersion();
    if (12 < this.version)
        throw Error("Only file versions <= 1.2 are supported at this time");
    this.determineFormat();
    if (void 0 === pointFormatReaders[this.formatId])
        throw Error("The point format ID is not supported");
    this.loader = this.isCompressed
        ? new LAZLoader(this.arraybuffer)
        : new LASLoader(this.arraybuffer);
};
LASFile.prototype.determineFormat = function() {
    var a = readAs(this.arraybuffer, Uint8Array, 104),
        b = (a & 128) >> 7,
        c = (a & 64) >> 6;
    if (1 === b && 1 === c) throw Error("Old style compression not supported");
    this.formatId = a & 63;
    this.isCompressed = 1 === b || 1 === c;
};
LASFile.prototype.determineVersion = function() {
    var a = new Int8Array(this.arraybuffer, 24, 2);
    this.version = 10 * a[0] + a[1];
    this.versionAsString = a[0] + "." + a[1];
};
LASFile.prototype.open = function() {
    return this.loader.open();
};
LASFile.prototype.getHeader = function() {
    return this.loader.getHeader();
};
LASFile.prototype.readData = function(a, b, c) {
    return this.loader.readData(a, b, c);
};
LASFile.prototype.close = function() {
    return this.loader.close();
};
var LASDecoder = function(a, b, c, e, d, f, g, k) {
    this.arrayb = a;
    this.decoder = pointFormatReaders[b];
    this.pointsCount = e;
    this.pointSize = c;
    this.scale = d;
    this.offset = f;
    this.mins = g;
    this.maxs = k;
};
LASDecoder.prototype.getPoint = function(a) {
    if (0 > a || a >= this.pointsCount) throw Error("Point index out of range");
    a = new DataView(this.arrayb, a * this.pointSize, this.pointSize);
    return this.decoder(a);
};
Potree.BinaryLoader = class {
    constructor(a, b, c) {
        this.version = "string" === typeof a ? new VersionUtils(a) : a;
        this.boundingBox = b;
        this.scale = c;
    }
    load(a) {
        if (!a.loaded) {
            var b = a.getURL();
            this.version.equalOrHigher("1.4") && (b += ".bin");
            var c = this,
                e = new XMLHttpRequest();
            e.open("GET", b, !0);
            e.responseType = "arraybuffer";
            e.overrideMimeType("text/plain; charset=x-user-defined");
            e.onreadystatechange = function() {
                if (4 === e.readyState) {
                    if (
                        (200 !== e.status && 0 !== e.status) ||
                        null === e.response
                    )
                        throw Error(
                            "Potree: Failed to load file, HTTP status " +
                                e.status
                        );
                    c.parse(a, e.response);
                }
            };
            e.send(null);
        }
    }
    parse(a, b) {
        var c = a.pcoGeometry.pointAttributes,
            e = b.byteLength / a.pcoGeometry.pointAttributes.byteSize;
        this.version.upTo("1.5") && (a.numPoints = e);
        b = {
            buffer: b,
            pointAttributes: c,
            version: this.version.version,
            min: [
                a.boundingBox.min.x,
                a.boundingBox.min.y,
                a.boundingBox.min.z
            ],
            offset: [
                a.pcoGeometry.offset.x,
                a.pcoGeometry.offset.y,
                a.pcoGeometry.offset.z
            ],
            scale: this.scale,
            spacing: a.spacing,
            hasChildren: a.hasChildren,
            name: a.name
        };
        Potree.workerPool.runTask(
            WorkerManager.BINARY_DECODER,
            function(b) {
                var d = b.data,
                    e = d.attributeBuffers,
                    k = new THREE.Box3(
                        new THREE.Vector3().fromArray(d.tightBoundingBox.min),
                        new THREE.Vector3().fromArray(d.tightBoundingBox.max)
                    ),
                    h = new THREE.BufferGeometry(),
                    l;
                for (l in e) {
                    var m = e[l].buffer;
                    parseInt(l) ===
                    Potree.PointAttributeNames.POSITION_CARTESIAN
                        ? h.addAttribute(
                              "position",
                              new THREE.BufferAttribute(new Float32Array(m), 3)
                          )
                        : parseInt(l) ===
                          Potree.PointAttributeNames.COLOR_PACKED
                        ? h.addAttribute(
                              "color",
                              new THREE.BufferAttribute(
                                  new Uint8Array(m),
                                  4,
                                  !0
                              )
                          )
                        : parseInt(l) === Potree.PointAttributeNames.INTENSITY
                        ? h.addAttribute(
                              "intensity",
                              new THREE.BufferAttribute(new Float32Array(m), 1)
                          )
                        : parseInt(l) ===
                          Potree.PointAttributeNames.CLASSIFICATION
                        ? h.addAttribute(
                              "classification",
                              new THREE.BufferAttribute(new Uint8Array(m), 1)
                          )
                        : parseInt(l) ===
                          Potree.PointAttributeNames.NORMAL_SPHEREMAPPED
                        ? h.addAttribute(
                              "normal",
                              new THREE.BufferAttribute(new Float32Array(m), 3)
                          )
                        : parseInt(l) ===
                          Potree.PointAttributeNames.NORMAL_OCT16
                        ? h.addAttribute(
                              "normal",
                              new THREE.BufferAttribute(new Float32Array(m), 3)
                          )
                        : parseInt(l) === Potree.PointAttributeNames.NORMAL
                        ? h.addAttribute(
                              "normal",
                              new THREE.BufferAttribute(new Float32Array(m), 3)
                          )
                        : parseInt(l) === Potree.PointAttributeNames.INDICES
                        ? ((m = new THREE.BufferAttribute(
                              new Uint8Array(m),
                              4
                          )),
                          (m.normalized = !0),
                          h.addAttribute("indices", m))
                        : parseInt(l) === Potree.PointAttributeNames.SPACING &&
                          ((m = new THREE.BufferAttribute(
                              new Float32Array(m),
                              1
                          )),
                          h.addAttribute("spacing", m));
                }
                k.max.sub(k.min);
                k.min.set(0, 0, 0);
                a.numPoints = b.data.buffer.byteLength / c.byteSize;
                a.geometry = h;
                a.mean = new THREE.Vector3(...d.mean);
                a.tightBoundingBox = k;
                a.loaded = !0;
                a.loading = !1;
                a.estimatedSpacing = d.estimatedSpacing;
                Potree.numNodesLoading--;
            },
            b,
            [b.buffer]
        );
    }
};
class GreyhoundUtils {
    static getQueryParam(a) {
        a = a.replace(/[[\]]/g, "\\$&");
        return (a = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(
            window.location.href
        ))
            ? a[2]
                ? decodeURIComponent(a[2].replace(/\+/g, " "))
                : ""
            : null;
    }
    static createSchema(a) {
        var b = [
            {
                name: "X",
                size: 4,
                type: "signed"
            },
            {
                name: "Y",
                size: 4,
                type: "signed"
            },
            {
                name: "Z",
                size: 4,
                type: "signed"
            }
        ];
        a.forEach(function(a) {
            "COLOR_PACKED" === a
                ? (b.push({
                      name: "Red",
                      size: 2,
                      type: "unsigned"
                  }),
                  b.push({
                      name: "Green",
                      size: 2,
                      type: "unsigned"
                  }),
                  b.push({
                      name: "Blue",
                      size: 2,
                      type: "unsigned"
                  }))
                : "INTENSITY" === a
                ? b.push({
                      name: "Intensity",
                      size: 2,
                      type: "unsigned"
                  })
                : "CLASSIFICATION" === a &&
                  b.push({
                      name: "Classification",
                      size: 1,
                      type: "unsigned"
                  });
        });
        return b;
    }
    static fetch(a, b) {
        var c = new XMLHttpRequest();
        c.overrideMimeType("text/plain");
        c.open("GET", a, !0);
        c.onreadystatechange = function() {
            4 === c.readyState &&
                (200 === c.status || 0 === c.status
                    ? b(null, c.responseText)
                    : b(c.responseText));
        };
        c.send(null);
    }
    static fetchBinary(a, b) {
        var c = new XMLHttpRequest();
        c.overrideMimeType("text/plain");
        c.open("GET", a, !0);
        c.responseType = "arraybuffer";
        c.onreadystatechange = function() {
            4 === c.readyState &&
                (200 === c.status || 0 === c.status
                    ? b(null, c.response)
                    : b(c.responseText));
        };
        c.send(null);
    }
    static pointSizeFrom(a) {
        return a.reduce((a, c) => a + c.size, 0);
    }
    static getNormalization(a, b, c) {
        var e = [
            {
                name: "X",
                size: 4,
                type: "floating"
            },
            {
                name: "Y",
                size: 4,
                type: "floating"
            },
            {
                name: "Z",
                size: 4,
                type: "floating"
            },
            {
                name: "Red",
                size: 2,
                type: "unsigned"
            },
            {
                name: "Green",
                size: 2,
                type: "unsigned"
            },
            {
                name: "Blue",
                size: 2,
                type: "unsigned"
            },
            {
                name: "Intensity",
                size: 2,
                type: "unsigned"
            }
        ];
        a = a + "read?depth=" + b + "&schema=" + JSON.stringify(e);
        GreyhoundUtils.fetchBinary(a, function(a, b) {
            if (a) throw Error(a);
            a = new DataView(b);
            b = b.byteLength - 4;
            for (
                var d = GreyhoundUtils.pointSizeFrom(e), f = !1, h = !1, l = 0;
                l < b;
                l += d
            ) {
                if (
                    255 < a.getUint16(l + 12, !0) ||
                    255 < a.getUint16(l + 14, !0) ||
                    255 < a.getUint16(l + 16, !0)
                )
                    f = !0;
                255 < a.getUint16(l + 18, !0) && (h = !0);
                if (f && h) break;
            }
            c(null, {
                color: f,
                intensity: h
            });
        });
    }
}
Potree.GreyhoundLoader = function() {};
Potree.GreyhoundLoader.loadInfoJSON = function(a, b) {};
Potree.GreyhoundLoader.load = function(a, b) {
    try {
        var c = a.split("greyhound://")[1];
        1 === c.split("http://").length &&
            1 === c.split("https://").length &&
            (c = "http://" + c);
        GreyhoundUtils.fetch(c + "info", function(a, d) {
            if (a) throw Error(a);
            a = JSON.parse(d);
            var e = new VersionUtils("1.4"),
                g = a.bounds;
            d = a.scale || 0.01;
            Array.isArray(d) && (d = Math.min(d[0], d[1], d[2]));
            GreyhoundUtils.getQueryParam("scale") &&
                (d = parseFloat(GreyhoundUtils.getQueryParam("scale")));
            var k = Math.max(8, a.baseDepth),
                h = ["POSITION_CARTESIAN"],
                l = !1,
                m = !1,
                p = !1;
            a.schema.forEach(function(a) {
                "Intensity" === a.name && h.push("INTENSITY");
                "Classification" === a.name && h.push("CLASSIFICATION");
                "Red" === a.name
                    ? (l = !0)
                    : "Green" === a.name
                    ? (m = !0)
                    : "Blue" === a.name && (p = !0);
            });
            l && m && p && h.push("COLOR_PACKED");
            var n = new PointCloudGreyhoundGeometry();
            n.serverURL = c;
            n.spacing = (g[3] - g[0]) / Math.pow(2, k);
            n.baseDepth = k;
            n.hierarchyStepSize = 5;
            n.schema = GreyhoundUtils.createSchema(h);
            k = GreyhoundUtils.pointSizeFrom(n.schema);
            n.pointAttributes = new Potree.PointAttributes(h);
            n.pointAttributes.byteSize = k;
            g = new THREE.Box3(
                new THREE.Vector3().fromArray(g, 0),
                new THREE.Vector3().fromArray(g, 3)
            );
            k = g.min.clone();
            g.max.sub(g.min);
            g.min.set(0, 0, 0);
            n.projection = a.srs;
            n.boundingBox = g;
            n.boundingSphere = g.getBoundingSphere(new THREE.Sphere());
            n.scale = d;
            n.offset = k;
            n.loader = new Potree.GreyhoundBinaryLoader(e, g, n.scale);
            e = {};
            d = new PointCloudGreyhoundGeometryNode("r", n, g, d, k);
            d.level = 0;
            d.hasChildren = !0;
            d.numPoints = a.numPoints;
            d.spacing = n.spacing;
            n.root = d;
            n.root.load();
            e.r = d;
            n.nodes = e;
            GreyhoundUtils.getNormalization(c, a.baseDepth, function(a, c) {
                c.color && (n.normalize.color = !0);
                c.intensity && (n.normalize.intensity = !0);
                b(n);
            });
        });
    } catch (e) {
        console.log("Potree: Loading failed.", a, e), b();
    }
};
Potree.GreyhoundLoader.loadPointAttributes = function(a) {
    a = a.pointAttributes;
    for (var b = new Potree.PointAttributes(), c = 0; c < a.length; c++)
        b.add(Potree.PointAttribute[a[c]]);
    return b;
};
Potree.GreyhoundLoader.createChildAABB = function(a, b) {
    var c = a.min;
    a = a.max;
    var e = new THREE.Vector3()
            .copy(a)
            .sub(c)
            .multiplyScalar(0.5),
        d = new THREE.Vector3(e.x, 0, 0),
        f = new THREE.Vector3(0, e.y, 0),
        g = new THREE.Vector3(0, 0, e.z),
        k = c,
        h = new THREE.Vector3().add(c).add(e);
    1 === b
        ? ((c = new THREE.Vector3().copy(k).add(g)),
          (a = new THREE.Vector3().copy(h).add(g)))
        : 3 === b
        ? ((c = new THREE.Vector3()
              .copy(k)
              .add(g)
              .add(f)),
          (a = new THREE.Vector3()
              .copy(h)
              .add(g)
              .add(f)))
        : 0 === b
        ? ((c = k), (a = h))
        : 2 === b
        ? ((c = new THREE.Vector3().copy(k).add(f)),
          (a = new THREE.Vector3().copy(h).add(f)))
        : 5 === b
        ? ((c = new THREE.Vector3()
              .copy(k)
              .add(g)
              .add(d)),
          (a = new THREE.Vector3()
              .copy(h)
              .add(g)
              .add(d)))
        : 7 === b
        ? ((c = new THREE.Vector3().copy(k).add(e)),
          (a = new THREE.Vector3().copy(h).add(e)))
        : 4 === b
        ? ((c = new THREE.Vector3().copy(k).add(d)),
          (a = new THREE.Vector3().copy(h).add(d)))
        : 6 === b &&
          ((c = new THREE.Vector3()
              .copy(k)
              .add(d)
              .add(f)),
          (a = new THREE.Vector3()
              .copy(h)
              .add(d)
              .add(f)));
    return new THREE.Box3(c, a);
};
Potree.GreyhoundBinaryLoader = class {
    constructor(a, b, c) {
        this.version = "string" === typeof a ? new VersionUtils(a) : a;
        this.boundingBox = b;
        this.scale = c;
    }
    load(a) {
        if (!a.loaded) {
            var b = this,
                c = a.getURL(),
                e = new XMLHttpRequest();
            e.overrideMimeType("text/plain");
            e.open("GET", c, !0);
            e.responseType = "arraybuffer";
            e.overrideMimeType("text/plain; charset=x-user-defined");
            e.onreadystatechange = function() {
                4 === e.readyState &&
                    (200 === e.status || 0 === e.status
                        ? b.parse(a, e.response)
                        : console.log("Potree: Failed to load file.", e, c));
            };
            e.send(null);
        }
    }
    parse(a, b) {
        var c = new DataView(b, b.byteLength - 4, 4).getUint32(0, !0),
            e = a.pcoGeometry.pointAttributes;
        a.numPoints = c;
        c = a.boundingBox;
        var d = a.pcoGeometry.boundingBox.getCenter().sub(a.boundingBox.min);
        b = {
            buffer: b,
            pointAttributes: e,
            version: this.version.version,
            schema: a.pcoGeometry.schema,
            min: [c.min.x, c.min.y, c.min.z],
            max: [c.max.x, c.max.y, c.max.z],
            offset: d.toArray(),
            scale: this.scale,
            normalize: a.pcoGeometry.normalize
        };
        Potree.workerPool.runTask(
            WorkerManager.GREYHOUND,
            function(b) {
                b = b.data;
                var c = b.attributeBuffers,
                    d = new THREE.Box3(
                        new THREE.Vector3().fromArray(b.tightBoundingBox.min),
                        new THREE.Vector3().fromArray(b.tightBoundingBox.max)
                    ),
                    e = new THREE.BufferGeometry(),
                    f;
                for (f in c) {
                    var m = c[f].buffer;
                    parseInt(f) ===
                    Potree.PointAttributeNames.POSITION_CARTESIAN
                        ? e.addAttribute(
                              "position",
                              new THREE.BufferAttribute(new Float32Array(m), 3)
                          )
                        : parseInt(f) ===
                          Potree.PointAttributeNames.COLOR_PACKED
                        ? e.addAttribute(
                              "color",
                              new THREE.BufferAttribute(
                                  new Uint8Array(m),
                                  4,
                                  !0
                              )
                          )
                        : parseInt(f) === Potree.PointAttributeNames.INTENSITY
                        ? e.addAttribute(
                              "intensity",
                              new THREE.BufferAttribute(new Float32Array(m), 1)
                          )
                        : parseInt(f) ===
                          Potree.PointAttributeNames.CLASSIFICATION
                        ? e.addAttribute(
                              "classification",
                              new THREE.BufferAttribute(new Uint8Array(m), 1)
                          )
                        : parseInt(f) ===
                          Potree.PointAttributeNames.NORMAL_SPHEREMAPPED
                        ? e.addAttribute(
                              "normal",
                              new THREE.BufferAttribute(new Float32Array(m), 3)
                          )
                        : parseInt(f) ===
                          Potree.PointAttributeNames.NORMAL_OCT16
                        ? e.addAttribute(
                              "normal",
                              new THREE.BufferAttribute(new Float32Array(m), 3)
                          )
                        : parseInt(f) === Potree.PointAttributeNames.NORMAL
                        ? e.addAttribute(
                              "normal",
                              new THREE.BufferAttribute(new Float32Array(m), 3)
                          )
                        : parseInt(f) === Potree.PointAttributeNames.INDICES
                        ? ((m = new THREE.BufferAttribute(
                              new Uint8Array(m),
                              4
                          )),
                          (m.normalized = !0),
                          e.addAttribute("indices", m))
                        : parseInt(f) === Potree.PointAttributeNames.SPACING &&
                          ((m = new THREE.BufferAttribute(
                              new Float32Array(m),
                              1
                          )),
                          e.addAttribute("spacing", m));
                }
                d.max.sub(d.min);
                d.min.set(0, 0, 0);
                a.numPoints = b.numPoints;
                a.geometry = e;
                a.mean = new THREE.Vector3(...b.mean);
                a.tightBoundingBox = d;
                a.loaded = !0;
                a.loading = !1;
                Potree.numNodesLoading--;
            },
            b,
            [b.buffer]
        );
    }
};
Potree.POCLoader = function() {};
Potree.POCLoader.load = function(a, b) {
    try {
        var c = new PointCloudOctreeGeometry();
        c.url = a;
        var e = new XMLHttpRequest();
        e.overrideMimeType("text/plain");
        e.open("GET", a, !0);
        e.onreadystatechange = function() {
            if (4 === e.readyState && (200 === e.status || 0 === e.status)) {
                var d = JSON.parse(e.responseText),
                    f = new VersionUtils(d.version);
                0 === d.octreeDir.indexOf("http")
                    ? (c.octreeDir = d.octreeDir)
                    : (c.octreeDir = a + "/../" + d.octreeDir);
                c.spacing = d.spacing;
                c.hierarchyStepSize = d.hierarchyStepSize;
                c.pointAttributes = d.pointAttributes;
                var g = new THREE.Vector3(
                        d.boundingBox.lx,
                        d.boundingBox.ly,
                        d.boundingBox.lz
                    ),
                    k = new THREE.Vector3(
                        d.boundingBox.ux,
                        d.boundingBox.uy,
                        d.boundingBox.uz
                    ),
                    h = new THREE.Box3(g, k);
                k = h.clone();
                d.tightBoundingBox &&
                    (k.min.copy(
                        new THREE.Vector3(
                            d.tightBoundingBox.lx,
                            d.tightBoundingBox.ly,
                            d.tightBoundingBox.lz
                        )
                    ),
                    k.max.copy(
                        new THREE.Vector3(
                            d.tightBoundingBox.ux,
                            d.tightBoundingBox.uy,
                            d.tightBoundingBox.uz
                        )
                    ));
                g = g.clone();
                h.min.sub(g);
                h.max.sub(g);
                k.min.sub(g);
                k.max.sub(g);
                c.projection = d.projection;
                c.boundingBox = h;
                c.tightBoundingBox = k;
                c.boundingSphere = h.getBoundingSphere(new THREE.Sphere());
                c.tightBoundingSphere = k.getBoundingSphere(new THREE.Sphere());
                c.offset = g;
                "LAS" === d.pointAttributes
                    ? (c.loader = new Potree.LASLAZLoader(d.version))
                    : "LAZ" === d.pointAttributes
                    ? (c.loader = new Potree.LASLAZLoader(d.version))
                    : ((c.loader = new Potree.BinaryLoader(
                          d.version,
                          h,
                          d.scale
                      )),
                      (c.pointAttributes = new Potree.PointAttributes(
                          c.pointAttributes
                      )));
                g = {};
                k = "r";
                h = new PointCloudOctreeGeometryNode(k, c, h);
                h.level = 0;
                h.hasChildren = !0;
                h.spacing = c.spacing;
                f.upTo("1.5")
                    ? (h.numPoints = d.hierarchy[0][1])
                    : (h.numPoints = 0);
                c.root = h;
                c.root.load();
                g[k] = h;
                if (f.upTo("1.4"))
                    for (f = 1; f < d.hierarchy.length; f++) {
                        k = d.hierarchy[f][0];
                        var l = d.hierarchy[f][1];
                        h = parseInt(k.charAt(k.length - 1));
                        var m = k.substring(0, k.length - 1);
                        m = g[m];
                        var p = k.length - 1;
                        h = Potree.POCLoader.createChildAABB(m.boundingBox, h);
                        h = new PointCloudOctreeGeometryNode(k, c, h);
                        h.level = p;
                        h.numPoints = l;
                        h.spacing = c.spacing / Math.pow(2, p);
                        m.addChild(h);
                        g[k] = h;
                    }
                c.nodes = g;
                b(c);
            }
        };
        e.send(null);
    } catch (d) {
        console.log('loading failed: "' + a + '"'), console.log(d), b();
    }
};
Potree.POCLoader.loadPointAttributes = function(a) {
    a = a.pointAttributes;
    for (var b = new Potree.PointAttributes(), c = 0; c < a.length; c++)
        b.add(Potree.PointAttribute[a[c]]);
    return b;
};
Potree.POCLoader.createChildAABB = function(a, b) {
    var c = a.min.clone();
    a = a.max.clone();
    var e = new THREE.Vector3().subVectors(a, c);
    0 < (b & 1) ? (c.z += e.z / 2) : (a.z -= e.z / 2);
    0 < (b & 2) ? (c.y += e.y / 2) : (a.y -= e.y / 2);
    0 < (b & 4) ? (c.x += e.x / 2) : (a.x -= e.x / 2);
    return new THREE.Box3(c, a);
};
Potree.LASLAZLoader = class {
    constructor(a) {
        this.version = "string" === typeof a ? new VersionUtils(a) : a;
    }
    static progressCB() {}
    load(a) {
        if (!a.loaded) {
            var b = a.pcoGeometry.pointAttributes,
                c = a.getURL();
            this.version.equalOrHigher("1.4") && (c += "." + b.toLowerCase());
            var e = new XMLHttpRequest();
            e.open("GET", c, !0);
            e.responseType = "arraybuffer";
            e.overrideMimeType("text/plain; charset=x-user-defined");
            e.onreadystatechange = () => {
                4 === e.readyState &&
                    (200 === e.status
                        ? this.parse(a, e.response)
                        : console.log(
                              "Potree: Failed to load file! HTTP status: " +
                                  e.status +
                                  ", file: " +
                                  c
                          ));
            };
            e.send(null);
        }
    }
    parse(a, b) {
        var c = new LASFile(b),
            e = new Potree.LasLazBatcher(a);
        c.open()
            .then(a => {
                c.isOpen = !0;
                return c;
            })
            .catch(a => {
                console.log("Potree: Failed to open file.");
            })
            .then(a =>
                a.getHeader().then(function(b) {
                    return [a, b];
                })
            )
            .then(a => {
                var b = a[0],
                    c = a[1],
                    d = 0,
                    h = c.pointsCount,
                    l = function() {
                        return b.readData(1e6, 0, 1).then(function(a) {
                            e.push(
                                new LASDecoder(
                                    a.buffer,
                                    c.pointsFormatId,
                                    c.pointsStructSize,
                                    a.count,
                                    c.scale,
                                    c.offset,
                                    c.mins,
                                    c.maxs
                                )
                            );
                            d += a.count;
                            Potree.LASLAZLoader.progressCB(d / h);
                            if (a.hasMoreData) return l();
                            c.totalRead = d;
                            c.versionAsString = b.versionAsString;
                            c.isCompressed = b.isCompressed;
                            return [b, c, e];
                        });
                    };
                return l();
            })
            .then(a => {
                var b = a[0];
                Potree.LASLAZLoader.progressCB(1);
                return b
                    .close()
                    .then(function() {
                        b.isOpen = !1;
                        return a.slice(1);
                    })
                    .catch(a => {
                        if (b.isOpen)
                            return b.close().then(function() {
                                b.isOpen = !1;
                                throw a;
                            });
                        throw a;
                    });
            });
    }
    handle(a, b) {}
};
Potree.LasLazBatcher = class {
    constructor(a) {
        this.node = a;
    }
    push(a) {
        var b = this,
            c = {
                buffer: a.arrayb,
                numPoints: a.pointsCount,
                pointSize: a.pointSize,
                pointFormatID: 2,
                scale: a.scale,
                offset: a.offset,
                mins: a.mins,
                maxs: a.maxs
            };
        Potree.workerPool.runTask(
            WorkerManager.LAS_DECODER,
            function(c) {
                var d = new THREE.BufferGeometry(),
                    e = a.pointsCount,
                    g = new Float32Array(c.data.position),
                    k = new Uint8Array(c.data.color),
                    h = new Float32Array(c.data.intensity),
                    l = new Uint8Array(c.data.classification),
                    m = new Uint8Array(c.data.returnNumber),
                    p = new Uint8Array(c.data.numberOfReturns),
                    n = new Uint16Array(c.data.pointSourceID),
                    q = new Uint8Array(c.data.indices);
                d.addAttribute("position", new THREE.BufferAttribute(g, 3));
                d.addAttribute("color", new THREE.BufferAttribute(k, 4, !0));
                d.addAttribute("intensity", new THREE.BufferAttribute(h, 1));
                d.addAttribute(
                    "classification",
                    new THREE.BufferAttribute(l, 1)
                );
                d.addAttribute("returnNumber", new THREE.BufferAttribute(m, 1));
                d.addAttribute(
                    "numberOfReturns",
                    new THREE.BufferAttribute(p, 1)
                );
                d.addAttribute(
                    "pointSourceID",
                    new THREE.BufferAttribute(n, 1)
                );
                d.addAttribute("indices", new THREE.BufferAttribute(q, 4));
                d.attributes.indices.normalized = !0;
                g = new THREE.Box3(
                    new THREE.Vector3().fromArray(c.data.tightBoundingBox.min),
                    new THREE.Vector3().fromArray(c.data.tightBoundingBox.max)
                );
                d.boundingBox = b.node.boundingBox;
                b.node.tightBoundingBox = g;
                b.node.geometry = d;
                b.node.numPoints = e;
                b.node.loaded = !0;
                b.node.loading = !1;
                Potree.numNodesLoading--;
                b.node.mean = new THREE.Vector3(...c.data.mean);
            },
            c,
            [c.buffer]
        );
    }
};
Potree.BasicGroup = class extends THREE.Mesh {
    constructor() {
        super(
            new THREE.Geometry(),
            new THREE.MeshBasicMaterial({
                opacity: 0,
                wireframe: !1,
                transparent: !0
            })
        );
        this.rotation.set(-Math.PI / 2, 0, 0);
        this.frustumCulled = !0;
        this.pointclouds = [];
        this.nodeSize = 30;
        this.pointBudget = 1e10;
        this.nodeLoadRate = 2;
    }
    raycast(a, b) {}
    setPointBudget(a) {
        this.pointBudget = a;
    }
    onBeforeRender(a, b, c, e, d, f) {
        for (b = 0; b < this.pointclouds.length; b++)
            this.pointclouds[b].minimumNodePixelSize = this.nodeSize;
        Potree.updatePointClouds(this.pointclouds, c, a);
    }
    recalculateBoxGeometry() {
        var a = this.getBoundingBox(),
            b = a.getSize(new THREE.Vector3()),
            c = a.getCenter(new THREE.Vector3());
        a = new THREE.Matrix4();
        a.makeTranslation(c.x, -c.z, c.y);
        b = new THREE.BoxBufferGeometry(b.x, b.z, b.y);
        b.applyMatrix(a);
        this.geometry = b;
    }
    add(a) {
        THREE.Object3D.prototype.add.call(this, a);
        a instanceof PointCloudTree &&
            ((a.showBoundingBox = !1),
            (a.generateDEM = !1),
            this.pointclouds.push(a),
            this.recalculateBoxGeometry());
    }
    remove(a) {
        THREE.Object3D.prototype.remove.call(this, a);
        a instanceof PointCloudTree &&
            ((a = this.pointclouds.indexOf(a)),
            -1 !== a &&
                (this.pointclouds.splice(a, 1), this.recalculateBoxGeometry()));
    }
    getBoundingBox() {
        var a = new THREE.Box3();
        this.updateMatrixWorld(!0);
        for (var b = 0; b < this.pointclouds.length; b++) {
            var c = this.pointclouds[b];
            c.updateMatrixWorld(!0);
            c = HelperUtils.computeTransformedBoundingBox(
                c.pcoGeometry.tightBoundingBox
                    ? c.pcoGeometry.tightBoundingBox
                    : c.boundingBox,
                c.matrixWorld
            );
            a.union(c);
        }
        return a;
    }
    estimateHeightAt(a) {
        var b = null,
            c = Infinity,
            e;
        for (e of this.pointclouds)
            if (void 0 !== e.root.geometryNode) {
                var d = null,
                    f = Infinity,
                    g = a.clone().sub(e.position);
                g.z = 0;
                g = new THREE.Ray(g, new THREE.Vector3(0, 0, 1));
                for (var k = [e.root]; 0 < k.length; ) {
                    var h = k.pop(),
                        l = h.getBoundingBox();
                    if (g.intersectBox(l)) {
                        l =
                            h.geometryNode.mean.z +
                            e.position.z +
                            h.geometryNode.boundingBox.min.z;
                        h.geometryNode.spacing <= f &&
                            ((d = l), (f = h.geometryNode.spacing));
                        for (var m of Object.keys(h.children))
                            h.children[m].geometryNode && k.push(h.children[m]);
                    }
                }
                if (null === b || f < c) (b = d), (c = f);
            }
        return b;
    }
};
Potree.Group = class extends Potree.BasicGroup {
    constructor() {
        super();
        this.buffers = new Map();
        this.shaders = new Map();
        this.textures = new Map();
        this.types = new Map();
    }
    getExtensions(a) {
        this.types.set(Float32Array, a.FLOAT);
        this.types.set(Uint8Array, a.UNSIGNED_BYTE);
        this.types.set(Uint16Array, a.UNSIGNED_SHORT);
        var b = a.getExtension("OES_vertex_array_object");
        a.createVertexArray = b.createVertexArrayOES.bind(b);
        a.bindVertexArray = b.bindVertexArrayOES.bind(b);
    }
    onBeforeRender(a, b, c, e, d, f) {
        super.onBeforeRender(a, b, c, e, d, f);
        b = a.context;
        void 0 === b.bindVertexArray && this.getExtensions(b);
        e = this.fetchOctrees();
        for (var g of e.octrees) this.renderOctree(a, g, g.visibleNodes, c);
        b.activeTexture(b.TEXTURE1);
        b.bindTexture(b.TEXTURE_2D, null);
        a.state.reset();
    }
    createBuffer(a, b) {
        var c = new Potree.WebGLBuffer();
        c.vao = a.createVertexArray();
        c.numElements = b.attributes.position.count;
        a.bindVertexArray(c.vao);
        for (var e in b.attributes) {
            var d = b.attributes[e],
                f = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, f);
            a.bufferData(a.ARRAY_BUFFER, d.array, a.STATIC_DRAW);
            var g = Potree.attributeLocations[e],
                k = d.normalized,
                h = this.types.get(d.array.constructor);
            void 0 !== h &&
                (a.vertexAttribPointer(g, d.itemSize, h, k, 0, 0),
                a.enableVertexAttribArray(g));
            c.vbos.set(e, {
                handle: f,
                name: e,
                count: d.count,
                itemSize: d.itemSize,
                type: b.attributes.position.array.constructor,
                version: 0
            });
        }
        a.bindBuffer(a.ARRAY_BUFFER, null);
        a.bindVertexArray(null);
        return c;
    }
    updateBuffer(a, b) {
        var c = this.buffers.get(b);
        a.bindVertexArray(c.vao);
        for (var e in b.attributes) {
            var d = b.attributes[e],
                f = Potree.attributeLocations[e],
                g = d.normalized,
                k = this.types.get(d.array.constructor);
            if (c.vbos.has(e)) {
                var h = c.vbos.get(e).handle;
                c.vbos.get(e).version = d.version;
            } else
                (h = a.createBuffer()),
                    c.vbos.set(e, {
                        handle: h,
                        name: e,
                        count: d.count,
                        itemSize: d.itemSize,
                        type: b.attributes.position.array.constructor,
                        version: d.version
                    });
            a.bindBuffer(a.ARRAY_BUFFER, h);
            a.bufferData(a.ARRAY_BUFFER, d.array, a.STATIC_DRAW);
            a.vertexAttribPointer(f, d.itemSize, k, g, 0, 0);
            a.enableVertexAttribArray(f);
        }
        a.bindBuffer(a.ARRAY_BUFFER, null);
        a.bindVertexArray(null);
    }
    fetchOctrees() {
        for (var a = [], b = [this]; 0 < b.length; ) {
            var c = b.pop();
            c instanceof PointCloudTree
                ? a.push(c)
                : ((c = c.children.filter(a => a.visible)), b.push(...c));
        }
        return {
            octrees: a
        };
    }
    renderNodes(a, b, c, e, d, f) {
        a = a.context;
        b = b.material;
        d = d.matrixWorldInverse;
        var g = new THREE.Matrix4(),
            k = new Float32Array(16),
            h;
        for (h of c)
            if (
                void 0 === Potree.debug.allowedNodes ||
                Potree.debug.allowedNodes.includes(h.name)
            ) {
                var l = h.sceneNode.matrixWorld;
                g.multiplyMatrices(d, l);
                e && ((c = e.offsets.get(h)), f.setUniform1f("uVNStart", c));
                c = h.getLevel();
                f.setUniform("uDebug", !0 === h.debug);
                if (h instanceof PointCloudOctreeNode)
                    var m = 0 === Object.keys(h.children).length;
                else
                    h instanceof PointCloudArena4DNode &&
                        (m = h.geometryNode.isLeaf);
                f.setUniform("uIsLeafNode", m);
                var p = f.uniformLocations.modelMatrix;
                p && (k.set(l.elements), a.uniformMatrix4fv(p, !1, k));
                p = f.uniformLocations.modelViewMatrix;
                k.set(g.elements);
                a.uniformMatrix4fv(p, !1, k);
                if (b.clipPolygons && 0 < b.clipPolygons.length) {
                    p = [];
                    var n = [];
                    for (r of b.clipPolygons) {
                        d = r.viewMatrix;
                        var q = r.projMatrix
                            .clone()
                            .multiply(d)
                            .multiply(l);
                        p.push(r.markers.length);
                        n.push(q);
                    }
                    l = [].concat(...n.map(a => a.elements));
                    q = Array(24 * b.clipPolygons.length);
                    for (n = 0; n < b.clipPolygons.length; n++) {
                        var r = b.clipPolygons[n];
                        for (var t = 0; t < r.markers.length; t++)
                            (q[24 * n + 3 * t] = r.markers[t].position.x),
                                (q[24 * n + (3 * t + 1)] =
                                    r.markers[t].position.y),
                                (q[24 * n + (3 * t + 2)] =
                                    r.markers[t].position.z);
                    }
                    a.uniform1iv(
                        f.uniformLocations["uClipPolygonVCount[0]"],
                        p
                    );
                    a.uniformMatrix4fv(
                        f.uniformLocations["uClipPolygonWVP[0]"],
                        !1,
                        l
                    );
                    a.uniform3fv(
                        f.uniformLocations["uClipPolygonVertices[0]"],
                        q
                    );
                }
                f.setUniform1f("uLevel", c);
                f.setUniform1f("uNodeSpacing", h.geometryNode.estimatedSpacing);
                f.setUniform1f("uPCIndex", n);
                c = h.geometryNode.geometry;
                l = null;
                if (this.buffers.has(c)) {
                    l = this.buffers.get(c);
                    for (var u in c.attributes)
                        c.attributes[u].version > l.vbos.get(u).version &&
                            this.updateBuffer(a, c);
                } else (l = this.createBuffer(a, c)), this.buffers.set(c, l);
                a.bindVertexArray(l.vao);
                a.drawArrays(a.POINTS, 0, l.numElements);
            }
        a.bindVertexArray(null);
    }
    renderOctree(a, b, c, e) {
        var d = a.context,
            f = b.material,
            g = e.matrixWorldInverse,
            k = e.matrixWorld,
            h = e.projectionMatrix,
            l = new THREE.Matrix4().getInverse(h);
        new THREE.Matrix4();
        var m = null,
            p = 0;
        if (
            0 <= f.pointSizeType &&
            (f.pointSizeType === Potree.PointSizeType.ADAPTIVE ||
                f.pointColorType === Potree.PointColorType.LOD)
        ) {
            m = b.computeVisibilityTextureData(c, e);
            var n = f.visibleNodesTexture;
            n.image.data.set(m.data);
            n.needsUpdate = !0;
        }
        n = null;
        this.shaders.has(f)
            ? ((n = this.shaders.get(f)),
              (q = f.vertexShader),
              (r = f.fragmentShader))
            : ((n = new Potree.Shader(
                  d,
                  "pointcloud",
                  f.vertexShader,
                  f.fragmentShader
              )),
              this.shaders.set(f, n));
        r = [
            "#define num_shadowmaps0",
            "#define num_snapshots" + (f.snapEnabled ? f.numSnapshots : 0),
            "#define num_clipboxes" +
                (f.clipBoxes && f.clipBoxes.length ? f.clipBoxes.length : 0),
            "#define num_clipspheres0",
            "#define num_clippolygons" +
                (f.clipPolygons && f.clipPolygons.length
                    ? f.clipPolygons.length
                    : 0)
        ].join("\n");
        var q = r + "\n" + f.vertexShader,
            r = r + "\n" + f.fragmentShader;
        n.update(q, r);
        f.needsUpdate = !1;
        for (var t of Object.keys(f.uniforms))
            if (((q = f.uniforms[t]), "t" == q.type && (q = q.value)))
                this.textures.has(q) ||
                    ((r = new Potree.WebGLTexture(d, q)),
                    this.textures.set(q, r)),
                    this.textures.get(q).update();
        d.useProgram(n.program);
        1 > f.opacity
            ? (d.enable(d.BLEND),
              d.blendFunc(d.SRC_ALPHA, d.ONE),
              d.depthMask(!1),
              d.disable(d.DEPTH_TEST))
            : (d.disable(d.BLEND), d.depthMask(!0), d.enable(d.DEPTH_TEST));
        n.setUniformMatrix4("projectionMatrix", h);
        n.setUniformMatrix4("viewMatrix", g);
        n.setUniformMatrix4("uViewInv", k);
        n.setUniformMatrix4("uProjInv", l);
        g = f.screenHeight;
        n.setUniform1f("uScreenWidth", f.screenWidth);
        n.setUniform1f("uScreenHeight", g);
        n.setUniform1f("fov", (Math.PI * e.fov) / 180);
        n.setUniform1f("near", e.near);
        n.setUniform1f("far", e.far);
        a.capabilities.logarithmicDepthBuffer &&
            n.setUniform("logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2));
        e instanceof THREE.OrthographicCamera
            ? (n.setUniform("uUseOrthographicCamera", !0),
              n.setUniform("uOrthoWidth", e.right - e.left),
              n.setUniform("uOrthoHeight", e.top - e.bottom))
            : n.setUniform("uUseOrthographicCamera", !1);
        0 === f.clipBoxes.length + f.clipPolygons.length
            ? n.setUniform1i("clipTask", Potree.ClipTask.NONE)
            : n.setUniform1i("clipTask", f.clipTask);
        n.setUniform1i("clipMethod", f.clipMethod);
        f.clipBoxes &&
            0 < f.clipBoxes.length &&
            d.uniformMatrix4fv(
                n.uniformLocations["clipBoxes[0]"],
                !1,
                f.uniforms.clipBoxes.value
            );
        n.setUniform1f("size", f.size);
        n.setUniform1f("maxSize", f.uniforms.maxSize.value);
        n.setUniform1f("minSize", f.uniforms.minSize.value);
        n.setUniform1f("uOctreeSpacing", f.spacing);
        n.setUniform("uOctreeSize", f.uniforms.octreeSize.value);
        n.setUniform3f("uColor", f.color.toArray());
        n.setUniform1f("uOpacity", f.opacity);
        n.setUniform2f("elevationRange", f.elevationRange);
        n.setUniform2f("intensityRange", f.intensityRange);
        n.setUniform1f("intensityGamma", f.intensityGamma);
        n.setUniform1f("intensityContrast", f.intensityContrast);
        n.setUniform1f("intensityBrightness", f.intensityBrightness);
        n.setUniform1f("rgbGamma", f.rgbGamma);
        n.setUniform1f("rgbContrast", f.rgbContrast);
        n.setUniform1f("rgbBrightness", f.rgbBrightness);
        n.setUniform1f("uTransition", f.transition);
        n.setUniform1f("wRGB", f.weightRGB);
        n.setUniform1f("wIntensity", f.weightIntensity);
        n.setUniform1f("wElevation", f.weightElevation);
        n.setUniform1f("wClassification", f.weightClassification);
        n.setUniform1f("wReturnNumber", f.weightReturnNumber);
        n.setUniform1f("wSourceID", f.weightSourceID);
        g = this.textures.get(f.visibleNodesTexture);
        n.setUniform1i("visibleNodesTexture", p);
        d.activeTexture(d.TEXTURE0 + p);
        d.bindTexture(g.target, g.id);
        p++;
        g = this.textures.get(f.gradientTexture);
        n.setUniform1i("gradient", p);
        d.activeTexture(d.TEXTURE0 + p);
        d.bindTexture(g.target, g.id);
        p++;
        g = this.textures.get(f.classificationTexture);
        n.setUniform1i("classificationLUT", p);
        d.activeTexture(d.TEXTURE0 + p);
        d.bindTexture(g.target, g.id);
        p++;
        if (!0 === f.snapEnabled) {
            h = n.uniformLocations["uSnapshot[0]"];
            l = n.uniformLocations["uSnapshotDepth[0]"];
            g = Array(5)
                .fill(p)
                .map((a, b) => a + b);
            k = Array(5)
                .fill(1 + Math.max(...g))
                .map((a, b) => a + b);
            p = 1 + Math.max(...k);
            d.uniform1iv(h, g);
            d.uniform1iv(l, k);
            for (p = 0; 5 > p; p++) {
                q = f.uniforms.uSnapshot.value[p];
                l = f.uniforms.uSnapshotDepth.value[p];
                if (!q) break;
                h = a.properties.get(q).__webglTexture;
                l = a.properties.get(l).__webglTexture;
                t = k[p];
                d.activeTexture(d[`TEXTURE${g[p]}`]);
                d.bindTexture(d.TEXTURE_2D, h);
                d.activeTexture(d[`TEXTURE${t}`]);
                d.bindTexture(d.TEXTURE_2D, l);
            }
            p = [].concat(...f.uniforms.uSnapView.value.map(a => a.elements));
            d.uniformMatrix4fv(n.uniformLocations["uSnapView[0]"], !1, p);
            p = [].concat(...f.uniforms.uSnapProj.value.map(a => a.elements));
            d.uniformMatrix4fv(n.uniformLocations["uSnapProj[0]"], !1, p);
            p = [].concat(
                ...f.uniforms.uSnapProjInv.value.map(a => a.elements)
            );
            d.uniformMatrix4fv(n.uniformLocations["uSnapProjInv[0]"], !1, p);
            p = [].concat(
                ...f.uniforms.uSnapViewInv.value.map(a => a.elements)
            );
            d.uniformMatrix4fv(n.uniformLocations["uSnapViewInv[0]"], !1, p);
        }
        this.renderNodes(a, b, c, m, e, n);
        d.activeTexture(d.TEXTURE2);
        d.bindTexture(d.TEXTURE_2D, null);
        d.activeTexture(d.TEXTURE0);
    }
};

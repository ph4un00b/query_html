// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var t;
(function(o) {
    o.Root = "root", o.Text = "text", o.Directive = "directive", o.Comment = "comment", o.Script = "script", o.Style = "style", o.Tag = "tag", o.CDATA = "cdata", o.Doctype = "doctype";
})(t || (t = {}));
function c(o) {
    return o.type === t.Tag || o.type === t.Script || o.type === t.Style;
}
var r = t.Root, i = t.Text, p = t.Directive, e = t.Comment, x = t.Script, s = t.Style, n = t.Tag, a = t.CDATA, D = t.Doctype;
var f = class {
    constructor(){
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    get parentNode() {
        return this.parent;
    }
    set parentNode(t) {
        this.parent = t;
    }
    get previousSibling() {
        return this.prev;
    }
    set previousSibling(t) {
        this.prev = t;
    }
    get nextSibling() {
        return this.next;
    }
    set nextSibling(t) {
        this.next = t;
    }
    cloneNode(t = !1) {
        return N(this, t);
    }
}, h = class extends f {
    constructor(t){
        super(), this.data = t;
    }
    get nodeValue() {
        return this.data;
    }
    set nodeValue(t) {
        this.data = t;
    }
}, o = class extends h {
    constructor(){
        super(...arguments), this.type = t.Text;
    }
    get nodeType() {
        return 3;
    }
}, c1 = class extends h {
    constructor(){
        super(...arguments), this.type = t.Comment;
    }
    get nodeType() {
        return 8;
    }
}, d = class extends h {
    constructor(t1, s){
        super(s), this.name = t1, this.type = t.Directive;
    }
    get nodeType() {
        return 1;
    }
}, u = class extends f {
    constructor(t){
        super(), this.children = t;
    }
    get firstChild() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
    }
    get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    get childNodes() {
        return this.children;
    }
    set childNodes(t) {
        this.children = t;
    }
}, p1 = class extends u {
    constructor(){
        super(...arguments), this.type = t.CDATA;
    }
    get nodeType() {
        return 4;
    }
}, a1 = class extends u {
    constructor(){
        super(...arguments), this.type = t.Root;
    }
    get nodeType() {
        return 9;
    }
}, x1 = class extends u {
    constructor(t1, s, n = [], i = t1 === "script" ? t.Script : t1 === "style" ? t.Style : t.Tag){
        super(n), this.name = t1, this.attribs = s, this.type = i;
    }
    get nodeType() {
        return 1;
    }
    get tagName() {
        return this.name;
    }
    set tagName(t) {
        this.name = t;
    }
    get attributes() {
        return Object.keys(this.attribs).map((t)=>{
            var s, n;
            return {
                name: t,
                value: this.attribs[t],
                namespace: (s = this["x-attribsNamespace"]) === null || s === void 0 ? void 0 : s[t],
                prefix: (n = this["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[t]
            };
        });
    }
};
function I(e) {
    return c(e);
}
function v(e) {
    return e.type === t.CDATA;
}
function T(e) {
    return e.type === t.Text;
}
function C(e) {
    return e.type === t.Comment;
}
function S(e) {
    return e.type === t.Directive;
}
function E(e) {
    return e.type === t.Root;
}
function A(e) {
    return Object.prototype.hasOwnProperty.call(e, "children");
}
function N(e, t = !1) {
    let s;
    if (T(e)) s = new o(e.data);
    else if (C(e)) s = new c1(e.data);
    else if (I(e)) {
        let n = t ? m(e.children) : [], i = new x1(e.name, {
            ...e.attribs
        }, n);
        n.forEach((l)=>l.parent = i), e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = {
            ...e["x-attribsNamespace"]
        }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = {
            ...e["x-attribsPrefix"]
        }), s = i;
    } else if (v(e)) {
        let n1 = t ? m(e.children) : [], i1 = new p1(n1);
        n1.forEach((l)=>l.parent = i1), s = i1;
    } else if (E(e)) {
        let n2 = t ? m(e.children) : [], i2 = new a1(n2);
        n2.forEach((l)=>l.parent = i2), e["x-mode"] && (i2["x-mode"] = e["x-mode"]), s = i2;
    } else if (S(e)) {
        let n3 = new d(e.name, e.data);
        e["x-name"] != null && (n3["x-name"] = e["x-name"], n3["x-publicId"] = e["x-publicId"], n3["x-systemId"] = e["x-systemId"]), s = n3;
    } else throw new Error(`Not implemented yet: ${e.type}`);
    return s.startIndex = e.startIndex, s.endIndex = e.endIndex, e.sourceCodeLocation != null && (s.sourceCodeLocation = e.sourceCodeLocation), s;
}
function m(e) {
    let t = e.map((s)=>N(s, !0));
    for(let s = 1; s < t.length; s++)t[s].prev = t[s - 1], t[s - 1].next = t[s];
    return t;
}
var h1 = new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((u)=>u.charCodeAt(0)));
var y = new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((u)=>u.charCodeAt(0)));
var g, k = new Map([
    [
        0,
        65533
    ],
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ]
]), q = (g = String.fromCodePoint) !== null && g !== void 0 ? g : function(u) {
    let b = "";
    return u > 65535 && (u -= 65536, b += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), b += String.fromCharCode(u), b;
};
function E1(u) {
    var b;
    return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (b = k.get(u)) !== null && b !== void 0 ? b : u;
}
function m1(u) {
    return q(E1(u));
}
var c2;
(function(u) {
    u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.To_LOWER_BIT = 32] = "To_LOWER_BIT";
})(c2 || (c2 = {}));
var l;
(function(u) {
    u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE";
})(l || (l = {}));
function w(u) {
    return function(a, i) {
        let o = "", r = 0, e = 0;
        for(; (e = a.indexOf("&", e)) >= 0;){
            if (o += a.slice(r, e), r = e, e += 1, a.charCodeAt(e) === c2.NUM) {
                let x = e + 1, n = 10, s = a.charCodeAt(x);
                (s | c2.To_LOWER_BIT) === c2.LOWER_X && (n = 16, e += 1, x += 1);
                do s = a.charCodeAt(++e);
                while (s >= c2.ZERO && s <= c2.NINE || n === 16 && (s | c2.To_LOWER_BIT) >= c2.LOWER_A && (s | c2.To_LOWER_BIT) <= c2.LOWER_F)
                if (x !== e) {
                    let v = a.substring(x, e), L = parseInt(v, n);
                    if (a.charCodeAt(e) === c2.SEMI) e += 1;
                    else if (i) continue;
                    o += m1(L), r = e;
                }
                continue;
            }
            let f = 0, d = 1, t = 0, p = u[t];
            for(; e < a.length && (t = T1(u, p, t + 1, a.charCodeAt(e)), !(t < 0)); e++, d++){
                p = u[t];
                let x1 = p & l.VALUE_LENGTH;
                if (x1) {
                    (!i || a.charCodeAt(e) === c2.SEMI) && (f = t, d = 0);
                    let n1 = (x1 >> 14) - 1;
                    if (n1 === 0) break;
                    t += n1;
                }
            }
            if (f !== 0) {
                let x2 = (u[f] & l.VALUE_LENGTH) >> 14;
                o += x2 === 1 ? String.fromCharCode(u[f] & ~l.VALUE_LENGTH) : x2 === 2 ? String.fromCharCode(u[f + 1]) : String.fromCharCode(u[f + 1], u[f + 2]), r = e - d + 1;
            }
        }
        return o + a.slice(r);
    };
}
function T1(u, b, a, i) {
    let o = (b & l.BRANCH_LENGTH) >> 7, r = b & l.JUMP_TABLE;
    if (o === 0) return r !== 0 && i === r ? a : -1;
    if (r) {
        let d = i - r;
        return d < 0 || d >= o ? -1 : u[a + d] - 1;
    }
    let e = a, f = e + o - 1;
    for(; e <= f;){
        let d1 = e + f >>> 1, t = u[d1];
        if (t < i) e = d1 + 1;
        else if (t > i) f = d1 - 1;
        else return u[d1 + o];
    }
    return -1;
}
w(h1), w(y);
var p2 = /["&'<>$\x80-\uFFFF]/g, a2 = new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        39,
        "&apos;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ]
]), l1 = String.prototype.codePointAt != null ? (e, t)=>e.codePointAt(t) : (e, t)=>(e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t);
function u1(e) {
    let t = "", c = 0, r;
    for(; (r = p2.exec(e)) !== null;){
        let n = r.index, o = e.charCodeAt(n), s = a2.get(o);
        s !== void 0 ? (t += e.substring(c, n) + s, c = n + 1) : (t += `${e.substring(c, n)}&#x${l1(e, n).toString(16)};`, c = p2.lastIndex += Number((o & 64512) === 55296));
    }
    return t + e.substr(c);
}
function x2(e, t) {
    return function(r) {
        let n, o = 0, s = "";
        for(; n = e.exec(r);)o !== n.index && (s += r.substring(o, n.index)), s += t.get(n[0].charCodeAt(0)), o = n.index + 1;
        return s + r.substring(o);
    };
}
var d1 = x2(/[&<>'"]/g, a2), g1 = x2(/["&\u00A0]/g, new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        160,
        "&nbsp;"
    ]
])), h2 = x2(/[&<>\u00A0]/g, new Map([
    [
        38,
        "&amp;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
function u2(r) {
    for(let e = 1; e < r.length; e++)r[e][0] += r[e - 1][0] + 1;
    return r;
}
new Map(u2([
    [
        9,
        "&Tab;"
    ],
    [
        0,
        "&NewLine;"
    ],
    [
        22,
        "&excl;"
    ],
    [
        0,
        "&quot;"
    ],
    [
        0,
        "&num;"
    ],
    [
        0,
        "&dollar;"
    ],
    [
        0,
        "&percnt;"
    ],
    [
        0,
        "&amp;"
    ],
    [
        0,
        "&apos;"
    ],
    [
        0,
        "&lpar;"
    ],
    [
        0,
        "&rpar;"
    ],
    [
        0,
        "&ast;"
    ],
    [
        0,
        "&plus;"
    ],
    [
        0,
        "&comma;"
    ],
    [
        1,
        "&period;"
    ],
    [
        0,
        "&sol;"
    ],
    [
        10,
        "&colon;"
    ],
    [
        0,
        "&semi;"
    ],
    [
        0,
        {
            v: "&lt;",
            n: 8402,
            o: "&nvlt;"
        }
    ],
    [
        0,
        {
            v: "&equals;",
            n: 8421,
            o: "&bne;"
        }
    ],
    [
        0,
        {
            v: "&gt;",
            n: 8402,
            o: "&nvgt;"
        }
    ],
    [
        0,
        "&quest;"
    ],
    [
        0,
        "&commat;"
    ],
    [
        26,
        "&lbrack;"
    ],
    [
        0,
        "&bsol;"
    ],
    [
        0,
        "&rbrack;"
    ],
    [
        0,
        "&Hat;"
    ],
    [
        0,
        "&lowbar;"
    ],
    [
        0,
        "&DiacriticalGrave;"
    ],
    [
        5,
        {
            n: 106,
            o: "&fjlig;"
        }
    ],
    [
        20,
        "&lbrace;"
    ],
    [
        0,
        "&verbar;"
    ],
    [
        0,
        "&rbrace;"
    ],
    [
        34,
        "&nbsp;"
    ],
    [
        0,
        "&iexcl;"
    ],
    [
        0,
        "&cent;"
    ],
    [
        0,
        "&pound;"
    ],
    [
        0,
        "&curren;"
    ],
    [
        0,
        "&yen;"
    ],
    [
        0,
        "&brvbar;"
    ],
    [
        0,
        "&sect;"
    ],
    [
        0,
        "&die;"
    ],
    [
        0,
        "&copy;"
    ],
    [
        0,
        "&ordf;"
    ],
    [
        0,
        "&laquo;"
    ],
    [
        0,
        "&not;"
    ],
    [
        0,
        "&shy;"
    ],
    [
        0,
        "&circledR;"
    ],
    [
        0,
        "&macr;"
    ],
    [
        0,
        "&deg;"
    ],
    [
        0,
        "&PlusMinus;"
    ],
    [
        0,
        "&sup2;"
    ],
    [
        0,
        "&sup3;"
    ],
    [
        0,
        "&acute;"
    ],
    [
        0,
        "&micro;"
    ],
    [
        0,
        "&para;"
    ],
    [
        0,
        "&centerdot;"
    ],
    [
        0,
        "&cedil;"
    ],
    [
        0,
        "&sup1;"
    ],
    [
        0,
        "&ordm;"
    ],
    [
        0,
        "&raquo;"
    ],
    [
        0,
        "&frac14;"
    ],
    [
        0,
        "&frac12;"
    ],
    [
        0,
        "&frac34;"
    ],
    [
        0,
        "&iquest;"
    ],
    [
        0,
        "&Agrave;"
    ],
    [
        0,
        "&Aacute;"
    ],
    [
        0,
        "&Acirc;"
    ],
    [
        0,
        "&Atilde;"
    ],
    [
        0,
        "&Auml;"
    ],
    [
        0,
        "&angst;"
    ],
    [
        0,
        "&AElig;"
    ],
    [
        0,
        "&Ccedil;"
    ],
    [
        0,
        "&Egrave;"
    ],
    [
        0,
        "&Eacute;"
    ],
    [
        0,
        "&Ecirc;"
    ],
    [
        0,
        "&Euml;"
    ],
    [
        0,
        "&Igrave;"
    ],
    [
        0,
        "&Iacute;"
    ],
    [
        0,
        "&Icirc;"
    ],
    [
        0,
        "&Iuml;"
    ],
    [
        0,
        "&ETH;"
    ],
    [
        0,
        "&Ntilde;"
    ],
    [
        0,
        "&Ograve;"
    ],
    [
        0,
        "&Oacute;"
    ],
    [
        0,
        "&Ocirc;"
    ],
    [
        0,
        "&Otilde;"
    ],
    [
        0,
        "&Ouml;"
    ],
    [
        0,
        "&times;"
    ],
    [
        0,
        "&Oslash;"
    ],
    [
        0,
        "&Ugrave;"
    ],
    [
        0,
        "&Uacute;"
    ],
    [
        0,
        "&Ucirc;"
    ],
    [
        0,
        "&Uuml;"
    ],
    [
        0,
        "&Yacute;"
    ],
    [
        0,
        "&THORN;"
    ],
    [
        0,
        "&szlig;"
    ],
    [
        0,
        "&agrave;"
    ],
    [
        0,
        "&aacute;"
    ],
    [
        0,
        "&acirc;"
    ],
    [
        0,
        "&atilde;"
    ],
    [
        0,
        "&auml;"
    ],
    [
        0,
        "&aring;"
    ],
    [
        0,
        "&aelig;"
    ],
    [
        0,
        "&ccedil;"
    ],
    [
        0,
        "&egrave;"
    ],
    [
        0,
        "&eacute;"
    ],
    [
        0,
        "&ecirc;"
    ],
    [
        0,
        "&euml;"
    ],
    [
        0,
        "&igrave;"
    ],
    [
        0,
        "&iacute;"
    ],
    [
        0,
        "&icirc;"
    ],
    [
        0,
        "&iuml;"
    ],
    [
        0,
        "&eth;"
    ],
    [
        0,
        "&ntilde;"
    ],
    [
        0,
        "&ograve;"
    ],
    [
        0,
        "&oacute;"
    ],
    [
        0,
        "&ocirc;"
    ],
    [
        0,
        "&otilde;"
    ],
    [
        0,
        "&ouml;"
    ],
    [
        0,
        "&div;"
    ],
    [
        0,
        "&oslash;"
    ],
    [
        0,
        "&ugrave;"
    ],
    [
        0,
        "&uacute;"
    ],
    [
        0,
        "&ucirc;"
    ],
    [
        0,
        "&uuml;"
    ],
    [
        0,
        "&yacute;"
    ],
    [
        0,
        "&thorn;"
    ],
    [
        0,
        "&yuml;"
    ],
    [
        0,
        "&Amacr;"
    ],
    [
        0,
        "&amacr;"
    ],
    [
        0,
        "&Abreve;"
    ],
    [
        0,
        "&abreve;"
    ],
    [
        0,
        "&Aogon;"
    ],
    [
        0,
        "&aogon;"
    ],
    [
        0,
        "&Cacute;"
    ],
    [
        0,
        "&cacute;"
    ],
    [
        0,
        "&Ccirc;"
    ],
    [
        0,
        "&ccirc;"
    ],
    [
        0,
        "&Cdot;"
    ],
    [
        0,
        "&cdot;"
    ],
    [
        0,
        "&Ccaron;"
    ],
    [
        0,
        "&ccaron;"
    ],
    [
        0,
        "&Dcaron;"
    ],
    [
        0,
        "&dcaron;"
    ],
    [
        0,
        "&Dstrok;"
    ],
    [
        0,
        "&dstrok;"
    ],
    [
        0,
        "&Emacr;"
    ],
    [
        0,
        "&emacr;"
    ],
    [
        2,
        "&Edot;"
    ],
    [
        0,
        "&edot;"
    ],
    [
        0,
        "&Eogon;"
    ],
    [
        0,
        "&eogon;"
    ],
    [
        0,
        "&Ecaron;"
    ],
    [
        0,
        "&ecaron;"
    ],
    [
        0,
        "&Gcirc;"
    ],
    [
        0,
        "&gcirc;"
    ],
    [
        0,
        "&Gbreve;"
    ],
    [
        0,
        "&gbreve;"
    ],
    [
        0,
        "&Gdot;"
    ],
    [
        0,
        "&gdot;"
    ],
    [
        0,
        "&Gcedil;"
    ],
    [
        1,
        "&Hcirc;"
    ],
    [
        0,
        "&hcirc;"
    ],
    [
        0,
        "&Hstrok;"
    ],
    [
        0,
        "&hstrok;"
    ],
    [
        0,
        "&Itilde;"
    ],
    [
        0,
        "&itilde;"
    ],
    [
        0,
        "&Imacr;"
    ],
    [
        0,
        "&imacr;"
    ],
    [
        2,
        "&Iogon;"
    ],
    [
        0,
        "&iogon;"
    ],
    [
        0,
        "&Idot;"
    ],
    [
        0,
        "&imath;"
    ],
    [
        0,
        "&IJlig;"
    ],
    [
        0,
        "&ijlig;"
    ],
    [
        0,
        "&Jcirc;"
    ],
    [
        0,
        "&jcirc;"
    ],
    [
        0,
        "&Kcedil;"
    ],
    [
        0,
        "&kcedil;"
    ],
    [
        0,
        "&kgreen;"
    ],
    [
        0,
        "&Lacute;"
    ],
    [
        0,
        "&lacute;"
    ],
    [
        0,
        "&Lcedil;"
    ],
    [
        0,
        "&lcedil;"
    ],
    [
        0,
        "&Lcaron;"
    ],
    [
        0,
        "&lcaron;"
    ],
    [
        0,
        "&Lmidot;"
    ],
    [
        0,
        "&lmidot;"
    ],
    [
        0,
        "&Lstrok;"
    ],
    [
        0,
        "&lstrok;"
    ],
    [
        0,
        "&Nacute;"
    ],
    [
        0,
        "&nacute;"
    ],
    [
        0,
        "&Ncedil;"
    ],
    [
        0,
        "&ncedil;"
    ],
    [
        0,
        "&Ncaron;"
    ],
    [
        0,
        "&ncaron;"
    ],
    [
        0,
        "&napos;"
    ],
    [
        0,
        "&ENG;"
    ],
    [
        0,
        "&eng;"
    ],
    [
        0,
        "&Omacr;"
    ],
    [
        0,
        "&omacr;"
    ],
    [
        2,
        "&Odblac;"
    ],
    [
        0,
        "&odblac;"
    ],
    [
        0,
        "&OElig;"
    ],
    [
        0,
        "&oelig;"
    ],
    [
        0,
        "&Racute;"
    ],
    [
        0,
        "&racute;"
    ],
    [
        0,
        "&Rcedil;"
    ],
    [
        0,
        "&rcedil;"
    ],
    [
        0,
        "&Rcaron;"
    ],
    [
        0,
        "&rcaron;"
    ],
    [
        0,
        "&Sacute;"
    ],
    [
        0,
        "&sacute;"
    ],
    [
        0,
        "&Scirc;"
    ],
    [
        0,
        "&scirc;"
    ],
    [
        0,
        "&Scedil;"
    ],
    [
        0,
        "&scedil;"
    ],
    [
        0,
        "&Scaron;"
    ],
    [
        0,
        "&scaron;"
    ],
    [
        0,
        "&Tcedil;"
    ],
    [
        0,
        "&tcedil;"
    ],
    [
        0,
        "&Tcaron;"
    ],
    [
        0,
        "&tcaron;"
    ],
    [
        0,
        "&Tstrok;"
    ],
    [
        0,
        "&tstrok;"
    ],
    [
        0,
        "&Utilde;"
    ],
    [
        0,
        "&utilde;"
    ],
    [
        0,
        "&Umacr;"
    ],
    [
        0,
        "&umacr;"
    ],
    [
        0,
        "&Ubreve;"
    ],
    [
        0,
        "&ubreve;"
    ],
    [
        0,
        "&Uring;"
    ],
    [
        0,
        "&uring;"
    ],
    [
        0,
        "&Udblac;"
    ],
    [
        0,
        "&udblac;"
    ],
    [
        0,
        "&Uogon;"
    ],
    [
        0,
        "&uogon;"
    ],
    [
        0,
        "&Wcirc;"
    ],
    [
        0,
        "&wcirc;"
    ],
    [
        0,
        "&Ycirc;"
    ],
    [
        0,
        "&ycirc;"
    ],
    [
        0,
        "&Yuml;"
    ],
    [
        0,
        "&Zacute;"
    ],
    [
        0,
        "&zacute;"
    ],
    [
        0,
        "&Zdot;"
    ],
    [
        0,
        "&zdot;"
    ],
    [
        0,
        "&Zcaron;"
    ],
    [
        0,
        "&zcaron;"
    ],
    [
        19,
        "&fnof;"
    ],
    [
        34,
        "&imped;"
    ],
    [
        63,
        "&gacute;"
    ],
    [
        65,
        "&jmath;"
    ],
    [
        142,
        "&circ;"
    ],
    [
        0,
        "&caron;"
    ],
    [
        16,
        "&breve;"
    ],
    [
        0,
        "&DiacriticalDot;"
    ],
    [
        0,
        "&ring;"
    ],
    [
        0,
        "&ogon;"
    ],
    [
        0,
        "&DiacriticalTilde;"
    ],
    [
        0,
        "&dblac;"
    ],
    [
        51,
        "&DownBreve;"
    ],
    [
        127,
        "&Alpha;"
    ],
    [
        0,
        "&Beta;"
    ],
    [
        0,
        "&Gamma;"
    ],
    [
        0,
        "&Delta;"
    ],
    [
        0,
        "&Epsilon;"
    ],
    [
        0,
        "&Zeta;"
    ],
    [
        0,
        "&Eta;"
    ],
    [
        0,
        "&Theta;"
    ],
    [
        0,
        "&Iota;"
    ],
    [
        0,
        "&Kappa;"
    ],
    [
        0,
        "&Lambda;"
    ],
    [
        0,
        "&Mu;"
    ],
    [
        0,
        "&Nu;"
    ],
    [
        0,
        "&Xi;"
    ],
    [
        0,
        "&Omicron;"
    ],
    [
        0,
        "&Pi;"
    ],
    [
        0,
        "&Rho;"
    ],
    [
        1,
        "&Sigma;"
    ],
    [
        0,
        "&Tau;"
    ],
    [
        0,
        "&Upsilon;"
    ],
    [
        0,
        "&Phi;"
    ],
    [
        0,
        "&Chi;"
    ],
    [
        0,
        "&Psi;"
    ],
    [
        0,
        "&ohm;"
    ],
    [
        7,
        "&alpha;"
    ],
    [
        0,
        "&beta;"
    ],
    [
        0,
        "&gamma;"
    ],
    [
        0,
        "&delta;"
    ],
    [
        0,
        "&epsi;"
    ],
    [
        0,
        "&zeta;"
    ],
    [
        0,
        "&eta;"
    ],
    [
        0,
        "&theta;"
    ],
    [
        0,
        "&iota;"
    ],
    [
        0,
        "&kappa;"
    ],
    [
        0,
        "&lambda;"
    ],
    [
        0,
        "&mu;"
    ],
    [
        0,
        "&nu;"
    ],
    [
        0,
        "&xi;"
    ],
    [
        0,
        "&omicron;"
    ],
    [
        0,
        "&pi;"
    ],
    [
        0,
        "&rho;"
    ],
    [
        0,
        "&sigmaf;"
    ],
    [
        0,
        "&sigma;"
    ],
    [
        0,
        "&tau;"
    ],
    [
        0,
        "&upsi;"
    ],
    [
        0,
        "&phi;"
    ],
    [
        0,
        "&chi;"
    ],
    [
        0,
        "&psi;"
    ],
    [
        0,
        "&omega;"
    ],
    [
        7,
        "&thetasym;"
    ],
    [
        0,
        "&Upsi;"
    ],
    [
        2,
        "&phiv;"
    ],
    [
        0,
        "&piv;"
    ],
    [
        5,
        "&Gammad;"
    ],
    [
        0,
        "&digamma;"
    ],
    [
        18,
        "&kappav;"
    ],
    [
        0,
        "&rhov;"
    ],
    [
        3,
        "&epsiv;"
    ],
    [
        0,
        "&backepsilon;"
    ],
    [
        10,
        "&IOcy;"
    ],
    [
        0,
        "&DJcy;"
    ],
    [
        0,
        "&GJcy;"
    ],
    [
        0,
        "&Jukcy;"
    ],
    [
        0,
        "&DScy;"
    ],
    [
        0,
        "&Iukcy;"
    ],
    [
        0,
        "&YIcy;"
    ],
    [
        0,
        "&Jsercy;"
    ],
    [
        0,
        "&LJcy;"
    ],
    [
        0,
        "&NJcy;"
    ],
    [
        0,
        "&TSHcy;"
    ],
    [
        0,
        "&KJcy;"
    ],
    [
        1,
        "&Ubrcy;"
    ],
    [
        0,
        "&DZcy;"
    ],
    [
        0,
        "&Acy;"
    ],
    [
        0,
        "&Bcy;"
    ],
    [
        0,
        "&Vcy;"
    ],
    [
        0,
        "&Gcy;"
    ],
    [
        0,
        "&Dcy;"
    ],
    [
        0,
        "&IEcy;"
    ],
    [
        0,
        "&ZHcy;"
    ],
    [
        0,
        "&Zcy;"
    ],
    [
        0,
        "&Icy;"
    ],
    [
        0,
        "&Jcy;"
    ],
    [
        0,
        "&Kcy;"
    ],
    [
        0,
        "&Lcy;"
    ],
    [
        0,
        "&Mcy;"
    ],
    [
        0,
        "&Ncy;"
    ],
    [
        0,
        "&Ocy;"
    ],
    [
        0,
        "&Pcy;"
    ],
    [
        0,
        "&Rcy;"
    ],
    [
        0,
        "&Scy;"
    ],
    [
        0,
        "&Tcy;"
    ],
    [
        0,
        "&Ucy;"
    ],
    [
        0,
        "&Fcy;"
    ],
    [
        0,
        "&KHcy;"
    ],
    [
        0,
        "&TScy;"
    ],
    [
        0,
        "&CHcy;"
    ],
    [
        0,
        "&SHcy;"
    ],
    [
        0,
        "&SHCHcy;"
    ],
    [
        0,
        "&HARDcy;"
    ],
    [
        0,
        "&Ycy;"
    ],
    [
        0,
        "&SOFTcy;"
    ],
    [
        0,
        "&Ecy;"
    ],
    [
        0,
        "&YUcy;"
    ],
    [
        0,
        "&YAcy;"
    ],
    [
        0,
        "&acy;"
    ],
    [
        0,
        "&bcy;"
    ],
    [
        0,
        "&vcy;"
    ],
    [
        0,
        "&gcy;"
    ],
    [
        0,
        "&dcy;"
    ],
    [
        0,
        "&iecy;"
    ],
    [
        0,
        "&zhcy;"
    ],
    [
        0,
        "&zcy;"
    ],
    [
        0,
        "&icy;"
    ],
    [
        0,
        "&jcy;"
    ],
    [
        0,
        "&kcy;"
    ],
    [
        0,
        "&lcy;"
    ],
    [
        0,
        "&mcy;"
    ],
    [
        0,
        "&ncy;"
    ],
    [
        0,
        "&ocy;"
    ],
    [
        0,
        "&pcy;"
    ],
    [
        0,
        "&rcy;"
    ],
    [
        0,
        "&scy;"
    ],
    [
        0,
        "&tcy;"
    ],
    [
        0,
        "&ucy;"
    ],
    [
        0,
        "&fcy;"
    ],
    [
        0,
        "&khcy;"
    ],
    [
        0,
        "&tscy;"
    ],
    [
        0,
        "&chcy;"
    ],
    [
        0,
        "&shcy;"
    ],
    [
        0,
        "&shchcy;"
    ],
    [
        0,
        "&hardcy;"
    ],
    [
        0,
        "&ycy;"
    ],
    [
        0,
        "&softcy;"
    ],
    [
        0,
        "&ecy;"
    ],
    [
        0,
        "&yucy;"
    ],
    [
        0,
        "&yacy;"
    ],
    [
        1,
        "&iocy;"
    ],
    [
        0,
        "&djcy;"
    ],
    [
        0,
        "&gjcy;"
    ],
    [
        0,
        "&jukcy;"
    ],
    [
        0,
        "&dscy;"
    ],
    [
        0,
        "&iukcy;"
    ],
    [
        0,
        "&yicy;"
    ],
    [
        0,
        "&jsercy;"
    ],
    [
        0,
        "&ljcy;"
    ],
    [
        0,
        "&njcy;"
    ],
    [
        0,
        "&tshcy;"
    ],
    [
        0,
        "&kjcy;"
    ],
    [
        1,
        "&ubrcy;"
    ],
    [
        0,
        "&dzcy;"
    ],
    [
        7074,
        "&ensp;"
    ],
    [
        0,
        "&emsp;"
    ],
    [
        0,
        "&emsp13;"
    ],
    [
        0,
        "&emsp14;"
    ],
    [
        1,
        "&numsp;"
    ],
    [
        0,
        "&puncsp;"
    ],
    [
        0,
        "&ThinSpace;"
    ],
    [
        0,
        "&hairsp;"
    ],
    [
        0,
        "&NegativeMediumSpace;"
    ],
    [
        0,
        "&zwnj;"
    ],
    [
        0,
        "&zwj;"
    ],
    [
        0,
        "&lrm;"
    ],
    [
        0,
        "&rlm;"
    ],
    [
        0,
        "&dash;"
    ],
    [
        2,
        "&ndash;"
    ],
    [
        0,
        "&mdash;"
    ],
    [
        0,
        "&horbar;"
    ],
    [
        0,
        "&Verbar;"
    ],
    [
        1,
        "&lsquo;"
    ],
    [
        0,
        "&CloseCurlyQuote;"
    ],
    [
        0,
        "&lsquor;"
    ],
    [
        1,
        "&ldquo;"
    ],
    [
        0,
        "&CloseCurlyDoubleQuote;"
    ],
    [
        0,
        "&bdquo;"
    ],
    [
        1,
        "&dagger;"
    ],
    [
        0,
        "&Dagger;"
    ],
    [
        0,
        "&bull;"
    ],
    [
        2,
        "&nldr;"
    ],
    [
        0,
        "&hellip;"
    ],
    [
        9,
        "&permil;"
    ],
    [
        0,
        "&pertenk;"
    ],
    [
        0,
        "&prime;"
    ],
    [
        0,
        "&Prime;"
    ],
    [
        0,
        "&tprime;"
    ],
    [
        0,
        "&backprime;"
    ],
    [
        3,
        "&lsaquo;"
    ],
    [
        0,
        "&rsaquo;"
    ],
    [
        3,
        "&oline;"
    ],
    [
        2,
        "&caret;"
    ],
    [
        1,
        "&hybull;"
    ],
    [
        0,
        "&frasl;"
    ],
    [
        10,
        "&bsemi;"
    ],
    [
        7,
        "&qprime;"
    ],
    [
        7,
        {
            v: "&MediumSpace;",
            n: 8202,
            o: "&ThickSpace;"
        }
    ],
    [
        0,
        "&NoBreak;"
    ],
    [
        0,
        "&af;"
    ],
    [
        0,
        "&InvisibleTimes;"
    ],
    [
        0,
        "&ic;"
    ],
    [
        72,
        "&euro;"
    ],
    [
        46,
        "&tdot;"
    ],
    [
        0,
        "&DotDot;"
    ],
    [
        37,
        "&complexes;"
    ],
    [
        2,
        "&incare;"
    ],
    [
        4,
        "&gscr;"
    ],
    [
        0,
        "&hamilt;"
    ],
    [
        0,
        "&Hfr;"
    ],
    [
        0,
        "&Hopf;"
    ],
    [
        0,
        "&planckh;"
    ],
    [
        0,
        "&hbar;"
    ],
    [
        0,
        "&imagline;"
    ],
    [
        0,
        "&Ifr;"
    ],
    [
        0,
        "&lagran;"
    ],
    [
        0,
        "&ell;"
    ],
    [
        1,
        "&naturals;"
    ],
    [
        0,
        "&numero;"
    ],
    [
        0,
        "&copysr;"
    ],
    [
        0,
        "&weierp;"
    ],
    [
        0,
        "&Popf;"
    ],
    [
        0,
        "&Qopf;"
    ],
    [
        0,
        "&realine;"
    ],
    [
        0,
        "&real;"
    ],
    [
        0,
        "&reals;"
    ],
    [
        0,
        "&rx;"
    ],
    [
        3,
        "&trade;"
    ],
    [
        1,
        "&integers;"
    ],
    [
        2,
        "&mho;"
    ],
    [
        0,
        "&zeetrf;"
    ],
    [
        0,
        "&iiota;"
    ],
    [
        2,
        "&bernou;"
    ],
    [
        0,
        "&Cayleys;"
    ],
    [
        1,
        "&escr;"
    ],
    [
        0,
        "&Escr;"
    ],
    [
        0,
        "&Fouriertrf;"
    ],
    [
        1,
        "&Mellintrf;"
    ],
    [
        0,
        "&order;"
    ],
    [
        0,
        "&alefsym;"
    ],
    [
        0,
        "&beth;"
    ],
    [
        0,
        "&gimel;"
    ],
    [
        0,
        "&daleth;"
    ],
    [
        12,
        "&CapitalDifferentialD;"
    ],
    [
        0,
        "&dd;"
    ],
    [
        0,
        "&ee;"
    ],
    [
        0,
        "&ii;"
    ],
    [
        10,
        "&frac13;"
    ],
    [
        0,
        "&frac23;"
    ],
    [
        0,
        "&frac15;"
    ],
    [
        0,
        "&frac25;"
    ],
    [
        0,
        "&frac35;"
    ],
    [
        0,
        "&frac45;"
    ],
    [
        0,
        "&frac16;"
    ],
    [
        0,
        "&frac56;"
    ],
    [
        0,
        "&frac18;"
    ],
    [
        0,
        "&frac38;"
    ],
    [
        0,
        "&frac58;"
    ],
    [
        0,
        "&frac78;"
    ],
    [
        49,
        "&larr;"
    ],
    [
        0,
        "&ShortUpArrow;"
    ],
    [
        0,
        "&rarr;"
    ],
    [
        0,
        "&darr;"
    ],
    [
        0,
        "&harr;"
    ],
    [
        0,
        "&updownarrow;"
    ],
    [
        0,
        "&nwarr;"
    ],
    [
        0,
        "&nearr;"
    ],
    [
        0,
        "&LowerRightArrow;"
    ],
    [
        0,
        "&LowerLeftArrow;"
    ],
    [
        0,
        "&nlarr;"
    ],
    [
        0,
        "&nrarr;"
    ],
    [
        1,
        {
            v: "&rarrw;",
            n: 824,
            o: "&nrarrw;"
        }
    ],
    [
        0,
        "&Larr;"
    ],
    [
        0,
        "&Uarr;"
    ],
    [
        0,
        "&Rarr;"
    ],
    [
        0,
        "&Darr;"
    ],
    [
        0,
        "&larrtl;"
    ],
    [
        0,
        "&rarrtl;"
    ],
    [
        0,
        "&LeftTeeArrow;"
    ],
    [
        0,
        "&mapstoup;"
    ],
    [
        0,
        "&map;"
    ],
    [
        0,
        "&DownTeeArrow;"
    ],
    [
        1,
        "&hookleftarrow;"
    ],
    [
        0,
        "&hookrightarrow;"
    ],
    [
        0,
        "&larrlp;"
    ],
    [
        0,
        "&looparrowright;"
    ],
    [
        0,
        "&harrw;"
    ],
    [
        0,
        "&nharr;"
    ],
    [
        1,
        "&lsh;"
    ],
    [
        0,
        "&rsh;"
    ],
    [
        0,
        "&ldsh;"
    ],
    [
        0,
        "&rdsh;"
    ],
    [
        1,
        "&crarr;"
    ],
    [
        0,
        "&cularr;"
    ],
    [
        0,
        "&curarr;"
    ],
    [
        2,
        "&circlearrowleft;"
    ],
    [
        0,
        "&circlearrowright;"
    ],
    [
        0,
        "&leftharpoonup;"
    ],
    [
        0,
        "&DownLeftVector;"
    ],
    [
        0,
        "&RightUpVector;"
    ],
    [
        0,
        "&LeftUpVector;"
    ],
    [
        0,
        "&rharu;"
    ],
    [
        0,
        "&DownRightVector;"
    ],
    [
        0,
        "&dharr;"
    ],
    [
        0,
        "&dharl;"
    ],
    [
        0,
        "&RightArrowLeftArrow;"
    ],
    [
        0,
        "&udarr;"
    ],
    [
        0,
        "&LeftArrowRightArrow;"
    ],
    [
        0,
        "&leftleftarrows;"
    ],
    [
        0,
        "&upuparrows;"
    ],
    [
        0,
        "&rightrightarrows;"
    ],
    [
        0,
        "&ddarr;"
    ],
    [
        0,
        "&leftrightharpoons;"
    ],
    [
        0,
        "&Equilibrium;"
    ],
    [
        0,
        "&nlArr;"
    ],
    [
        0,
        "&nhArr;"
    ],
    [
        0,
        "&nrArr;"
    ],
    [
        0,
        "&DoubleLeftArrow;"
    ],
    [
        0,
        "&DoubleUpArrow;"
    ],
    [
        0,
        "&DoubleRightArrow;"
    ],
    [
        0,
        "&dArr;"
    ],
    [
        0,
        "&DoubleLeftRightArrow;"
    ],
    [
        0,
        "&DoubleUpDownArrow;"
    ],
    [
        0,
        "&nwArr;"
    ],
    [
        0,
        "&neArr;"
    ],
    [
        0,
        "&seArr;"
    ],
    [
        0,
        "&swArr;"
    ],
    [
        0,
        "&lAarr;"
    ],
    [
        0,
        "&rAarr;"
    ],
    [
        1,
        "&zigrarr;"
    ],
    [
        6,
        "&larrb;"
    ],
    [
        0,
        "&rarrb;"
    ],
    [
        15,
        "&DownArrowUpArrow;"
    ],
    [
        7,
        "&loarr;"
    ],
    [
        0,
        "&roarr;"
    ],
    [
        0,
        "&hoarr;"
    ],
    [
        0,
        "&forall;"
    ],
    [
        0,
        "&comp;"
    ],
    [
        0,
        {
            v: "&part;",
            n: 824,
            o: "&npart;"
        }
    ],
    [
        0,
        "&exist;"
    ],
    [
        0,
        "&nexist;"
    ],
    [
        0,
        "&empty;"
    ],
    [
        1,
        "&Del;"
    ],
    [
        0,
        "&Element;"
    ],
    [
        0,
        "&NotElement;"
    ],
    [
        1,
        "&ni;"
    ],
    [
        0,
        "&notni;"
    ],
    [
        2,
        "&prod;"
    ],
    [
        0,
        "&coprod;"
    ],
    [
        0,
        "&sum;"
    ],
    [
        0,
        "&minus;"
    ],
    [
        0,
        "&MinusPlus;"
    ],
    [
        0,
        "&dotplus;"
    ],
    [
        1,
        "&Backslash;"
    ],
    [
        0,
        "&lowast;"
    ],
    [
        0,
        "&compfn;"
    ],
    [
        1,
        "&radic;"
    ],
    [
        2,
        "&prop;"
    ],
    [
        0,
        "&infin;"
    ],
    [
        0,
        "&angrt;"
    ],
    [
        0,
        {
            v: "&ang;",
            n: 8402,
            o: "&nang;"
        }
    ],
    [
        0,
        "&angmsd;"
    ],
    [
        0,
        "&angsph;"
    ],
    [
        0,
        "&mid;"
    ],
    [
        0,
        "&nmid;"
    ],
    [
        0,
        "&DoubleVerticalBar;"
    ],
    [
        0,
        "&NotDoubleVerticalBar;"
    ],
    [
        0,
        "&and;"
    ],
    [
        0,
        "&or;"
    ],
    [
        0,
        {
            v: "&cap;",
            n: 65024,
            o: "&caps;"
        }
    ],
    [
        0,
        {
            v: "&cup;",
            n: 65024,
            o: "&cups;"
        }
    ],
    [
        0,
        "&int;"
    ],
    [
        0,
        "&Int;"
    ],
    [
        0,
        "&iiint;"
    ],
    [
        0,
        "&conint;"
    ],
    [
        0,
        "&Conint;"
    ],
    [
        0,
        "&Cconint;"
    ],
    [
        0,
        "&cwint;"
    ],
    [
        0,
        "&ClockwiseContourIntegral;"
    ],
    [
        0,
        "&awconint;"
    ],
    [
        0,
        "&there4;"
    ],
    [
        0,
        "&becaus;"
    ],
    [
        0,
        "&ratio;"
    ],
    [
        0,
        "&Colon;"
    ],
    [
        0,
        "&dotminus;"
    ],
    [
        1,
        "&mDDot;"
    ],
    [
        0,
        "&homtht;"
    ],
    [
        0,
        {
            v: "&sim;",
            n: 8402,
            o: "&nvsim;"
        }
    ],
    [
        0,
        {
            v: "&backsim;",
            n: 817,
            o: "&race;"
        }
    ],
    [
        0,
        {
            v: "&ac;",
            n: 819,
            o: "&acE;"
        }
    ],
    [
        0,
        "&acd;"
    ],
    [
        0,
        "&VerticalTilde;"
    ],
    [
        0,
        "&NotTilde;"
    ],
    [
        0,
        {
            v: "&eqsim;",
            n: 824,
            o: "&nesim;"
        }
    ],
    [
        0,
        "&sime;"
    ],
    [
        0,
        "&NotTildeEqual;"
    ],
    [
        0,
        "&cong;"
    ],
    [
        0,
        "&simne;"
    ],
    [
        0,
        "&ncong;"
    ],
    [
        0,
        "&ap;"
    ],
    [
        0,
        "&nap;"
    ],
    [
        0,
        "&ape;"
    ],
    [
        0,
        {
            v: "&apid;",
            n: 824,
            o: "&napid;"
        }
    ],
    [
        0,
        "&backcong;"
    ],
    [
        0,
        {
            v: "&asympeq;",
            n: 8402,
            o: "&nvap;"
        }
    ],
    [
        0,
        {
            v: "&bump;",
            n: 824,
            o: "&nbump;"
        }
    ],
    [
        0,
        {
            v: "&bumpe;",
            n: 824,
            o: "&nbumpe;"
        }
    ],
    [
        0,
        {
            v: "&doteq;",
            n: 824,
            o: "&nedot;"
        }
    ],
    [
        0,
        "&doteqdot;"
    ],
    [
        0,
        "&efDot;"
    ],
    [
        0,
        "&erDot;"
    ],
    [
        0,
        "&Assign;"
    ],
    [
        0,
        "&ecolon;"
    ],
    [
        0,
        "&ecir;"
    ],
    [
        0,
        "&circeq;"
    ],
    [
        1,
        "&wedgeq;"
    ],
    [
        0,
        "&veeeq;"
    ],
    [
        1,
        "&triangleq;"
    ],
    [
        2,
        "&equest;"
    ],
    [
        0,
        "&ne;"
    ],
    [
        0,
        {
            v: "&Congruent;",
            n: 8421,
            o: "&bnequiv;"
        }
    ],
    [
        0,
        "&nequiv;"
    ],
    [
        1,
        {
            v: "&le;",
            n: 8402,
            o: "&nvle;"
        }
    ],
    [
        0,
        {
            v: "&ge;",
            n: 8402,
            o: "&nvge;"
        }
    ],
    [
        0,
        {
            v: "&lE;",
            n: 824,
            o: "&nlE;"
        }
    ],
    [
        0,
        {
            v: "&gE;",
            n: 824,
            o: "&ngE;"
        }
    ],
    [
        0,
        {
            v: "&lnE;",
            n: 65024,
            o: "&lvertneqq;"
        }
    ],
    [
        0,
        {
            v: "&gnE;",
            n: 65024,
            o: "&gvertneqq;"
        }
    ],
    [
        0,
        {
            v: "&ll;",
            n: new Map(u2([
                [
                    824,
                    "&nLtv;"
                ],
                [
                    7577,
                    "&nLt;"
                ]
            ]))
        }
    ],
    [
        0,
        {
            v: "&gg;",
            n: new Map(u2([
                [
                    824,
                    "&nGtv;"
                ],
                [
                    7577,
                    "&nGt;"
                ]
            ]))
        }
    ],
    [
        0,
        "&between;"
    ],
    [
        0,
        "&NotCupCap;"
    ],
    [
        0,
        "&nless;"
    ],
    [
        0,
        "&ngt;"
    ],
    [
        0,
        "&nle;"
    ],
    [
        0,
        "&nge;"
    ],
    [
        0,
        "&lesssim;"
    ],
    [
        0,
        "&GreaterTilde;"
    ],
    [
        0,
        "&nlsim;"
    ],
    [
        0,
        "&ngsim;"
    ],
    [
        0,
        "&LessGreater;"
    ],
    [
        0,
        "&gl;"
    ],
    [
        0,
        "&NotLessGreater;"
    ],
    [
        0,
        "&NotGreaterLess;"
    ],
    [
        0,
        "&pr;"
    ],
    [
        0,
        "&sc;"
    ],
    [
        0,
        "&prcue;"
    ],
    [
        0,
        "&sccue;"
    ],
    [
        0,
        "&PrecedesTilde;"
    ],
    [
        0,
        {
            v: "&scsim;",
            n: 824,
            o: "&NotSucceedsTilde;"
        }
    ],
    [
        0,
        "&NotPrecedes;"
    ],
    [
        0,
        "&NotSucceeds;"
    ],
    [
        0,
        {
            v: "&sub;",
            n: 8402,
            o: "&NotSubset;"
        }
    ],
    [
        0,
        {
            v: "&sup;",
            n: 8402,
            o: "&NotSuperset;"
        }
    ],
    [
        0,
        "&nsub;"
    ],
    [
        0,
        "&nsup;"
    ],
    [
        0,
        "&sube;"
    ],
    [
        0,
        "&supe;"
    ],
    [
        0,
        "&NotSubsetEqual;"
    ],
    [
        0,
        "&NotSupersetEqual;"
    ],
    [
        0,
        {
            v: "&subne;",
            n: 65024,
            o: "&varsubsetneq;"
        }
    ],
    [
        0,
        {
            v: "&supne;",
            n: 65024,
            o: "&varsupsetneq;"
        }
    ],
    [
        1,
        "&cupdot;"
    ],
    [
        0,
        "&UnionPlus;"
    ],
    [
        0,
        {
            v: "&sqsub;",
            n: 824,
            o: "&NotSquareSubset;"
        }
    ],
    [
        0,
        {
            v: "&sqsup;",
            n: 824,
            o: "&NotSquareSuperset;"
        }
    ],
    [
        0,
        "&sqsube;"
    ],
    [
        0,
        "&sqsupe;"
    ],
    [
        0,
        {
            v: "&sqcap;",
            n: 65024,
            o: "&sqcaps;"
        }
    ],
    [
        0,
        {
            v: "&sqcup;",
            n: 65024,
            o: "&sqcups;"
        }
    ],
    [
        0,
        "&CirclePlus;"
    ],
    [
        0,
        "&CircleMinus;"
    ],
    [
        0,
        "&CircleTimes;"
    ],
    [
        0,
        "&osol;"
    ],
    [
        0,
        "&CircleDot;"
    ],
    [
        0,
        "&circledcirc;"
    ],
    [
        0,
        "&circledast;"
    ],
    [
        1,
        "&circleddash;"
    ],
    [
        0,
        "&boxplus;"
    ],
    [
        0,
        "&boxminus;"
    ],
    [
        0,
        "&boxtimes;"
    ],
    [
        0,
        "&dotsquare;"
    ],
    [
        0,
        "&RightTee;"
    ],
    [
        0,
        "&dashv;"
    ],
    [
        0,
        "&DownTee;"
    ],
    [
        0,
        "&bot;"
    ],
    [
        1,
        "&models;"
    ],
    [
        0,
        "&DoubleRightTee;"
    ],
    [
        0,
        "&Vdash;"
    ],
    [
        0,
        "&Vvdash;"
    ],
    [
        0,
        "&VDash;"
    ],
    [
        0,
        "&nvdash;"
    ],
    [
        0,
        "&nvDash;"
    ],
    [
        0,
        "&nVdash;"
    ],
    [
        0,
        "&nVDash;"
    ],
    [
        0,
        "&prurel;"
    ],
    [
        1,
        "&LeftTriangle;"
    ],
    [
        0,
        "&RightTriangle;"
    ],
    [
        0,
        {
            v: "&LeftTriangleEqual;",
            n: 8402,
            o: "&nvltrie;"
        }
    ],
    [
        0,
        {
            v: "&RightTriangleEqual;",
            n: 8402,
            o: "&nvrtrie;"
        }
    ],
    [
        0,
        "&origof;"
    ],
    [
        0,
        "&imof;"
    ],
    [
        0,
        "&multimap;"
    ],
    [
        0,
        "&hercon;"
    ],
    [
        0,
        "&intcal;"
    ],
    [
        0,
        "&veebar;"
    ],
    [
        1,
        "&barvee;"
    ],
    [
        0,
        "&angrtvb;"
    ],
    [
        0,
        "&lrtri;"
    ],
    [
        0,
        "&bigwedge;"
    ],
    [
        0,
        "&bigvee;"
    ],
    [
        0,
        "&bigcap;"
    ],
    [
        0,
        "&bigcup;"
    ],
    [
        0,
        "&diam;"
    ],
    [
        0,
        "&sdot;"
    ],
    [
        0,
        "&sstarf;"
    ],
    [
        0,
        "&divideontimes;"
    ],
    [
        0,
        "&bowtie;"
    ],
    [
        0,
        "&ltimes;"
    ],
    [
        0,
        "&rtimes;"
    ],
    [
        0,
        "&leftthreetimes;"
    ],
    [
        0,
        "&rightthreetimes;"
    ],
    [
        0,
        "&backsimeq;"
    ],
    [
        0,
        "&curlyvee;"
    ],
    [
        0,
        "&curlywedge;"
    ],
    [
        0,
        "&Sub;"
    ],
    [
        0,
        "&Sup;"
    ],
    [
        0,
        "&Cap;"
    ],
    [
        0,
        "&Cup;"
    ],
    [
        0,
        "&fork;"
    ],
    [
        0,
        "&epar;"
    ],
    [
        0,
        "&lessdot;"
    ],
    [
        0,
        "&gtdot;"
    ],
    [
        0,
        {
            v: "&Ll;",
            n: 824,
            o: "&nLl;"
        }
    ],
    [
        0,
        {
            v: "&Gg;",
            n: 824,
            o: "&nGg;"
        }
    ],
    [
        0,
        {
            v: "&leg;",
            n: 65024,
            o: "&lesg;"
        }
    ],
    [
        0,
        {
            v: "&gel;",
            n: 65024,
            o: "&gesl;"
        }
    ],
    [
        2,
        "&cuepr;"
    ],
    [
        0,
        "&cuesc;"
    ],
    [
        0,
        "&NotPrecedesSlantEqual;"
    ],
    [
        0,
        "&NotSucceedsSlantEqual;"
    ],
    [
        0,
        "&NotSquareSubsetEqual;"
    ],
    [
        0,
        "&NotSquareSupersetEqual;"
    ],
    [
        2,
        "&lnsim;"
    ],
    [
        0,
        "&gnsim;"
    ],
    [
        0,
        "&precnsim;"
    ],
    [
        0,
        "&scnsim;"
    ],
    [
        0,
        "&nltri;"
    ],
    [
        0,
        "&NotRightTriangle;"
    ],
    [
        0,
        "&nltrie;"
    ],
    [
        0,
        "&NotRightTriangleEqual;"
    ],
    [
        0,
        "&vellip;"
    ],
    [
        0,
        "&ctdot;"
    ],
    [
        0,
        "&utdot;"
    ],
    [
        0,
        "&dtdot;"
    ],
    [
        0,
        "&disin;"
    ],
    [
        0,
        "&isinsv;"
    ],
    [
        0,
        "&isins;"
    ],
    [
        0,
        {
            v: "&isindot;",
            n: 824,
            o: "&notindot;"
        }
    ],
    [
        0,
        "&notinvc;"
    ],
    [
        0,
        "&notinvb;"
    ],
    [
        1,
        {
            v: "&isinE;",
            n: 824,
            o: "&notinE;"
        }
    ],
    [
        0,
        "&nisd;"
    ],
    [
        0,
        "&xnis;"
    ],
    [
        0,
        "&nis;"
    ],
    [
        0,
        "&notnivc;"
    ],
    [
        0,
        "&notnivb;"
    ],
    [
        6,
        "&barwed;"
    ],
    [
        0,
        "&Barwed;"
    ],
    [
        1,
        "&lceil;"
    ],
    [
        0,
        "&rceil;"
    ],
    [
        0,
        "&LeftFloor;"
    ],
    [
        0,
        "&rfloor;"
    ],
    [
        0,
        "&drcrop;"
    ],
    [
        0,
        "&dlcrop;"
    ],
    [
        0,
        "&urcrop;"
    ],
    [
        0,
        "&ulcrop;"
    ],
    [
        0,
        "&bnot;"
    ],
    [
        1,
        "&profline;"
    ],
    [
        0,
        "&profsurf;"
    ],
    [
        1,
        "&telrec;"
    ],
    [
        0,
        "&target;"
    ],
    [
        5,
        "&ulcorn;"
    ],
    [
        0,
        "&urcorn;"
    ],
    [
        0,
        "&dlcorn;"
    ],
    [
        0,
        "&drcorn;"
    ],
    [
        2,
        "&frown;"
    ],
    [
        0,
        "&smile;"
    ],
    [
        9,
        "&cylcty;"
    ],
    [
        0,
        "&profalar;"
    ],
    [
        7,
        "&topbot;"
    ],
    [
        6,
        "&ovbar;"
    ],
    [
        1,
        "&solbar;"
    ],
    [
        60,
        "&angzarr;"
    ],
    [
        51,
        "&lmoustache;"
    ],
    [
        0,
        "&rmoustache;"
    ],
    [
        2,
        "&OverBracket;"
    ],
    [
        0,
        "&bbrk;"
    ],
    [
        0,
        "&bbrktbrk;"
    ],
    [
        37,
        "&OverParenthesis;"
    ],
    [
        0,
        "&UnderParenthesis;"
    ],
    [
        0,
        "&OverBrace;"
    ],
    [
        0,
        "&UnderBrace;"
    ],
    [
        2,
        "&trpezium;"
    ],
    [
        4,
        "&elinters;"
    ],
    [
        59,
        "&blank;"
    ],
    [
        164,
        "&circledS;"
    ],
    [
        55,
        "&boxh;"
    ],
    [
        1,
        "&boxv;"
    ],
    [
        9,
        "&boxdr;"
    ],
    [
        3,
        "&boxdl;"
    ],
    [
        3,
        "&boxur;"
    ],
    [
        3,
        "&boxul;"
    ],
    [
        3,
        "&boxvr;"
    ],
    [
        7,
        "&boxvl;"
    ],
    [
        7,
        "&boxhd;"
    ],
    [
        7,
        "&boxhu;"
    ],
    [
        7,
        "&boxvh;"
    ],
    [
        19,
        "&boxH;"
    ],
    [
        0,
        "&boxV;"
    ],
    [
        0,
        "&boxdR;"
    ],
    [
        0,
        "&boxDr;"
    ],
    [
        0,
        "&boxDR;"
    ],
    [
        0,
        "&boxdL;"
    ],
    [
        0,
        "&boxDl;"
    ],
    [
        0,
        "&boxDL;"
    ],
    [
        0,
        "&boxuR;"
    ],
    [
        0,
        "&boxUr;"
    ],
    [
        0,
        "&boxUR;"
    ],
    [
        0,
        "&boxuL;"
    ],
    [
        0,
        "&boxUl;"
    ],
    [
        0,
        "&boxUL;"
    ],
    [
        0,
        "&boxvR;"
    ],
    [
        0,
        "&boxVr;"
    ],
    [
        0,
        "&boxVR;"
    ],
    [
        0,
        "&boxvL;"
    ],
    [
        0,
        "&boxVl;"
    ],
    [
        0,
        "&boxVL;"
    ],
    [
        0,
        "&boxHd;"
    ],
    [
        0,
        "&boxhD;"
    ],
    [
        0,
        "&boxHD;"
    ],
    [
        0,
        "&boxHu;"
    ],
    [
        0,
        "&boxhU;"
    ],
    [
        0,
        "&boxHU;"
    ],
    [
        0,
        "&boxvH;"
    ],
    [
        0,
        "&boxVh;"
    ],
    [
        0,
        "&boxVH;"
    ],
    [
        19,
        "&uhblk;"
    ],
    [
        3,
        "&lhblk;"
    ],
    [
        3,
        "&block;"
    ],
    [
        8,
        "&blk14;"
    ],
    [
        0,
        "&blk12;"
    ],
    [
        0,
        "&blk34;"
    ],
    [
        13,
        "&square;"
    ],
    [
        8,
        "&blacksquare;"
    ],
    [
        0,
        "&EmptyVerySmallSquare;"
    ],
    [
        1,
        "&rect;"
    ],
    [
        0,
        "&marker;"
    ],
    [
        2,
        "&fltns;"
    ],
    [
        1,
        "&bigtriangleup;"
    ],
    [
        0,
        "&blacktriangle;"
    ],
    [
        0,
        "&triangle;"
    ],
    [
        2,
        "&blacktriangleright;"
    ],
    [
        0,
        "&rtri;"
    ],
    [
        3,
        "&bigtriangledown;"
    ],
    [
        0,
        "&blacktriangledown;"
    ],
    [
        0,
        "&dtri;"
    ],
    [
        2,
        "&blacktriangleleft;"
    ],
    [
        0,
        "&ltri;"
    ],
    [
        6,
        "&loz;"
    ],
    [
        0,
        "&cir;"
    ],
    [
        32,
        "&tridot;"
    ],
    [
        2,
        "&bigcirc;"
    ],
    [
        8,
        "&ultri;"
    ],
    [
        0,
        "&urtri;"
    ],
    [
        0,
        "&lltri;"
    ],
    [
        0,
        "&EmptySmallSquare;"
    ],
    [
        0,
        "&FilledSmallSquare;"
    ],
    [
        8,
        "&bigstar;"
    ],
    [
        0,
        "&star;"
    ],
    [
        7,
        "&phone;"
    ],
    [
        49,
        "&female;"
    ],
    [
        1,
        "&male;"
    ],
    [
        29,
        "&spades;"
    ],
    [
        2,
        "&clubs;"
    ],
    [
        1,
        "&hearts;"
    ],
    [
        0,
        "&diamondsuit;"
    ],
    [
        3,
        "&sung;"
    ],
    [
        2,
        "&flat;"
    ],
    [
        0,
        "&natural;"
    ],
    [
        0,
        "&sharp;"
    ],
    [
        163,
        "&check;"
    ],
    [
        3,
        "&cross;"
    ],
    [
        8,
        "&malt;"
    ],
    [
        21,
        "&sext;"
    ],
    [
        33,
        "&VerticalSeparator;"
    ],
    [
        25,
        "&lbbrk;"
    ],
    [
        0,
        "&rbbrk;"
    ],
    [
        84,
        "&bsolhsub;"
    ],
    [
        0,
        "&suphsol;"
    ],
    [
        28,
        "&LeftDoubleBracket;"
    ],
    [
        0,
        "&RightDoubleBracket;"
    ],
    [
        0,
        "&lang;"
    ],
    [
        0,
        "&rang;"
    ],
    [
        0,
        "&Lang;"
    ],
    [
        0,
        "&Rang;"
    ],
    [
        0,
        "&loang;"
    ],
    [
        0,
        "&roang;"
    ],
    [
        7,
        "&longleftarrow;"
    ],
    [
        0,
        "&longrightarrow;"
    ],
    [
        0,
        "&longleftrightarrow;"
    ],
    [
        0,
        "&DoubleLongLeftArrow;"
    ],
    [
        0,
        "&DoubleLongRightArrow;"
    ],
    [
        0,
        "&DoubleLongLeftRightArrow;"
    ],
    [
        1,
        "&longmapsto;"
    ],
    [
        2,
        "&dzigrarr;"
    ],
    [
        258,
        "&nvlArr;"
    ],
    [
        0,
        "&nvrArr;"
    ],
    [
        0,
        "&nvHarr;"
    ],
    [
        0,
        "&Map;"
    ],
    [
        6,
        "&lbarr;"
    ],
    [
        0,
        "&bkarow;"
    ],
    [
        0,
        "&lBarr;"
    ],
    [
        0,
        "&dbkarow;"
    ],
    [
        0,
        "&drbkarow;"
    ],
    [
        0,
        "&DDotrahd;"
    ],
    [
        0,
        "&UpArrowBar;"
    ],
    [
        0,
        "&DownArrowBar;"
    ],
    [
        2,
        "&Rarrtl;"
    ],
    [
        2,
        "&latail;"
    ],
    [
        0,
        "&ratail;"
    ],
    [
        0,
        "&lAtail;"
    ],
    [
        0,
        "&rAtail;"
    ],
    [
        0,
        "&larrfs;"
    ],
    [
        0,
        "&rarrfs;"
    ],
    [
        0,
        "&larrbfs;"
    ],
    [
        0,
        "&rarrbfs;"
    ],
    [
        2,
        "&nwarhk;"
    ],
    [
        0,
        "&nearhk;"
    ],
    [
        0,
        "&hksearow;"
    ],
    [
        0,
        "&hkswarow;"
    ],
    [
        0,
        "&nwnear;"
    ],
    [
        0,
        "&nesear;"
    ],
    [
        0,
        "&seswar;"
    ],
    [
        0,
        "&swnwar;"
    ],
    [
        8,
        {
            v: "&rarrc;",
            n: 824,
            o: "&nrarrc;"
        }
    ],
    [
        1,
        "&cudarrr;"
    ],
    [
        0,
        "&ldca;"
    ],
    [
        0,
        "&rdca;"
    ],
    [
        0,
        "&cudarrl;"
    ],
    [
        0,
        "&larrpl;"
    ],
    [
        2,
        "&curarrm;"
    ],
    [
        0,
        "&cularrp;"
    ],
    [
        7,
        "&rarrpl;"
    ],
    [
        2,
        "&harrcir;"
    ],
    [
        0,
        "&Uarrocir;"
    ],
    [
        0,
        "&lurdshar;"
    ],
    [
        0,
        "&ldrushar;"
    ],
    [
        2,
        "&LeftRightVector;"
    ],
    [
        0,
        "&RightUpDownVector;"
    ],
    [
        0,
        "&DownLeftRightVector;"
    ],
    [
        0,
        "&LeftUpDownVector;"
    ],
    [
        0,
        "&LeftVectorBar;"
    ],
    [
        0,
        "&RightVectorBar;"
    ],
    [
        0,
        "&RightUpVectorBar;"
    ],
    [
        0,
        "&RightDownVectorBar;"
    ],
    [
        0,
        "&DownLeftVectorBar;"
    ],
    [
        0,
        "&DownRightVectorBar;"
    ],
    [
        0,
        "&LeftUpVectorBar;"
    ],
    [
        0,
        "&LeftDownVectorBar;"
    ],
    [
        0,
        "&LeftTeeVector;"
    ],
    [
        0,
        "&RightTeeVector;"
    ],
    [
        0,
        "&RightUpTeeVector;"
    ],
    [
        0,
        "&RightDownTeeVector;"
    ],
    [
        0,
        "&DownLeftTeeVector;"
    ],
    [
        0,
        "&DownRightTeeVector;"
    ],
    [
        0,
        "&LeftUpTeeVector;"
    ],
    [
        0,
        "&LeftDownTeeVector;"
    ],
    [
        0,
        "&lHar;"
    ],
    [
        0,
        "&uHar;"
    ],
    [
        0,
        "&rHar;"
    ],
    [
        0,
        "&dHar;"
    ],
    [
        0,
        "&luruhar;"
    ],
    [
        0,
        "&ldrdhar;"
    ],
    [
        0,
        "&ruluhar;"
    ],
    [
        0,
        "&rdldhar;"
    ],
    [
        0,
        "&lharul;"
    ],
    [
        0,
        "&llhard;"
    ],
    [
        0,
        "&rharul;"
    ],
    [
        0,
        "&lrhard;"
    ],
    [
        0,
        "&udhar;"
    ],
    [
        0,
        "&duhar;"
    ],
    [
        0,
        "&RoundImplies;"
    ],
    [
        0,
        "&erarr;"
    ],
    [
        0,
        "&simrarr;"
    ],
    [
        0,
        "&larrsim;"
    ],
    [
        0,
        "&rarrsim;"
    ],
    [
        0,
        "&rarrap;"
    ],
    [
        0,
        "&ltlarr;"
    ],
    [
        1,
        "&gtrarr;"
    ],
    [
        0,
        "&subrarr;"
    ],
    [
        1,
        "&suplarr;"
    ],
    [
        0,
        "&lfisht;"
    ],
    [
        0,
        "&rfisht;"
    ],
    [
        0,
        "&ufisht;"
    ],
    [
        0,
        "&dfisht;"
    ],
    [
        5,
        "&lopar;"
    ],
    [
        0,
        "&ropar;"
    ],
    [
        4,
        "&lbrke;"
    ],
    [
        0,
        "&rbrke;"
    ],
    [
        0,
        "&lbrkslu;"
    ],
    [
        0,
        "&rbrksld;"
    ],
    [
        0,
        "&lbrksld;"
    ],
    [
        0,
        "&rbrkslu;"
    ],
    [
        0,
        "&langd;"
    ],
    [
        0,
        "&rangd;"
    ],
    [
        0,
        "&lparlt;"
    ],
    [
        0,
        "&rpargt;"
    ],
    [
        0,
        "&gtlPar;"
    ],
    [
        0,
        "&ltrPar;"
    ],
    [
        3,
        "&vzigzag;"
    ],
    [
        1,
        "&vangrt;"
    ],
    [
        0,
        "&angrtvbd;"
    ],
    [
        6,
        "&ange;"
    ],
    [
        0,
        "&range;"
    ],
    [
        0,
        "&dwangle;"
    ],
    [
        0,
        "&uwangle;"
    ],
    [
        0,
        "&angmsdaa;"
    ],
    [
        0,
        "&angmsdab;"
    ],
    [
        0,
        "&angmsdac;"
    ],
    [
        0,
        "&angmsdad;"
    ],
    [
        0,
        "&angmsdae;"
    ],
    [
        0,
        "&angmsdaf;"
    ],
    [
        0,
        "&angmsdag;"
    ],
    [
        0,
        "&angmsdah;"
    ],
    [
        0,
        "&bemptyv;"
    ],
    [
        0,
        "&demptyv;"
    ],
    [
        0,
        "&cemptyv;"
    ],
    [
        0,
        "&raemptyv;"
    ],
    [
        0,
        "&laemptyv;"
    ],
    [
        0,
        "&ohbar;"
    ],
    [
        0,
        "&omid;"
    ],
    [
        0,
        "&opar;"
    ],
    [
        1,
        "&operp;"
    ],
    [
        1,
        "&olcross;"
    ],
    [
        0,
        "&odsold;"
    ],
    [
        1,
        "&olcir;"
    ],
    [
        0,
        "&ofcir;"
    ],
    [
        0,
        "&olt;"
    ],
    [
        0,
        "&ogt;"
    ],
    [
        0,
        "&cirscir;"
    ],
    [
        0,
        "&cirE;"
    ],
    [
        0,
        "&solb;"
    ],
    [
        0,
        "&bsolb;"
    ],
    [
        3,
        "&boxbox;"
    ],
    [
        3,
        "&trisb;"
    ],
    [
        0,
        "&rtriltri;"
    ],
    [
        0,
        {
            v: "&LeftTriangleBar;",
            n: 824,
            o: "&NotLeftTriangleBar;"
        }
    ],
    [
        0,
        {
            v: "&RightTriangleBar;",
            n: 824,
            o: "&NotRightTriangleBar;"
        }
    ],
    [
        11,
        "&iinfin;"
    ],
    [
        0,
        "&infintie;"
    ],
    [
        0,
        "&nvinfin;"
    ],
    [
        4,
        "&eparsl;"
    ],
    [
        0,
        "&smeparsl;"
    ],
    [
        0,
        "&eqvparsl;"
    ],
    [
        5,
        "&blacklozenge;"
    ],
    [
        8,
        "&RuleDelayed;"
    ],
    [
        1,
        "&dsol;"
    ],
    [
        9,
        "&bigodot;"
    ],
    [
        0,
        "&bigoplus;"
    ],
    [
        0,
        "&bigotimes;"
    ],
    [
        1,
        "&biguplus;"
    ],
    [
        1,
        "&bigsqcup;"
    ],
    [
        5,
        "&iiiint;"
    ],
    [
        0,
        "&fpartint;"
    ],
    [
        2,
        "&cirfnint;"
    ],
    [
        0,
        "&awint;"
    ],
    [
        0,
        "&rppolint;"
    ],
    [
        0,
        "&scpolint;"
    ],
    [
        0,
        "&npolint;"
    ],
    [
        0,
        "&pointint;"
    ],
    [
        0,
        "&quatint;"
    ],
    [
        0,
        "&intlarhk;"
    ],
    [
        10,
        "&pluscir;"
    ],
    [
        0,
        "&plusacir;"
    ],
    [
        0,
        "&simplus;"
    ],
    [
        0,
        "&plusdu;"
    ],
    [
        0,
        "&plussim;"
    ],
    [
        0,
        "&plustwo;"
    ],
    [
        1,
        "&mcomma;"
    ],
    [
        0,
        "&minusdu;"
    ],
    [
        2,
        "&loplus;"
    ],
    [
        0,
        "&roplus;"
    ],
    [
        0,
        "&Cross;"
    ],
    [
        0,
        "&timesd;"
    ],
    [
        0,
        "&timesbar;"
    ],
    [
        1,
        "&smashp;"
    ],
    [
        0,
        "&lotimes;"
    ],
    [
        0,
        "&rotimes;"
    ],
    [
        0,
        "&otimesas;"
    ],
    [
        0,
        "&Otimes;"
    ],
    [
        0,
        "&odiv;"
    ],
    [
        0,
        "&triplus;"
    ],
    [
        0,
        "&triminus;"
    ],
    [
        0,
        "&tritime;"
    ],
    [
        0,
        "&intprod;"
    ],
    [
        2,
        "&amalg;"
    ],
    [
        0,
        "&capdot;"
    ],
    [
        1,
        "&ncup;"
    ],
    [
        0,
        "&ncap;"
    ],
    [
        0,
        "&capand;"
    ],
    [
        0,
        "&cupor;"
    ],
    [
        0,
        "&cupcap;"
    ],
    [
        0,
        "&capcup;"
    ],
    [
        0,
        "&cupbrcap;"
    ],
    [
        0,
        "&capbrcup;"
    ],
    [
        0,
        "&cupcup;"
    ],
    [
        0,
        "&capcap;"
    ],
    [
        0,
        "&ccups;"
    ],
    [
        0,
        "&ccaps;"
    ],
    [
        2,
        "&ccupssm;"
    ],
    [
        2,
        "&And;"
    ],
    [
        0,
        "&Or;"
    ],
    [
        0,
        "&andand;"
    ],
    [
        0,
        "&oror;"
    ],
    [
        0,
        "&orslope;"
    ],
    [
        0,
        "&andslope;"
    ],
    [
        1,
        "&andv;"
    ],
    [
        0,
        "&orv;"
    ],
    [
        0,
        "&andd;"
    ],
    [
        0,
        "&ord;"
    ],
    [
        1,
        "&wedbar;"
    ],
    [
        6,
        "&sdote;"
    ],
    [
        3,
        "&simdot;"
    ],
    [
        2,
        {
            v: "&congdot;",
            n: 824,
            o: "&ncongdot;"
        }
    ],
    [
        0,
        "&easter;"
    ],
    [
        0,
        "&apacir;"
    ],
    [
        0,
        {
            v: "&apE;",
            n: 824,
            o: "&napE;"
        }
    ],
    [
        0,
        "&eplus;"
    ],
    [
        0,
        "&pluse;"
    ],
    [
        0,
        "&Esim;"
    ],
    [
        0,
        "&Colone;"
    ],
    [
        0,
        "&Equal;"
    ],
    [
        1,
        "&ddotseq;"
    ],
    [
        0,
        "&equivDD;"
    ],
    [
        0,
        "&ltcir;"
    ],
    [
        0,
        "&gtcir;"
    ],
    [
        0,
        "&ltquest;"
    ],
    [
        0,
        "&gtquest;"
    ],
    [
        0,
        {
            v: "&leqslant;",
            n: 824,
            o: "&nleqslant;"
        }
    ],
    [
        0,
        {
            v: "&geqslant;",
            n: 824,
            o: "&ngeqslant;"
        }
    ],
    [
        0,
        "&lesdot;"
    ],
    [
        0,
        "&gesdot;"
    ],
    [
        0,
        "&lesdoto;"
    ],
    [
        0,
        "&gesdoto;"
    ],
    [
        0,
        "&lesdotor;"
    ],
    [
        0,
        "&gesdotol;"
    ],
    [
        0,
        "&lap;"
    ],
    [
        0,
        "&gap;"
    ],
    [
        0,
        "&lne;"
    ],
    [
        0,
        "&gne;"
    ],
    [
        0,
        "&lnap;"
    ],
    [
        0,
        "&gnap;"
    ],
    [
        0,
        "&lEg;"
    ],
    [
        0,
        "&gEl;"
    ],
    [
        0,
        "&lsime;"
    ],
    [
        0,
        "&gsime;"
    ],
    [
        0,
        "&lsimg;"
    ],
    [
        0,
        "&gsiml;"
    ],
    [
        0,
        "&lgE;"
    ],
    [
        0,
        "&glE;"
    ],
    [
        0,
        "&lesges;"
    ],
    [
        0,
        "&gesles;"
    ],
    [
        0,
        "&els;"
    ],
    [
        0,
        "&egs;"
    ],
    [
        0,
        "&elsdot;"
    ],
    [
        0,
        "&egsdot;"
    ],
    [
        0,
        "&el;"
    ],
    [
        0,
        "&eg;"
    ],
    [
        2,
        "&siml;"
    ],
    [
        0,
        "&simg;"
    ],
    [
        0,
        "&simlE;"
    ],
    [
        0,
        "&simgE;"
    ],
    [
        0,
        {
            v: "&LessLess;",
            n: 824,
            o: "&NotNestedLessLess;"
        }
    ],
    [
        0,
        {
            v: "&GreaterGreater;",
            n: 824,
            o: "&NotNestedGreaterGreater;"
        }
    ],
    [
        1,
        "&glj;"
    ],
    [
        0,
        "&gla;"
    ],
    [
        0,
        "&ltcc;"
    ],
    [
        0,
        "&gtcc;"
    ],
    [
        0,
        "&lescc;"
    ],
    [
        0,
        "&gescc;"
    ],
    [
        0,
        "&smt;"
    ],
    [
        0,
        "&lat;"
    ],
    [
        0,
        {
            v: "&smte;",
            n: 65024,
            o: "&smtes;"
        }
    ],
    [
        0,
        {
            v: "&late;",
            n: 65024,
            o: "&lates;"
        }
    ],
    [
        0,
        "&bumpE;"
    ],
    [
        0,
        {
            v: "&PrecedesEqual;",
            n: 824,
            o: "&NotPrecedesEqual;"
        }
    ],
    [
        0,
        {
            v: "&sce;",
            n: 824,
            o: "&NotSucceedsEqual;"
        }
    ],
    [
        2,
        "&prE;"
    ],
    [
        0,
        "&scE;"
    ],
    [
        0,
        "&precneqq;"
    ],
    [
        0,
        "&scnE;"
    ],
    [
        0,
        "&prap;"
    ],
    [
        0,
        "&scap;"
    ],
    [
        0,
        "&precnapprox;"
    ],
    [
        0,
        "&scnap;"
    ],
    [
        0,
        "&Pr;"
    ],
    [
        0,
        "&Sc;"
    ],
    [
        0,
        "&subdot;"
    ],
    [
        0,
        "&supdot;"
    ],
    [
        0,
        "&subplus;"
    ],
    [
        0,
        "&supplus;"
    ],
    [
        0,
        "&submult;"
    ],
    [
        0,
        "&supmult;"
    ],
    [
        0,
        "&subedot;"
    ],
    [
        0,
        "&supedot;"
    ],
    [
        0,
        {
            v: "&subE;",
            n: 824,
            o: "&nsubE;"
        }
    ],
    [
        0,
        {
            v: "&supE;",
            n: 824,
            o: "&nsupE;"
        }
    ],
    [
        0,
        "&subsim;"
    ],
    [
        0,
        "&supsim;"
    ],
    [
        2,
        {
            v: "&subnE;",
            n: 65024,
            o: "&varsubsetneqq;"
        }
    ],
    [
        0,
        {
            v: "&supnE;",
            n: 65024,
            o: "&varsupsetneqq;"
        }
    ],
    [
        2,
        "&csub;"
    ],
    [
        0,
        "&csup;"
    ],
    [
        0,
        "&csube;"
    ],
    [
        0,
        "&csupe;"
    ],
    [
        0,
        "&subsup;"
    ],
    [
        0,
        "&supsub;"
    ],
    [
        0,
        "&subsub;"
    ],
    [
        0,
        "&supsup;"
    ],
    [
        0,
        "&suphsub;"
    ],
    [
        0,
        "&supdsub;"
    ],
    [
        0,
        "&forkv;"
    ],
    [
        0,
        "&topfork;"
    ],
    [
        0,
        "&mlcp;"
    ],
    [
        8,
        "&Dashv;"
    ],
    [
        1,
        "&Vdashl;"
    ],
    [
        0,
        "&Barv;"
    ],
    [
        0,
        "&vBar;"
    ],
    [
        0,
        "&vBarv;"
    ],
    [
        1,
        "&Vbar;"
    ],
    [
        0,
        "&Not;"
    ],
    [
        0,
        "&bNot;"
    ],
    [
        0,
        "&rnmid;"
    ],
    [
        0,
        "&cirmid;"
    ],
    [
        0,
        "&midcir;"
    ],
    [
        0,
        "&topcir;"
    ],
    [
        0,
        "&nhpar;"
    ],
    [
        0,
        "&parsim;"
    ],
    [
        9,
        {
            v: "&parsl;",
            n: 8421,
            o: "&nparsl;"
        }
    ],
    [
        44343,
        {
            n: new Map(u2([
                [
                    56476,
                    "&Ascr;"
                ],
                [
                    1,
                    "&Cscr;"
                ],
                [
                    0,
                    "&Dscr;"
                ],
                [
                    2,
                    "&Gscr;"
                ],
                [
                    2,
                    "&Jscr;"
                ],
                [
                    0,
                    "&Kscr;"
                ],
                [
                    2,
                    "&Nscr;"
                ],
                [
                    0,
                    "&Oscr;"
                ],
                [
                    0,
                    "&Pscr;"
                ],
                [
                    0,
                    "&Qscr;"
                ],
                [
                    1,
                    "&Sscr;"
                ],
                [
                    0,
                    "&Tscr;"
                ],
                [
                    0,
                    "&Uscr;"
                ],
                [
                    0,
                    "&Vscr;"
                ],
                [
                    0,
                    "&Wscr;"
                ],
                [
                    0,
                    "&Xscr;"
                ],
                [
                    0,
                    "&Yscr;"
                ],
                [
                    0,
                    "&Zscr;"
                ],
                [
                    0,
                    "&ascr;"
                ],
                [
                    0,
                    "&bscr;"
                ],
                [
                    0,
                    "&cscr;"
                ],
                [
                    0,
                    "&dscr;"
                ],
                [
                    1,
                    "&fscr;"
                ],
                [
                    1,
                    "&hscr;"
                ],
                [
                    0,
                    "&iscr;"
                ],
                [
                    0,
                    "&jscr;"
                ],
                [
                    0,
                    "&kscr;"
                ],
                [
                    0,
                    "&lscr;"
                ],
                [
                    0,
                    "&mscr;"
                ],
                [
                    0,
                    "&nscr;"
                ],
                [
                    1,
                    "&pscr;"
                ],
                [
                    0,
                    "&qscr;"
                ],
                [
                    0,
                    "&rscr;"
                ],
                [
                    0,
                    "&sscr;"
                ],
                [
                    0,
                    "&tscr;"
                ],
                [
                    0,
                    "&uscr;"
                ],
                [
                    0,
                    "&vscr;"
                ],
                [
                    0,
                    "&wscr;"
                ],
                [
                    0,
                    "&xscr;"
                ],
                [
                    0,
                    "&yscr;"
                ],
                [
                    0,
                    "&zscr;"
                ],
                [
                    52,
                    "&Afr;"
                ],
                [
                    0,
                    "&Bfr;"
                ],
                [
                    1,
                    "&Dfr;"
                ],
                [
                    0,
                    "&Efr;"
                ],
                [
                    0,
                    "&Ffr;"
                ],
                [
                    0,
                    "&Gfr;"
                ],
                [
                    2,
                    "&Jfr;"
                ],
                [
                    0,
                    "&Kfr;"
                ],
                [
                    0,
                    "&Lfr;"
                ],
                [
                    0,
                    "&Mfr;"
                ],
                [
                    0,
                    "&Nfr;"
                ],
                [
                    0,
                    "&Ofr;"
                ],
                [
                    0,
                    "&Pfr;"
                ],
                [
                    0,
                    "&Qfr;"
                ],
                [
                    1,
                    "&Sfr;"
                ],
                [
                    0,
                    "&Tfr;"
                ],
                [
                    0,
                    "&Ufr;"
                ],
                [
                    0,
                    "&Vfr;"
                ],
                [
                    0,
                    "&Wfr;"
                ],
                [
                    0,
                    "&Xfr;"
                ],
                [
                    0,
                    "&Yfr;"
                ],
                [
                    1,
                    "&afr;"
                ],
                [
                    0,
                    "&bfr;"
                ],
                [
                    0,
                    "&cfr;"
                ],
                [
                    0,
                    "&dfr;"
                ],
                [
                    0,
                    "&efr;"
                ],
                [
                    0,
                    "&ffr;"
                ],
                [
                    0,
                    "&gfr;"
                ],
                [
                    0,
                    "&hfr;"
                ],
                [
                    0,
                    "&ifr;"
                ],
                [
                    0,
                    "&jfr;"
                ],
                [
                    0,
                    "&kfr;"
                ],
                [
                    0,
                    "&lfr;"
                ],
                [
                    0,
                    "&mfr;"
                ],
                [
                    0,
                    "&nfr;"
                ],
                [
                    0,
                    "&ofr;"
                ],
                [
                    0,
                    "&pfr;"
                ],
                [
                    0,
                    "&qfr;"
                ],
                [
                    0,
                    "&rfr;"
                ],
                [
                    0,
                    "&sfr;"
                ],
                [
                    0,
                    "&tfr;"
                ],
                [
                    0,
                    "&ufr;"
                ],
                [
                    0,
                    "&vfr;"
                ],
                [
                    0,
                    "&wfr;"
                ],
                [
                    0,
                    "&xfr;"
                ],
                [
                    0,
                    "&yfr;"
                ],
                [
                    0,
                    "&zfr;"
                ],
                [
                    0,
                    "&Aopf;"
                ],
                [
                    0,
                    "&Bopf;"
                ],
                [
                    1,
                    "&Dopf;"
                ],
                [
                    0,
                    "&Eopf;"
                ],
                [
                    0,
                    "&Fopf;"
                ],
                [
                    0,
                    "&Gopf;"
                ],
                [
                    1,
                    "&Iopf;"
                ],
                [
                    0,
                    "&Jopf;"
                ],
                [
                    0,
                    "&Kopf;"
                ],
                [
                    0,
                    "&Lopf;"
                ],
                [
                    0,
                    "&Mopf;"
                ],
                [
                    1,
                    "&Oopf;"
                ],
                [
                    3,
                    "&Sopf;"
                ],
                [
                    0,
                    "&Topf;"
                ],
                [
                    0,
                    "&Uopf;"
                ],
                [
                    0,
                    "&Vopf;"
                ],
                [
                    0,
                    "&Wopf;"
                ],
                [
                    0,
                    "&Xopf;"
                ],
                [
                    0,
                    "&Yopf;"
                ],
                [
                    1,
                    "&aopf;"
                ],
                [
                    0,
                    "&bopf;"
                ],
                [
                    0,
                    "&copf;"
                ],
                [
                    0,
                    "&dopf;"
                ],
                [
                    0,
                    "&eopf;"
                ],
                [
                    0,
                    "&fopf;"
                ],
                [
                    0,
                    "&gopf;"
                ],
                [
                    0,
                    "&hopf;"
                ],
                [
                    0,
                    "&iopf;"
                ],
                [
                    0,
                    "&jopf;"
                ],
                [
                    0,
                    "&kopf;"
                ],
                [
                    0,
                    "&lopf;"
                ],
                [
                    0,
                    "&mopf;"
                ],
                [
                    0,
                    "&nopf;"
                ],
                [
                    0,
                    "&oopf;"
                ],
                [
                    0,
                    "&popf;"
                ],
                [
                    0,
                    "&qopf;"
                ],
                [
                    0,
                    "&ropf;"
                ],
                [
                    0,
                    "&sopf;"
                ],
                [
                    0,
                    "&topf;"
                ],
                [
                    0,
                    "&uopf;"
                ],
                [
                    0,
                    "&vopf;"
                ],
                [
                    0,
                    "&wopf;"
                ],
                [
                    0,
                    "&xopf;"
                ],
                [
                    0,
                    "&yopf;"
                ],
                [
                    0,
                    "&zopf;"
                ]
            ]))
        }
    ],
    [
        8906,
        "&fflig;"
    ],
    [
        0,
        "&filig;"
    ],
    [
        0,
        "&fllig;"
    ],
    [
        0,
        "&ffilig;"
    ],
    [
        0,
        "&ffllig;"
    ]
]));
var c3;
(function(r) {
    r[r.XML = 0] = "XML", r[r.HTML = 1] = "HTML";
})(c3 || (c3 = {}));
var p3;
(function(r) {
    r[r.Legacy = 0] = "Legacy", r[r.Strict = 1] = "Strict";
})(p3 || (p3 = {}));
var s1;
(function(r) {
    r[r.UTF8 = 0] = "UTF8", r[r.ASCII = 1] = "ASCII", r[r.Extensive = 2] = "Extensive", r[r.Attribute = 3] = "Attribute", r[r.Text = 4] = "Text";
})(s1 || (s1 = {}));
var c4 = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map((e)=>[
        e.toLowerCase(),
        e
    ])), m2 = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map((e)=>[
        e.toLowerCase(),
        e
    ]));
var h3 = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
]);
function x3(e) {
    return e.replace(/"/g, "&quot;");
}
function T2(e, t) {
    var a;
    if (!e) return;
    let r = ((a = t.encodeEntities) !== null && a !== void 0 ? a : t.decodeEntities) === !1 ? x3 : t.xmlMode || t.encodeEntities !== "utf8" ? u1 : g1;
    return Object.keys(e).map((i)=>{
        var o, s;
        let f = (o = e[i]) !== null && o !== void 0 ? o : "";
        return t.xmlMode === "foreign" && (i = (s = m2.get(i)) !== null && s !== void 0 ? s : i), !t.emptyAttrs && !t.xmlMode && f === "" ? i : `${i}="${r(f)}"`;
    }).join(" ");
}
var d2 = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
function l2(e, t = {}) {
    let a = "length" in e ? e : [
        e
    ], r = "";
    for(let i = 0; i < a.length; i++)r += M(a[i], t);
    return r;
}
var U = l2;
function M(e1, t) {
    switch(e1.type){
        case r:
            return l2(e1.children, t);
        case D:
        case p:
            return v1(e1);
        case e:
            return w1(e1);
        case a:
            return A1(e1);
        case x:
        case s:
        case n:
            return b(e1, t);
        case i:
            return E2(e1, t);
    }
}
var y1 = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]), C1 = new Set([
    "svg",
    "math"
]);
function b(e, t) {
    var a;
    t.xmlMode === "foreign" && (e.name = (a = c4.get(e.name)) !== null && a !== void 0 ? a : e.name, e.parent && y1.has(e.parent.name) && (t = {
        ...t,
        xmlMode: !1
    })), !t.xmlMode && C1.has(e.name) && (t = {
        ...t,
        xmlMode: "foreign"
    });
    let r = `<${e.name}`, i = T2(e.attribs, t);
    return i && (r += ` ${i}`), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && d2.has(e.name)) ? (t.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += l2(e.children, t)), (t.xmlMode || !d2.has(e.name)) && (r += `</${e.name}>`)), r;
}
function v1(e) {
    return `<${e.data}>`;
}
function E2(e, t) {
    var a;
    let r = e.data || "";
    return ((a = t.encodeEntities) !== null && a !== void 0 ? a : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && h3.has(e.parent.name)) && (r = t.xmlMode || t.encodeEntities !== "utf8" ? u1(r) : h2(r)), r;
}
function A1(e) {
    return `<![CDATA[${e.children[0].data}]]>`;
}
function w1(e) {
    return `<!--${e.data}-->`;
}
function B(t, n) {
    return U(t, n);
}
function et(t, n) {
    return A(t) ? t.children.map((r)=>B(r, n)).join("") : "";
}
function C2(t) {
    return Array.isArray(t) ? t.map(C2).join("") : I(t) ? t.name === "br" ? `
` : C2(t.children) : v(t) ? C2(t.children) : T(t) ? t.data : "";
}
function g2(t) {
    return Array.isArray(t) ? t.map(g2).join("") : A(t) && !C(t) ? g2(t.children) : T(t) ? t.data : "";
}
function A2(t1) {
    return Array.isArray(t1) ? t1.map(A2).join("") : A(t1) && (t1.type === t.Tag || v(t1)) ? A2(t1.children) : T(t1) ? t1.data : "";
}
function H(t) {
    return A(t) ? t.children : [];
}
function K(t) {
    return t.parent || null;
}
function ft(t) {
    let n = K(t);
    if (n != null) return H(n);
    let r = [
        t
    ], { prev: e , next: i  } = t;
    for(; e != null;)r.unshift(e), { prev: e  } = e;
    for(; i != null;)r.push(i), { next: i  } = i;
    return r;
}
function ot(t, n) {
    var r;
    return (r = t.attribs) === null || r === void 0 ? void 0 : r[n];
}
function st(t, n) {
    return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, n) && t.attribs[n] != null;
}
function at(t) {
    return t.name;
}
function ct(t) {
    let { next: n  } = t;
    for(; n !== null && !I(n);)({ next: n  } = n);
    return n;
}
function lt(t) {
    let { prev: n  } = t;
    for(; n !== null && !I(n);)({ prev: n  } = n);
    return n;
}
function b1(t) {
    if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
        let n = t.parent.children;
        n.splice(n.lastIndexOf(t), 1);
    }
}
function ht(t, n) {
    let r = n.prev = t.prev;
    r && (r.next = n);
    let e = n.next = t.next;
    e && (e.prev = n);
    let i = n.parent = t.parent;
    if (i) {
        let u = i.children;
        u[u.lastIndexOf(t)] = n, t.parent = null;
    }
}
function xt(t, n) {
    if (b1(n), n.next = null, n.parent = t, t.children.push(n) > 1) {
        let r = t.children[t.children.length - 2];
        r.next = n, n.prev = r;
    } else n.prev = null;
}
function dt(t, n) {
    b1(n);
    let { parent: r  } = t, e = t.next;
    if (n.next = e, n.prev = t, t.next = n, n.parent = r, e) {
        if (e.prev = n, r) {
            let i = r.children;
            i.splice(i.lastIndexOf(e), 0, n);
        }
    } else r && r.children.push(n);
}
function gt(t, n) {
    if (b1(n), n.parent = t, n.prev = null, t.children.unshift(n) !== 1) {
        let r = t.children[1];
        r.prev = n, n.next = r;
    } else n.next = null;
}
function bt(t, n) {
    b1(n);
    let { parent: r  } = t;
    if (r) {
        let e = r.children;
        e.splice(e.indexOf(t), 0, n);
    }
    t.prev && (t.prev.next = n), n.parent = r, n.prev = t.prev, n.next = t, t.prev = n;
}
function y2(t, n, r = !0, e = 1 / 0) {
    return Array.isArray(n) || (n = [
        n
    ]), w2(t, n, r, e);
}
function w2(t, n, r, e) {
    let i = [];
    for (let u of n){
        if (t(u) && (i.push(u), --e <= 0)) break;
        if (r && A(u) && u.children.length > 0) {
            let f = w2(t, u.children, r, e);
            if (i.push(...f), e -= f.length, e <= 0) break;
        }
    }
    return i;
}
function Et(t, n) {
    return n.find(t);
}
function N1(t, n, r = !0) {
    let e = null;
    for(let i = 0; i < n.length && !e; i++){
        let u = n[i];
        if (I(u)) t(u) ? e = u : r && u.children.length > 0 && (e = N1(t, u.children, !0));
        else continue;
    }
    return e;
}
function q1(t, n) {
    return n.some((r)=>I(r) && (t(r) || r.children.length > 0 && q1(t, r.children)));
}
function Ot(t, n) {
    var r;
    let e = [], i = n.filter(I), u;
    for(; u = i.shift();){
        let f = (r = u.children) === null || r === void 0 ? void 0 : r.filter(I);
        f && f.length > 0 && i.unshift(...f), t(u) && e.push(u);
    }
    return e;
}
var E3 = {
    tag_name (t) {
        return typeof t == "function" ? (n)=>I(n) && t(n.name) : t === "*" ? I : (n)=>I(n) && n.name === t;
    },
    tag_type (t) {
        return typeof t == "function" ? (n)=>t(n.type) : (n)=>n.type === t;
    },
    tag_contains (t) {
        return typeof t == "function" ? (n)=>T(n) && t(n.data) : (n)=>T(n) && n.data === t;
    }
};
function F(t, n) {
    return typeof n == "function" ? (r)=>I(r) && n(r.attribs[t]) : (r)=>I(r) && r.attribs[t] === n;
}
function z(t, n) {
    return (r)=>t(r) || n(r);
}
function G(t) {
    let n = Object.keys(t).map((r)=>{
        let e = t[r];
        return Object.prototype.hasOwnProperty.call(E3, r) ? E3[r](e) : F(r, e);
    });
    return n.length === 0 ? null : n.reduce(z);
}
function Nt(t, n) {
    let r = G(t);
    return r ? r(n) : !0;
}
function Tt(t, n, r, e = 1 / 0) {
    let i = G(t);
    return i ? y2(i, n, r, e) : [];
}
function Dt(t, n, r = !0) {
    return Array.isArray(n) || (n = [
        n
    ]), N1(F("id", t), n, r);
}
function h4(t, n, r = !0, e = 1 / 0) {
    return y2(E3.tag_name(t), n, r, e);
}
function At(t, n, r = !0, e = 1 / 0) {
    return y2(E3.tag_type(t), n, r, e);
}
function wt(t) {
    let n = t.length;
    for(; --n >= 0;){
        let r = t[n];
        if (n > 0 && t.lastIndexOf(r, n - 1) >= 0) {
            t.splice(n, 1);
            continue;
        }
        for(let e = r.parent; e; e = e.parent)if (t.includes(e)) {
            t.splice(n, 1);
            break;
        }
    }
    return t;
}
var l3;
(function(t) {
    t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY";
})(l3 || (l3 = {}));
function J(t, n) {
    let r = [], e = [];
    if (t === n) return 0;
    let i = A(t) ? t : t.parent;
    for(; i;)r.unshift(i), i = i.parent;
    for(i = A(n) ? n : n.parent; i;)e.unshift(i), i = i.parent;
    let u = Math.min(r.length, e.length), f = 0;
    for(; f < u && r[f] === e[f];)f++;
    if (f === 0) return l3.DISCONNECTED;
    let s = r[f - 1], o = s.children, c = r[f], d = e[f];
    return o.indexOf(c) > o.indexOf(d) ? s === n ? l3.FOLLOWING | l3.CONTAINED_BY : l3.FOLLOWING : s === t ? l3.PRECEDING | l3.CONTAINS : l3.PRECEDING;
}
function Lt(t) {
    return t = t.filter((n, r, e)=>!e.includes(n, r + 1)), t.sort((n, r)=>{
        let e = J(n, r);
        return e & l3.PRECEDING ? -1 : e & l3.FOLLOWING ? 1 : 0;
    }), t;
}
function jt(t) {
    let n = O($, t);
    return n ? n.name === "feed" ? Q(n) : U1(n) : null;
}
function Q(t) {
    var n;
    let r = t.children, e = {
        type: "atom",
        items: h4("entry", r).map((f)=>{
            var s;
            let { children: o  } = f, c = {
                media: j(o)
            };
            a3(c, "id", "id", o), a3(c, "title", "title", o);
            let d = (s = O("link", o)) === null || s === void 0 ? void 0 : s.attribs.href;
            d && (c.link = d);
            let T = p4("summary", o) || p4("content", o);
            T && (c.description = T);
            let D = p4("updated", o);
            return D && (c.pubDate = new Date(D)), c;
        })
    };
    a3(e, "id", "id", r), a3(e, "title", "title", r);
    let i = (n = O("link", r)) === null || n === void 0 ? void 0 : n.attribs.href;
    i && (e.link = i), a3(e, "description", "subtitle", r);
    let u = p4("updated", r);
    return u && (e.updated = new Date(u)), a3(e, "author", "email", r, !0), e;
}
function U1(t) {
    var n, r;
    let e = (r = (n = O("channel", t.children)) === null || n === void 0 ? void 0 : n.children) !== null && r !== void 0 ? r : [], i = {
        type: t.name.substr(0, 3),
        id: "",
        items: h4("item", t.children).map((f)=>{
            let { children: s  } = f, o = {
                media: j(s)
            };
            a3(o, "id", "guid", s), a3(o, "title", "title", s), a3(o, "link", "link", s), a3(o, "description", "description", s);
            let c = p4("pubDate", s);
            return c && (o.pubDate = new Date(c)), o;
        })
    };
    a3(i, "title", "title", e), a3(i, "link", "link", e), a3(i, "description", "description", e);
    let u = p4("lastBuildDate", e);
    return u && (i.updated = new Date(u)), a3(i, "author", "managingEditor", e, !0), i;
}
var X = [
    "url",
    "type",
    "lang"
], Z = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
];
function j(t) {
    return h4("media:content", t).map((n)=>{
        let { attribs: r  } = n, e = {
            medium: r.medium,
            isDefault: !!r.isDefault
        };
        for (let i of X)r[i] && (e[i] = r[i]);
        for (let i1 of Z)r[i1] && (e[i1] = parseInt(r[i1], 10));
        return r.expression && (e.expression = r.expression), e;
    });
}
function O(t, n) {
    return h4(t, n, !0, 1)[0];
}
function p4(t, n, r = !1) {
    return g2(h4(t, n, r, 1)).trim();
}
function a3(t, n, r, e, i = !1) {
    let u = p4(r, e, i);
    u && (t[n] = u);
}
function $(t) {
    return t === "rss" || t === "feed" || t === "rdf:RDF";
}
const mod = {
    DocumentPosition: l3,
    append: dt,
    appendChild: xt,
    compareDocumentPosition: J,
    existsOne: q1,
    filter: y2,
    find: w2,
    findAll: Ot,
    findOne: N1,
    findOneChild: Et,
    getAttributeValue: ot,
    getChildren: H,
    getElementById: Dt,
    getElements: Tt,
    getElementsByTagName: h4,
    getElementsByTagType: At,
    getFeed: jt,
    getInnerHTML: et,
    getName: at,
    getOuterHTML: B,
    getParent: K,
    getSiblings: ft,
    getText: C2,
    hasAttrib: st,
    hasChildren: A,
    innerText: A2,
    isCDATA: v,
    isComment: C,
    isDocument: E,
    isTag: I,
    isText: T,
    nextElementSibling: ct,
    prepend: bt,
    prependChild: gt,
    prevElementSibling: lt,
    removeElement: b1,
    removeSubsets: wt,
    replaceElement: ht,
    testElement: Nt,
    textContent: g2,
    uniqueSort: Lt
};
var l4 = Object.create;
var f1 = Object.defineProperty;
var d3 = Object.getOwnPropertyDescriptor;
var F1 = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf, i1 = Object.prototype.hasOwnProperty;
var p5 = (e, u)=>()=>(u || e((u = {
            exports: {}
        }).exports, u), u.exports);
var m3 = (e, u, t, r)=>{
    if (u && typeof u == "object" || typeof u == "function") for (let n of F1(u))!i1.call(e, n) && n !== t && f1(e, n, {
        get: ()=>u[n],
        enumerable: !(r = d3(u, n)) || r.enumerable
    });
    return e;
};
var x4 = (e, u, t)=>(t = e != null ? l4(_(e)) : {}, m3(u || !e || !e.__esModule ? f1(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var o1 = p5((h, c)=>{
    c.exports = {
        trueFunc: function() {
            return !0;
        },
        falseFunc: function() {
            return !1;
        }
    };
});
var a4 = x4(o1()), { trueFunc: j1 , falseFunc: k1  } = a4, { default: s2 , ...b2 } = a4, q2 = s2 !== void 0 ? s2 : b2;
var e1;
(function(a) {
    a.Attribute = "attribute", a.Pseudo = "pseudo", a.PseudoElement = "pseudo-element", a.Tag = "tag", a.Universal = "universal", a.Adjacent = "adjacent", a.Child = "child", a.Descendant = "descendant", a.Parent = "parent", a.Sibling = "sibling", a.ColumnCombinator = "column-combinator";
})(e1 || (e1 = {}));
var u3;
(function(a) {
    a.Any = "any", a.Element = "element", a.End = "end", a.Equals = "equals", a.Exists = "exists", a.Hyphen = "hyphen", a.Not = "not", a.Start = "start";
})(u3 || (u3 = {}));
var N2 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, L = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, z1 = new Map([
    [
        126,
        u3.Element
    ],
    [
        94,
        u3.Start
    ],
    [
        36,
        u3.End
    ],
    [
        42,
        u3.Any
    ],
    [
        33,
        u3.Not
    ],
    [
        124,
        u3.Hyphen
    ]
]), O1 = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context"
]);
function j2(a) {
    switch(a.type){
        case e1.Adjacent:
        case e1.Child:
        case e1.Descendant:
        case e1.Parent:
        case e1.Sibling:
        case e1.ColumnCombinator:
            return !0;
        default:
            return !1;
    }
}
var _1 = new Set([
    "contains",
    "icontains"
]);
function B1(a, n, t) {
    let i = parseInt(n, 16) - 65536;
    return i !== i || t ? n : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320);
}
function d4(a) {
    return a.replace(L, B1);
}
function b3(a) {
    return a === 39 || a === 34;
}
function D1(a) {
    return a === 32 || a === 9 || a === 10 || a === 12 || a === 13;
}
function G1(a) {
    let n = [], t = V(n, `${a}`, 0);
    if (t < a.length) throw new Error(`Unmatched selector: ${a.slice(t)}`);
    return n;
}
function V(a, n, t) {
    let i = [];
    function c(h) {
        let r = n.slice(t + h).match(N2);
        if (!r) throw new Error(`Expected name, found ${n.slice(t)}`);
        let [s] = r;
        return t += h + s.length, d4(s);
    }
    function f(h) {
        for(t += h; t < n.length && D1(n.charCodeAt(t));)t++;
    }
    function $() {
        t += 1;
        let h = t, r = 1;
        for(; r > 0 && t < n.length; t++)n.charCodeAt(t) === 40 && !l(t) ? r++ : n.charCodeAt(t) === 41 && !l(t) && r--;
        if (r) throw new Error("Parenthesis not matched");
        return d4(n.slice(h, t - 1));
    }
    function l(h) {
        let r = 0;
        for(; n.charCodeAt(--h) === 92;)r++;
        return (r & 1) === 1;
    }
    function v() {
        if (i.length > 0 && j2(i[i.length - 1])) throw new Error("Did not expect successive traversals.");
    }
    function g(h) {
        if (i.length > 0 && i[i.length - 1].type === e1.Descendant) {
            i[i.length - 1].type = h;
            return;
        }
        v(), i.push({
            type: h
        });
    }
    function y(h, r) {
        i.push({
            type: e1.Attribute,
            name: h,
            action: r,
            value: c(1),
            namespace: null,
            ignoreCase: "quirks"
        });
    }
    function P() {
        if (i.length && i[i.length - 1].type === e1.Descendant && i.pop(), i.length === 0) throw new Error("Empty sub-selector");
        a.push(i);
    }
    if (f(0), n.length === t) return t;
    a: for(; t < n.length;){
        let h = n.charCodeAt(t);
        switch(h){
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
                {
                    (i.length === 0 || i[0].type !== e1.Descendant) && (v(), i.push({
                        type: e1.Descendant
                    })), f(1);
                    break;
                }
            case 62:
                {
                    g(e1.Child), f(1);
                    break;
                }
            case 60:
                {
                    g(e1.Parent), f(1);
                    break;
                }
            case 126:
                {
                    g(e1.Sibling), f(1);
                    break;
                }
            case 43:
                {
                    g(e1.Adjacent), f(1);
                    break;
                }
            case 46:
                {
                    y("class", u3.Element);
                    break;
                }
            case 35:
                {
                    y("id", u3.Equals);
                    break;
                }
            case 91:
                {
                    f(1);
                    let r, s = null;
                    n.charCodeAt(t) === 124 ? r = c(1) : n.startsWith("*|", t) ? (s = "*", r = c(2)) : (r = c(0), n.charCodeAt(t) === 124 && n.charCodeAt(t + 1) !== 61 && (s = r, r = c(1))), f(0);
                    let o = u3.Exists, S = z1.get(n.charCodeAt(t));
                    if (S) {
                        if (o = S, n.charCodeAt(t + 1) !== 61) throw new Error("Expected `=`");
                        f(2);
                    } else n.charCodeAt(t) === 61 && (o = u3.Equals, f(1));
                    let A = "", E = null;
                    if (o !== "exists") {
                        if (b3(n.charCodeAt(t))) {
                            let w = n.charCodeAt(t), m = t + 1;
                            for(; m < n.length && (n.charCodeAt(m) !== w || l(m));)m += 1;
                            if (n.charCodeAt(m) !== w) throw new Error("Attribute value didn't end");
                            A = d4(n.slice(t + 1, m)), t = m + 1;
                        } else {
                            let w1 = t;
                            for(; t < n.length && (!D1(n.charCodeAt(t)) && n.charCodeAt(t) !== 93 || l(t));)t += 1;
                            A = d4(n.slice(w1, t));
                        }
                        f(0);
                        let q = n.charCodeAt(t) | 32;
                        q === 115 ? (E = !1, f(1)) : q === 105 && (E = !0, f(1));
                    }
                    if (n.charCodeAt(t) !== 93) throw new Error("Attribute selector didn't terminate");
                    t += 1;
                    let Q = {
                        type: e1.Attribute,
                        name: r,
                        action: o,
                        value: A,
                        namespace: s,
                        ignoreCase: E
                    };
                    i.push(Q);
                    break;
                }
            case 58:
                {
                    if (n.charCodeAt(t + 1) === 58) {
                        i.push({
                            type: e1.PseudoElement,
                            name: c(2).toLowerCase(),
                            data: n.charCodeAt(t) === 40 ? $() : null
                        });
                        continue;
                    }
                    let r1 = c(1).toLowerCase(), s1 = null;
                    if (n.charCodeAt(t) === 40) if (O1.has(r1)) {
                        if (b3(n.charCodeAt(t + 1))) throw new Error(`Pseudo-selector ${r1} cannot be quoted`);
                        if (s1 = [], t = V(s1, n, t + 1), n.charCodeAt(t) !== 41) throw new Error(`Missing closing parenthesis in :${r1} (${n})`);
                        t += 1;
                    } else {
                        if (s1 = $(), _1.has(r1)) {
                            let o1 = s1.charCodeAt(0);
                            o1 === s1.charCodeAt(s1.length - 1) && b3(o1) && (s1 = s1.slice(1, -1));
                        }
                        s1 = d4(s1);
                    }
                    i.push({
                        type: e1.Pseudo,
                        name: r1,
                        data: s1
                    });
                    break;
                }
            case 44:
                {
                    P(), i = [], f(1);
                    break;
                }
            default:
                {
                    if (n.startsWith("/*", t)) {
                        let o2 = n.indexOf("*/", t + 2);
                        if (o2 < 0) throw new Error("Comment was not terminated");
                        t = o2 + 2, i.length === 0 && f(0);
                        break;
                    }
                    let r2 = null, s2;
                    if (h === 42) t += 1, s2 = "*";
                    else if (h === 124) {
                        if (s2 = "", n.charCodeAt(t + 1) === 124) {
                            g(e1.ColumnCombinator), f(2);
                            break;
                        }
                    } else if (N2.test(n.slice(t))) s2 = c(0);
                    else break a;
                    n.charCodeAt(t) === 124 && n.charCodeAt(t + 1) !== 124 && (r2 = s2, n.charCodeAt(t + 1) === 42 ? (s2 = "*", t += 2) : s2 = c(1)), i.push(s2 === "*" ? {
                        type: e1.Universal,
                        namespace: r2
                    } : {
                        type: e1.Tag,
                        name: s2,
                        namespace: r2
                    });
                }
        }
    }
    return P(), t;
}
var U2 = [
    "\\",
    '"'
], W = [
    ...U2,
    "(",
    ")"
], J1 = new Set(U2.map((a)=>a.charCodeAt(0))), F2 = new Set(W.map((a)=>a.charCodeAt(0))), C3 = new Set([
    ...W,
    "~",
    "^",
    "$",
    "*",
    "+",
    "!",
    "|",
    ":",
    "[",
    "]",
    " ",
    "."
].map((a)=>a.charCodeAt(0)));
var b4 = new Set([
    9,
    10,
    12,
    13,
    32
]), l5 = "0".charCodeAt(0), A3 = "9".charCodeAt(0);
function u4(e) {
    if (e = e.trim().toLowerCase(), e === "even") return [
        2,
        0
    ];
    if (e === "odd") return [
        2,
        1
    ];
    let t = 0, n = 0, i = r(), c = o();
    if (t < e.length && e.charAt(t) === "n" && (t++, n = i * (c ?? 1), h(), t < e.length ? (i = r(), h(), c = o()) : i = c = 0), c === null || t < e.length) throw new Error(`n-th rule couldn't be parsed ('${e}')`);
    return [
        n,
        i * c
    ];
    function r() {
        return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1);
    }
    function o() {
        let f = t, s = 0;
        for(; t < e.length && e.charCodeAt(t) >= l5 && e.charCodeAt(t) <= A3;)s = s * 10 + (e.charCodeAt(t) - l5), t++;
        return t === f ? null : s;
    }
    function h() {
        for(; t < e.length && b4.has(e.charCodeAt(t));)t++;
    }
}
function p6(e) {
    let t = e[0], n = e[1] - 1;
    if (n < 0 && t <= 0) return q2.falseFunc;
    if (t === -1) return (r)=>r <= n;
    if (t === 0) return (r)=>r === n;
    if (t === 1) return n < 0 ? q2.trueFunc : (r)=>r >= n;
    let i = Math.abs(t), c = (n % i + i) % i;
    return t > 1 ? (r)=>r >= n && r % i === c : (r)=>r <= n && r % i === c;
}
function g3(e) {
    return p6(u4(e));
}
var W1 = new Map([
    [
        e1.Universal,
        50
    ],
    [
        e1.Tag,
        30
    ],
    [
        e1.Attribute,
        1
    ],
    [
        e1.Pseudo,
        0
    ]
]);
function A4(e) {
    return !W1.has(e.type);
}
var te = new Map([
    [
        u3.Exists,
        10
    ],
    [
        u3.Equals,
        8
    ],
    [
        u3.Not,
        7
    ],
    [
        u3.Start,
        6
    ],
    [
        u3.End,
        6
    ],
    [
        u3.Any,
        5
    ]
]);
function _2(e) {
    let t = e.map(H1);
    for(let n = 1; n < e.length; n++){
        let r = t[n];
        if (!(r < 0)) for(let i = n - 1; i >= 0 && r < t[i]; i--){
            let s = e[i + 1];
            e[i + 1] = e[i], e[i] = s, t[i + 1] = t[i], t[i] = r;
        }
    }
}
function H1(e) {
    var t, n;
    let r = (t = W1.get(e.type)) !== null && t !== void 0 ? t : -1;
    return e.type === e1.Attribute ? (r = (n = te.get(e.action)) !== null && n !== void 0 ? n : 4, e.action === u3.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === e1.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min(...e.data.map((i)=>Math.min(...i.map(H1)))), r < 0 && (r = 0)) : r = 2 : r = 3), r;
}
var ne = /[-[\]{}()*+?.,\\^$|#\s]/g;
function K1(e) {
    return e.replace(ne, "\\$&");
}
var re = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink"
]);
function y3(e, t) {
    return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && re.has(e.name);
}
var z2 = {
    equals (e, t, n) {
        let { adapter: r  } = n, { name: i  } = t, { value: s  } = t;
        return y3(t, n) ? (s = s.toLowerCase(), (o)=>{
            let a = r.getAttributeValue(o, i);
            return a != null && a.length === s.length && a.toLowerCase() === s && e(o);
        }) : (o)=>r.getAttributeValue(o, i) === s && e(o);
    },
    hyphen (e, t, n) {
        let { adapter: r  } = n, { name: i  } = t, { value: s  } = t, o = s.length;
        return y3(t, n) ? (s = s.toLowerCase(), function(u) {
            let l = r.getAttributeValue(u, i);
            return l != null && (l.length === o || l.charAt(o) === "-") && l.substr(0, o).toLowerCase() === s && e(u);
        }) : function(u) {
            let l = r.getAttributeValue(u, i);
            return l != null && (l.length === o || l.charAt(o) === "-") && l.substr(0, o) === s && e(u);
        };
    },
    element (e, t, n) {
        let { adapter: r  } = n, { name: i , value: s  } = t;
        if (/\s/.test(s)) return q2.falseFunc;
        let o = new RegExp(`(?:^|\\s)${K1(s)}(?:$|\\s)`, y3(t, n) ? "i" : "");
        return function(u) {
            let l = r.getAttributeValue(u, i);
            return l != null && l.length >= s.length && o.test(l) && e(u);
        };
    },
    exists (e, { name: t  }, { adapter: n  }) {
        return (r)=>n.hasAttrib(r, t) && e(r);
    },
    start (e, t, n) {
        let { adapter: r  } = n, { name: i  } = t, { value: s  } = t, o = s.length;
        return o === 0 ? q2.falseFunc : y3(t, n) ? (s = s.toLowerCase(), (a)=>{
            let u = r.getAttributeValue(a, i);
            return u != null && u.length >= o && u.substr(0, o).toLowerCase() === s && e(a);
        }) : (a)=>{
            var u;
            return !!(!((u = r.getAttributeValue(a, i)) === null || u === void 0) && u.startsWith(s)) && e(a);
        };
    },
    end (e, t, n) {
        let { adapter: r  } = n, { name: i  } = t, { value: s  } = t, o = -s.length;
        return o === 0 ? q2.falseFunc : y3(t, n) ? (s = s.toLowerCase(), (a)=>{
            var u;
            return ((u = r.getAttributeValue(a, i)) === null || u === void 0 ? void 0 : u.substr(o).toLowerCase()) === s && e(a);
        }) : (a)=>{
            var u;
            return !!(!((u = r.getAttributeValue(a, i)) === null || u === void 0) && u.endsWith(s)) && e(a);
        };
    },
    any (e, t, n) {
        let { adapter: r  } = n, { name: i , value: s  } = t;
        if (s === "") return q2.falseFunc;
        if (y3(t, n)) {
            let o = new RegExp(K1(s), "i");
            return function(u) {
                let l = r.getAttributeValue(u, i);
                return l != null && l.length >= s.length && o.test(l) && e(u);
            };
        }
        return (o)=>{
            var a;
            return !!(!((a = r.getAttributeValue(o, i)) === null || a === void 0) && a.includes(s)) && e(o);
        };
    },
    not (e, t, n) {
        let { adapter: r  } = n, { name: i  } = t, { value: s  } = t;
        return s === "" ? (o)=>!!r.getAttributeValue(o, i) && e(o) : y3(t, n) ? (s = s.toLowerCase(), (o)=>{
            let a = r.getAttributeValue(o, i);
            return (a == null || a.length !== s.length || a.toLowerCase() !== s) && e(o);
        }) : (o)=>r.getAttributeValue(o, i) !== s && e(o);
    }
};
function E4(e, t) {
    return (n)=>{
        let r = t.getParent(n);
        return r != null && t.isTag(r) && e(n);
    };
}
var S1 = {
    contains (e, t, { adapter: n  }) {
        return function(i) {
            return e(i) && n.getText(i).includes(t);
        };
    },
    icontains (e, t, { adapter: n  }) {
        let r = t.toLowerCase();
        return function(s) {
            return e(s) && n.getText(s).toLowerCase().includes(r);
        };
    },
    "nth-child" (e, t, { adapter: n , equals: r  }) {
        let i = g3(t);
        return i === q2.falseFunc ? q2.falseFunc : i === q2.trueFunc ? E4(e, n) : function(o) {
            let a = n.getSiblings(o), u = 0;
            for(let l = 0; l < a.length && !r(o, a[l]); l++)n.isTag(a[l]) && u++;
            return i(u) && e(o);
        };
    },
    "nth-last-child" (e, t, { adapter: n , equals: r  }) {
        let i = g3(t);
        return i === q2.falseFunc ? q2.falseFunc : i === q2.trueFunc ? E4(e, n) : function(o) {
            let a = n.getSiblings(o), u = 0;
            for(let l = a.length - 1; l >= 0 && !r(o, a[l]); l--)n.isTag(a[l]) && u++;
            return i(u) && e(o);
        };
    },
    "nth-of-type" (e, t, { adapter: n , equals: r  }) {
        let i = g3(t);
        return i === q2.falseFunc ? q2.falseFunc : i === q2.trueFunc ? E4(e, n) : function(o) {
            let a = n.getSiblings(o), u = 0;
            for(let l = 0; l < a.length; l++){
                let c = a[l];
                if (r(o, c)) break;
                n.isTag(c) && n.getName(c) === n.getName(o) && u++;
            }
            return i(u) && e(o);
        };
    },
    "nth-last-of-type" (e, t, { adapter: n , equals: r  }) {
        let i = g3(t);
        return i === q2.falseFunc ? q2.falseFunc : i === q2.trueFunc ? E4(e, n) : function(o) {
            let a = n.getSiblings(o), u = 0;
            for(let l = a.length - 1; l >= 0; l--){
                let c = a[l];
                if (r(o, c)) break;
                n.isTag(c) && n.getName(c) === n.getName(o) && u++;
            }
            return i(u) && e(o);
        };
    },
    root (e, t, { adapter: n  }) {
        return (r)=>{
            let i = n.getParent(r);
            return (i == null || !n.isTag(i)) && e(r);
        };
    },
    scope (e, t, n, r) {
        let { equals: i  } = n;
        return !r || r.length === 0 ? S1.root(e, t, n) : r.length === 1 ? (s)=>i(r[0], s) && e(s) : (s)=>r.includes(s) && e(s);
    },
    hover: L1("isHovered"),
    visited: L1("isVisited"),
    active: L1("isActive")
};
function L1(e) {
    return function(n, r, { adapter: i  }) {
        let s = i[e];
        return typeof s != "function" ? q2.falseFunc : function(a) {
            return s(a) && n(a);
        };
    };
}
var F3 = {
    empty (e, { adapter: t  }) {
        return !t.getChildren(e).some((n)=>t.isTag(n) || t.getText(n) !== "");
    },
    "first-child" (e, { adapter: t , equals: n  }) {
        if (t.prevElementSibling) return t.prevElementSibling(e) == null;
        let r = t.getSiblings(e).find((i)=>t.isTag(i));
        return r != null && n(e, r);
    },
    "last-child" (e, { adapter: t , equals: n  }) {
        let r = t.getSiblings(e);
        for(let i = r.length - 1; i >= 0; i--){
            if (n(e, r[i])) return !0;
            if (t.isTag(r[i])) break;
        }
        return !1;
    },
    "first-of-type" (e, { adapter: t , equals: n  }) {
        let r = t.getSiblings(e), i = t.getName(e);
        for(let s = 0; s < r.length; s++){
            let o = r[s];
            if (n(e, o)) return !0;
            if (t.isTag(o) && t.getName(o) === i) break;
        }
        return !1;
    },
    "last-of-type" (e, { adapter: t , equals: n  }) {
        let r = t.getSiblings(e), i = t.getName(e);
        for(let s = r.length - 1; s >= 0; s--){
            let o = r[s];
            if (n(e, o)) return !0;
            if (t.isTag(o) && t.getName(o) === i) break;
        }
        return !1;
    },
    "only-of-type" (e, { adapter: t , equals: n  }) {
        let r = t.getName(e);
        return t.getSiblings(e).every((i)=>n(e, i) || !t.isTag(i) || t.getName(i) !== r);
    },
    "only-child" (e, { adapter: t , equals: n  }) {
        return t.getSiblings(e).every((r)=>n(e, r) || !t.isTag(r));
    }
};
function k2(e, t, n, r) {
    if (n === null) {
        if (e.length > r) throw new Error(`Pseudo-class :${t} requires an argument`);
    } else if (e.length === r) throw new Error(`Pseudo-class :${t} doesn't have any arguments`);
}
var O2 = {
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])"
};
var V1 = {};
function q3(e, t) {
    return e === q2.falseFunc ? q2.falseFunc : (n)=>t.isTag(n) && e(n);
}
function M1(e, t) {
    let n = t.getSiblings(e);
    if (n.length <= 1) return [];
    let r = n.indexOf(e);
    return r < 0 || r === n.length - 1 ? [] : n.slice(r + 1).filter(t.isTag);
}
function R(e) {
    return {
        xmlMode: !!e.xmlMode,
        lowerCaseAttributeNames: !!e.lowerCaseAttributeNames,
        lowerCaseTags: !!e.lowerCaseTags,
        quirksMode: !!e.quirksMode,
        cacheResults: !!e.cacheResults,
        pseudos: e.pseudos,
        adapter: e.adapter,
        equals: e.equals
    };
}
var D2 = (e, t, n, r, i)=>{
    let s = i(t, R(n), r);
    return s === q2.trueFunc ? e : s === q2.falseFunc ? q2.falseFunc : (o)=>s(o) && e(o);
}, N3 = {
    is: D2,
    matches: D2,
    where: D2,
    not (e, t, n, r, i) {
        let s = i(t, R(n), r);
        return s === q2.falseFunc ? e : s === q2.trueFunc ? q2.falseFunc : (o)=>!s(o) && e(o);
    },
    has (e, t, n, r, i) {
        let { adapter: s  } = n, o = R(n);
        o.relativeSelector = !0;
        let a = t.some((c)=>c.some(A4)) ? [
            V1
        ] : void 0, u = i(t, o, a);
        if (u === q2.falseFunc) return q2.falseFunc;
        let l = q3(u, s);
        if (a && u !== q2.trueFunc) {
            let { shouldTestNextSiblings: c = !1  } = u;
            return (f)=>{
                if (!e(f)) return !1;
                a[0] = f;
                let v = s.getChildren(f), ee = c ? [
                    ...v,
                    ...M1(f, s)
                ] : v;
                return s.existsOne(l, ee);
            };
        }
        return (c)=>e(c) && s.existsOne(l, s.getChildren(c));
    }
};
function B2(e, t, n, r, i) {
    var s;
    let { name: o , data: a  } = t;
    if (Array.isArray(a)) {
        if (!(o in N3)) throw new Error(`Unknown pseudo-class :${o}(${a})`);
        return N3[o](e, a, n, r, i);
    }
    let u = (s = n.pseudos) === null || s === void 0 ? void 0 : s[o], l = typeof u == "string" ? u : O2[o];
    if (typeof l == "string") {
        if (a != null) throw new Error(`Pseudo ${o} doesn't have any arguments`);
        let c = G1(l);
        return N3.is(e, c, n, r, i);
    }
    if (typeof u == "function") return k2(u, o, a, 1), (c)=>u(c, a) && e(c);
    if (o in S1) return S1[o](e, a, n, r);
    if (o in F3) {
        let c1 = F3[o];
        return k2(c1, o, a, 2), (f)=>c1(f, n, a) && e(f);
    }
    throw new Error(`Unknown pseudo-class :${o}`);
}
function $1(e, t) {
    let n = t.getParent(e);
    return n && t.isTag(n) ? n : null;
}
function G2(e, t, n, r, i) {
    let { adapter: s , equals: o  } = n;
    switch(t.type){
        case e1.PseudoElement:
            throw new Error("Pseudo-elements are not supported by css-select");
        case e1.ColumnCombinator:
            throw new Error("Column combinators are not yet supported by css-select");
        case e1.Attribute:
            {
                if (t.namespace != null) throw new Error("Namespaced attributes are not yet supported by css-select");
                return (!n.xmlMode || n.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), z2[t.action](e, t, n);
            }
        case e1.Pseudo:
            return B2(e, t, n, r, i);
        case e1.Tag:
            {
                if (t.namespace != null) throw new Error("Namespaced tag names are not yet supported by css-select");
                let { name: a  } = t;
                return (!n.xmlMode || n.lowerCaseTags) && (a = a.toLowerCase()), function(l) {
                    return s.getName(l) === a && e(l);
                };
            }
        case e1.Descendant:
            {
                if (n.cacheResults === !1 || typeof WeakSet > "u") return function(l) {
                    let c = l;
                    for(; c = $1(c, s);)if (e(c)) return !0;
                    return !1;
                };
                let a1 = new WeakSet;
                return function(l) {
                    let c = l;
                    for(; c = $1(c, s);)if (!a1.has(c)) {
                        if (s.isTag(c) && e(c)) return !0;
                        a1.add(c);
                    }
                    return !1;
                };
            }
        case "_flexibleDescendant":
            return function(u) {
                let l = u;
                do if (e(l)) return !0;
                while (l = $1(l, s))
                return !1;
            };
        case e1.Parent:
            return function(u) {
                return s.getChildren(u).some((l)=>s.isTag(l) && e(l));
            };
        case e1.Child:
            return function(u) {
                let l = s.getParent(u);
                return l != null && s.isTag(l) && e(l);
            };
        case e1.Sibling:
            return function(u) {
                let l = s.getSiblings(u);
                for(let c = 0; c < l.length; c++){
                    let f = l[c];
                    if (o(u, f)) break;
                    if (s.isTag(f) && e(f)) return !0;
                }
                return !1;
            };
        case e1.Adjacent:
            return s.prevElementSibling ? function(u) {
                let l = s.prevElementSibling(u);
                return l != null && e(l);
            } : function(u) {
                let l = s.getSiblings(u), c;
                for(let f = 0; f < l.length; f++){
                    let v = l[f];
                    if (o(u, v)) break;
                    s.isTag(v) && (c = v);
                }
                return !!c && e(c);
            };
        case e1.Universal:
            {
                if (t.namespace != null && t.namespace !== "*") throw new Error("Namespaced universal selectors are not yet supported by css-select");
                return e;
            }
    }
}
function U3(e, t, n) {
    let r = P(e, t, n);
    return q3(r, t.adapter);
}
function P(e, t, n) {
    let r = typeof e == "string" ? G1(e) : e;
    return x5(r, t, n);
}
function X1(e) {
    return e.type === e1.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some((t)=>t.some(X1)));
}
var oe = {
    type: e1.Descendant
}, ue = {
    type: "_flexibleDescendant"
}, ae = {
    type: e1.Pseudo,
    name: "scope",
    data: null
};
function le(e, { adapter: t  }, n) {
    let r = !!n?.every((i)=>{
        let s = t.isTag(i) && t.getParent(i);
        return i === V1 || s && t.isTag(s);
    });
    for (let i of e){
        if (!(i.length > 0 && A4(i[0]) && i[0].type !== e1.Descendant)) if (r && !i.some(X1)) i.unshift(oe);
        else continue;
        i.unshift(ae);
    }
}
function x5(e, t, n) {
    var r;
    e.forEach(_2), n = (r = t.context) !== null && r !== void 0 ? r : n;
    let i = Array.isArray(n), s = n && (Array.isArray(n) ? n : [
        n
    ]);
    if (t.relativeSelector !== !1) le(e, t, s);
    else if (e.some((u)=>u.length > 0 && A4(u[0]))) throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    let o = !1, a = e.map((u)=>{
        if (u.length >= 2) {
            let [l, c] = u;
            l.type !== e1.Pseudo || l.name !== "scope" || (i && c.type === e1.Descendant ? u[1] = ue : (c.type === e1.Adjacent || c.type === e1.Sibling) && (o = !0));
        }
        return ce(u, t, s);
    }).reduce(fe, q2.falseFunc);
    return a.shouldTestNextSiblings = o, a;
}
function ce(e, t, n) {
    var r;
    return e.reduce((i, s)=>i === q2.falseFunc ? q2.falseFunc : G2(i, s, t, n, x5), (r = t.rootFunc) !== null && r !== void 0 ? r : q2.trueFunc);
}
function fe(e, t) {
    return t === q2.falseFunc || e === q2.trueFunc ? e : e === q2.falseFunc || t === q2.trueFunc ? t : function(r) {
        return e(r) || t(r);
    };
}
var Y = (e, t)=>e === t, ge = {
    adapter: mod,
    equals: Y
};
function I1(e) {
    var t, n, r, i;
    let s = e ?? ge;
    return (t = s.adapter) !== null && t !== void 0 || (s.adapter = mod), (n = s.equals) !== null && n !== void 0 || (s.equals = (i = (r = s.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && i !== void 0 ? i : Y), s;
}
function j3(e) {
    return function(n, r, i) {
        let s = I1(r);
        return e(n, s, i);
    };
}
var Be = j3(U3), Ge = j3(P), Xe = j3(x5);
function Z1(e) {
    return function(n, r, i) {
        let s = I1(i);
        typeof n != "function" && (n = P(n, s, r));
        let o = pe(r, s.adapter, n.shouldTestNextSiblings);
        return e(n, o, s);
    };
}
function pe(e, t, n = !1) {
    return n && (e = de(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function de(e, t) {
    let n = Array.isArray(e) ? e.slice(0) : [
        e
    ], r = n.length;
    for(let i = 0; i < r; i++){
        let s = M1(n[i], t);
        n.push(...s);
    }
    return n;
}
var he = Z1((e, t, n)=>e === q2.falseFunc || !t || t.length === 0 ? [] : n.adapter.findAll(e, t)), Je = Z1((e, t, n)=>e === q2.falseFunc || !t || t.length === 0 ? null : n.adapter.findOne(e, t));
function Qe(e, t, n) {
    let r = I1(n);
    return (typeof t == "function" ? t : U3(t, r))(e);
}
var Ye = he;
const mod1 = {
    _compileToken: Xe,
    _compileUnsafe: Ge,
    aliases: O2,
    compile: Be,
    default: Ye,
    filters: S1,
    is: Qe,
    prepareContext: pe,
    pseudos: F3,
    selectAll: he,
    selectOne: Je
};
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var au = Object.create;
var H2 = Object.defineProperty;
var tu = Object.getOwnPropertyDescriptor;
var ou = Object.getOwnPropertyNames;
var su = Object.getPrototypeOf, cu = Object.prototype.hasOwnProperty;
var lu = (o, a)=>()=>(a || o((a = {
            exports: {}
        }).exports, a), a.exports);
var iu = (o, a, l, i)=>{
    if (a && typeof a == "object" || typeof a == "function") for (let n of ou(a))!cu.call(o, n) && n !== l && H2(o, n, {
        get: ()=>a[n],
        enumerable: !(i = tu(a, n)) || i.enumerable
    });
    return o;
};
var nu = (o, a, l)=>(l = o != null ? au(su(o)) : {}, iu(a || !o || !o.__esModule ? H2(l, "default", {
        value: o,
        enumerable: !0
    }) : l, o));
var I2 = lu((v, m)=>{
    (function(o) {
        var a = typeof v == "object" && v, l = typeof m == "object" && m && m.exports == a && m, i = typeof __global$ == "object" && __global$;
        (i.global === i || i.window === i) && (o = i);
        var n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, z = /[\x01-\x7F]/g, j = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, k = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, d = {
            "\xAD": "shy",
            "\u200C": "zwnj",
            "\u200D": "zwj",
            "\u200E": "lrm",
            "\u2063": "ic",
            "\u2062": "it",
            "\u2061": "af",
            "\u200F": "rlm",
            "\u200B": "ZeroWidthSpace",
            "\u2060": "NoBreak",
            "\u0311": "DownBreve",
            "\u20DB": "tdot",
            "\u20DC": "DotDot",
            "	": "Tab",
            "\n": "NewLine",
            "\u2008": "puncsp",
            "\u205F": "MediumSpace",
            "\u2009": "thinsp",
            "\u200A": "hairsp",
            "\u2004": "emsp13",
            "\u2002": "ensp",
            "\u2005": "emsp14",
            "\u2003": "emsp",
            "\u2007": "numsp",
            "\xA0": "nbsp",
            "\u205F\u200A": "ThickSpace",
            "\u203E": "oline",
            _: "lowbar",
            "\u2010": "dash",
            "\u2013": "ndash",
            "\u2014": "mdash",
            "\u2015": "horbar",
            ",": "comma",
            ";": "semi",
            "\u204F": "bsemi",
            ":": "colon",
            "\u2A74": "Colone",
            "!": "excl",
            "\xA1": "iexcl",
            "?": "quest",
            "\xBF": "iquest",
            ".": "period",
            "\u2025": "nldr",
            "\u2026": "mldr",
            "\xB7": "middot",
            "'": "apos",
            "\u2018": "lsquo",
            "\u2019": "rsquo",
            "\u201A": "sbquo",
            "\u2039": "lsaquo",
            "\u203A": "rsaquo",
            '"': "quot",
            "\u201C": "ldquo",
            "\u201D": "rdquo",
            "\u201E": "bdquo",
            "\xAB": "laquo",
            "\xBB": "raquo",
            "(": "lpar",
            ")": "rpar",
            "[": "lsqb",
            "]": "rsqb",
            "{": "lcub",
            "}": "rcub",
            "\u2308": "lceil",
            "\u2309": "rceil",
            "\u230A": "lfloor",
            "\u230B": "rfloor",
            "\u2985": "lopar",
            "\u2986": "ropar",
            "\u298B": "lbrke",
            "\u298C": "rbrke",
            "\u298D": "lbrkslu",
            "\u298E": "rbrksld",
            "\u298F": "lbrksld",
            "\u2990": "rbrkslu",
            "\u2991": "langd",
            "\u2992": "rangd",
            "\u2993": "lparlt",
            "\u2994": "rpargt",
            "\u2995": "gtlPar",
            "\u2996": "ltrPar",
            "\u27E6": "lobrk",
            "\u27E7": "robrk",
            "\u27E8": "lang",
            "\u27E9": "rang",
            "\u27EA": "Lang",
            "\u27EB": "Rang",
            "\u27EC": "loang",
            "\u27ED": "roang",
            "\u2772": "lbbrk",
            "\u2773": "rbbrk",
            "\u2016": "Vert",
            "\xA7": "sect",
            "\xB6": "para",
            "@": "commat",
            "*": "ast",
            "/": "sol",
            undefined: null,
            "&": "amp",
            "#": "num",
            "%": "percnt",
            "\u2030": "permil",
            "\u2031": "pertenk",
            "\u2020": "dagger",
            "\u2021": "Dagger",
            "\u2022": "bull",
            "\u2043": "hybull",
            "\u2032": "prime",
            "\u2033": "Prime",
            "\u2034": "tprime",
            "\u2057": "qprime",
            "\u2035": "bprime",
            "\u2041": "caret",
            "`": "grave",
            "\xB4": "acute",
            "\u02DC": "tilde",
            "^": "Hat",
            "\xAF": "macr",
            "\u02D8": "breve",
            "\u02D9": "dot",
            "\xA8": "die",
            "\u02DA": "ring",
            "\u02DD": "dblac",
            "\xB8": "cedil",
            "\u02DB": "ogon",
            "\u02C6": "circ",
            "\u02C7": "caron",
            "\xB0": "deg",
            "\xA9": "copy",
            "\xAE": "reg",
            "\u2117": "copysr",
            "\u2118": "wp",
            "\u211E": "rx",
            "\u2127": "mho",
            "\u2129": "iiota",
            "\u2190": "larr",
            "\u219A": "nlarr",
            "\u2192": "rarr",
            "\u219B": "nrarr",
            "\u2191": "uarr",
            "\u2193": "darr",
            "\u2194": "harr",
            "\u21AE": "nharr",
            "\u2195": "varr",
            "\u2196": "nwarr",
            "\u2197": "nearr",
            "\u2198": "searr",
            "\u2199": "swarr",
            "\u219D": "rarrw",
            "\u219D\u0338": "nrarrw",
            "\u219E": "Larr",
            "\u219F": "Uarr",
            "\u21A0": "Rarr",
            "\u21A1": "Darr",
            "\u21A2": "larrtl",
            "\u21A3": "rarrtl",
            "\u21A4": "mapstoleft",
            "\u21A5": "mapstoup",
            "\u21A6": "map",
            "\u21A7": "mapstodown",
            "\u21A9": "larrhk",
            "\u21AA": "rarrhk",
            "\u21AB": "larrlp",
            "\u21AC": "rarrlp",
            "\u21AD": "harrw",
            "\u21B0": "lsh",
            "\u21B1": "rsh",
            "\u21B2": "ldsh",
            "\u21B3": "rdsh",
            "\u21B5": "crarr",
            "\u21B6": "cularr",
            "\u21B7": "curarr",
            "\u21BA": "olarr",
            "\u21BB": "orarr",
            "\u21BC": "lharu",
            "\u21BD": "lhard",
            "\u21BE": "uharr",
            "\u21BF": "uharl",
            "\u21C0": "rharu",
            "\u21C1": "rhard",
            "\u21C2": "dharr",
            "\u21C3": "dharl",
            "\u21C4": "rlarr",
            "\u21C5": "udarr",
            "\u21C6": "lrarr",
            "\u21C7": "llarr",
            "\u21C8": "uuarr",
            "\u21C9": "rrarr",
            "\u21CA": "ddarr",
            "\u21CB": "lrhar",
            "\u21CC": "rlhar",
            "\u21D0": "lArr",
            "\u21CD": "nlArr",
            "\u21D1": "uArr",
            "\u21D2": "rArr",
            "\u21CF": "nrArr",
            "\u21D3": "dArr",
            "\u21D4": "iff",
            "\u21CE": "nhArr",
            "\u21D5": "vArr",
            "\u21D6": "nwArr",
            "\u21D7": "neArr",
            "\u21D8": "seArr",
            "\u21D9": "swArr",
            "\u21DA": "lAarr",
            "\u21DB": "rAarr",
            "\u21DD": "zigrarr",
            "\u21E4": "larrb",
            "\u21E5": "rarrb",
            "\u21F5": "duarr",
            "\u21FD": "loarr",
            "\u21FE": "roarr",
            "\u21FF": "hoarr",
            "\u2200": "forall",
            "\u2201": "comp",
            "\u2202": "part",
            "\u2202\u0338": "npart",
            "\u2203": "exist",
            "\u2204": "nexist",
            "\u2205": "empty",
            "\u2207": "Del",
            "\u2208": "in",
            "\u2209": "notin",
            "\u220B": "ni",
            "\u220C": "notni",
            "\u03F6": "bepsi",
            "\u220F": "prod",
            "\u2210": "coprod",
            "\u2211": "sum",
            "+": "plus",
            "\xB1": "pm",
            "\xF7": "div",
            "\xD7": "times",
            "<": "lt",
            "\u226E": "nlt",
            "<\u20D2": "nvlt",
            "=": "equals",
            "\u2260": "ne",
            "=\u20E5": "bne",
            "\u2A75": "Equal",
            ">": "gt",
            "\u226F": "ngt",
            ">\u20D2": "nvgt",
            "\xAC": "not",
            "|": "vert",
            "\xA6": "brvbar",
            "\u2212": "minus",
            "\u2213": "mp",
            "\u2214": "plusdo",
            "\u2044": "frasl",
            "\u2216": "setmn",
            "\u2217": "lowast",
            "\u2218": "compfn",
            "\u221A": "Sqrt",
            "\u221D": "prop",
            "\u221E": "infin",
            "\u221F": "angrt",
            "\u2220": "ang",
            "\u2220\u20D2": "nang",
            "\u2221": "angmsd",
            "\u2222": "angsph",
            "\u2223": "mid",
            "\u2224": "nmid",
            "\u2225": "par",
            "\u2226": "npar",
            "\u2227": "and",
            "\u2228": "or",
            "\u2229": "cap",
            "\u2229\uFE00": "caps",
            "\u222A": "cup",
            "\u222A\uFE00": "cups",
            "\u222B": "int",
            "\u222C": "Int",
            "\u222D": "tint",
            "\u2A0C": "qint",
            "\u222E": "oint",
            "\u222F": "Conint",
            "\u2230": "Cconint",
            "\u2231": "cwint",
            "\u2232": "cwconint",
            "\u2233": "awconint",
            "\u2234": "there4",
            "\u2235": "becaus",
            "\u2236": "ratio",
            "\u2237": "Colon",
            "\u2238": "minusd",
            "\u223A": "mDDot",
            "\u223B": "homtht",
            "\u223C": "sim",
            "\u2241": "nsim",
            "\u223C\u20D2": "nvsim",
            "\u223D": "bsim",
            "\u223D\u0331": "race",
            "\u223E": "ac",
            "\u223E\u0333": "acE",
            "\u223F": "acd",
            "\u2240": "wr",
            "\u2242": "esim",
            "\u2242\u0338": "nesim",
            "\u2243": "sime",
            "\u2244": "nsime",
            "\u2245": "cong",
            "\u2247": "ncong",
            "\u2246": "simne",
            "\u2248": "ap",
            "\u2249": "nap",
            "\u224A": "ape",
            "\u224B": "apid",
            "\u224B\u0338": "napid",
            "\u224C": "bcong",
            "\u224D": "CupCap",
            "\u226D": "NotCupCap",
            "\u224D\u20D2": "nvap",
            "\u224E": "bump",
            "\u224E\u0338": "nbump",
            "\u224F": "bumpe",
            "\u224F\u0338": "nbumpe",
            "\u2250": "doteq",
            "\u2250\u0338": "nedot",
            "\u2251": "eDot",
            "\u2252": "efDot",
            "\u2253": "erDot",
            "\u2254": "colone",
            "\u2255": "ecolon",
            "\u2256": "ecir",
            "\u2257": "cire",
            "\u2259": "wedgeq",
            "\u225A": "veeeq",
            "\u225C": "trie",
            "\u225F": "equest",
            "\u2261": "equiv",
            "\u2262": "nequiv",
            "\u2261\u20E5": "bnequiv",
            "\u2264": "le",
            "\u2270": "nle",
            "\u2264\u20D2": "nvle",
            "\u2265": "ge",
            "\u2271": "nge",
            "\u2265\u20D2": "nvge",
            "\u2266": "lE",
            "\u2266\u0338": "nlE",
            "\u2267": "gE",
            "\u2267\u0338": "ngE",
            "\u2268\uFE00": "lvnE",
            "\u2268": "lnE",
            "\u2269": "gnE",
            "\u2269\uFE00": "gvnE",
            "\u226A": "ll",
            "\u226A\u0338": "nLtv",
            "\u226A\u20D2": "nLt",
            "\u226B": "gg",
            "\u226B\u0338": "nGtv",
            "\u226B\u20D2": "nGt",
            "\u226C": "twixt",
            "\u2272": "lsim",
            "\u2274": "nlsim",
            "\u2273": "gsim",
            "\u2275": "ngsim",
            "\u2276": "lg",
            "\u2278": "ntlg",
            "\u2277": "gl",
            "\u2279": "ntgl",
            "\u227A": "pr",
            "\u2280": "npr",
            "\u227B": "sc",
            "\u2281": "nsc",
            "\u227C": "prcue",
            "\u22E0": "nprcue",
            "\u227D": "sccue",
            "\u22E1": "nsccue",
            "\u227E": "prsim",
            "\u227F": "scsim",
            "\u227F\u0338": "NotSucceedsTilde",
            "\u2282": "sub",
            "\u2284": "nsub",
            "\u2282\u20D2": "vnsub",
            "\u2283": "sup",
            "\u2285": "nsup",
            "\u2283\u20D2": "vnsup",
            "\u2286": "sube",
            "\u2288": "nsube",
            "\u2287": "supe",
            "\u2289": "nsupe",
            "\u228A\uFE00": "vsubne",
            "\u228A": "subne",
            "\u228B\uFE00": "vsupne",
            "\u228B": "supne",
            "\u228D": "cupdot",
            "\u228E": "uplus",
            "\u228F": "sqsub",
            "\u228F\u0338": "NotSquareSubset",
            "\u2290": "sqsup",
            "\u2290\u0338": "NotSquareSuperset",
            "\u2291": "sqsube",
            "\u22E2": "nsqsube",
            "\u2292": "sqsupe",
            "\u22E3": "nsqsupe",
            "\u2293": "sqcap",
            "\u2293\uFE00": "sqcaps",
            "\u2294": "sqcup",
            "\u2294\uFE00": "sqcups",
            "\u2295": "oplus",
            "\u2296": "ominus",
            "\u2297": "otimes",
            "\u2298": "osol",
            "\u2299": "odot",
            "\u229A": "ocir",
            "\u229B": "oast",
            "\u229D": "odash",
            "\u229E": "plusb",
            "\u229F": "minusb",
            "\u22A0": "timesb",
            "\u22A1": "sdotb",
            "\u22A2": "vdash",
            "\u22AC": "nvdash",
            "\u22A3": "dashv",
            "\u22A4": "top",
            "\u22A5": "bot",
            "\u22A7": "models",
            "\u22A8": "vDash",
            "\u22AD": "nvDash",
            "\u22A9": "Vdash",
            "\u22AE": "nVdash",
            "\u22AA": "Vvdash",
            "\u22AB": "VDash",
            "\u22AF": "nVDash",
            "\u22B0": "prurel",
            "\u22B2": "vltri",
            "\u22EA": "nltri",
            "\u22B3": "vrtri",
            "\u22EB": "nrtri",
            "\u22B4": "ltrie",
            "\u22EC": "nltrie",
            "\u22B4\u20D2": "nvltrie",
            "\u22B5": "rtrie",
            "\u22ED": "nrtrie",
            "\u22B5\u20D2": "nvrtrie",
            "\u22B6": "origof",
            "\u22B7": "imof",
            "\u22B8": "mumap",
            "\u22B9": "hercon",
            "\u22BA": "intcal",
            "\u22BB": "veebar",
            "\u22BD": "barvee",
            "\u22BE": "angrtvb",
            "\u22BF": "lrtri",
            "\u22C0": "Wedge",
            "\u22C1": "Vee",
            "\u22C2": "xcap",
            "\u22C3": "xcup",
            "\u22C4": "diam",
            "\u22C5": "sdot",
            "\u22C6": "Star",
            "\u22C7": "divonx",
            "\u22C8": "bowtie",
            "\u22C9": "ltimes",
            "\u22CA": "rtimes",
            "\u22CB": "lthree",
            "\u22CC": "rthree",
            "\u22CD": "bsime",
            "\u22CE": "cuvee",
            "\u22CF": "cuwed",
            "\u22D0": "Sub",
            "\u22D1": "Sup",
            "\u22D2": "Cap",
            "\u22D3": "Cup",
            "\u22D4": "fork",
            "\u22D5": "epar",
            "\u22D6": "ltdot",
            "\u22D7": "gtdot",
            "\u22D8": "Ll",
            "\u22D8\u0338": "nLl",
            "\u22D9": "Gg",
            "\u22D9\u0338": "nGg",
            "\u22DA\uFE00": "lesg",
            "\u22DA": "leg",
            "\u22DB": "gel",
            "\u22DB\uFE00": "gesl",
            "\u22DE": "cuepr",
            "\u22DF": "cuesc",
            "\u22E6": "lnsim",
            "\u22E7": "gnsim",
            "\u22E8": "prnsim",
            "\u22E9": "scnsim",
            "\u22EE": "vellip",
            "\u22EF": "ctdot",
            "\u22F0": "utdot",
            "\u22F1": "dtdot",
            "\u22F2": "disin",
            "\u22F3": "isinsv",
            "\u22F4": "isins",
            "\u22F5": "isindot",
            "\u22F5\u0338": "notindot",
            "\u22F6": "notinvc",
            "\u22F7": "notinvb",
            "\u22F9": "isinE",
            "\u22F9\u0338": "notinE",
            "\u22FA": "nisd",
            "\u22FB": "xnis",
            "\u22FC": "nis",
            "\u22FD": "notnivc",
            "\u22FE": "notnivb",
            "\u2305": "barwed",
            "\u2306": "Barwed",
            "\u230C": "drcrop",
            "\u230D": "dlcrop",
            "\u230E": "urcrop",
            "\u230F": "ulcrop",
            "\u2310": "bnot",
            "\u2312": "profline",
            "\u2313": "profsurf",
            "\u2315": "telrec",
            "\u2316": "target",
            "\u231C": "ulcorn",
            "\u231D": "urcorn",
            "\u231E": "dlcorn",
            "\u231F": "drcorn",
            "\u2322": "frown",
            "\u2323": "smile",
            "\u232D": "cylcty",
            "\u232E": "profalar",
            "\u2336": "topbot",
            "\u233D": "ovbar",
            "\u233F": "solbar",
            "\u237C": "angzarr",
            "\u23B0": "lmoust",
            "\u23B1": "rmoust",
            "\u23B4": "tbrk",
            "\u23B5": "bbrk",
            "\u23B6": "bbrktbrk",
            "\u23DC": "OverParenthesis",
            "\u23DD": "UnderParenthesis",
            "\u23DE": "OverBrace",
            "\u23DF": "UnderBrace",
            "\u23E2": "trpezium",
            "\u23E7": "elinters",
            "\u2423": "blank",
            "\u2500": "boxh",
            "\u2502": "boxv",
            "\u250C": "boxdr",
            "\u2510": "boxdl",
            "\u2514": "boxur",
            "\u2518": "boxul",
            "\u251C": "boxvr",
            "\u2524": "boxvl",
            "\u252C": "boxhd",
            "\u2534": "boxhu",
            "\u253C": "boxvh",
            "\u2550": "boxH",
            "\u2551": "boxV",
            "\u2552": "boxdR",
            "\u2553": "boxDr",
            "\u2554": "boxDR",
            "\u2555": "boxdL",
            "\u2556": "boxDl",
            "\u2557": "boxDL",
            "\u2558": "boxuR",
            "\u2559": "boxUr",
            "\u255A": "boxUR",
            "\u255B": "boxuL",
            "\u255C": "boxUl",
            "\u255D": "boxUL",
            "\u255E": "boxvR",
            "\u255F": "boxVr",
            "\u2560": "boxVR",
            "\u2561": "boxvL",
            "\u2562": "boxVl",
            "\u2563": "boxVL",
            "\u2564": "boxHd",
            "\u2565": "boxhD",
            "\u2566": "boxHD",
            "\u2567": "boxHu",
            "\u2568": "boxhU",
            "\u2569": "boxHU",
            "\u256A": "boxvH",
            "\u256B": "boxVh",
            "\u256C": "boxVH",
            "\u2580": "uhblk",
            "\u2584": "lhblk",
            "\u2588": "block",
            "\u2591": "blk14",
            "\u2592": "blk12",
            "\u2593": "blk34",
            "\u25A1": "squ",
            "\u25AA": "squf",
            "\u25AB": "EmptyVerySmallSquare",
            "\u25AD": "rect",
            "\u25AE": "marker",
            "\u25B1": "fltns",
            "\u25B3": "xutri",
            "\u25B4": "utrif",
            "\u25B5": "utri",
            "\u25B8": "rtrif",
            "\u25B9": "rtri",
            "\u25BD": "xdtri",
            "\u25BE": "dtrif",
            "\u25BF": "dtri",
            "\u25C2": "ltrif",
            "\u25C3": "ltri",
            "\u25CA": "loz",
            "\u25CB": "cir",
            "\u25EC": "tridot",
            "\u25EF": "xcirc",
            "\u25F8": "ultri",
            "\u25F9": "urtri",
            "\u25FA": "lltri",
            "\u25FB": "EmptySmallSquare",
            "\u25FC": "FilledSmallSquare",
            "\u2605": "starf",
            "\u2606": "star",
            "\u260E": "phone",
            "\u2640": "female",
            "\u2642": "male",
            "\u2660": "spades",
            "\u2663": "clubs",
            "\u2665": "hearts",
            "\u2666": "diams",
            "\u266A": "sung",
            "\u2713": "check",
            "\u2717": "cross",
            "\u2720": "malt",
            "\u2736": "sext",
            "\u2758": "VerticalSeparator",
            "\u27C8": "bsolhsub",
            "\u27C9": "suphsol",
            "\u27F5": "xlarr",
            "\u27F6": "xrarr",
            "\u27F7": "xharr",
            "\u27F8": "xlArr",
            "\u27F9": "xrArr",
            "\u27FA": "xhArr",
            "\u27FC": "xmap",
            "\u27FF": "dzigrarr",
            "\u2902": "nvlArr",
            "\u2903": "nvrArr",
            "\u2904": "nvHarr",
            "\u2905": "Map",
            "\u290C": "lbarr",
            "\u290D": "rbarr",
            "\u290E": "lBarr",
            "\u290F": "rBarr",
            "\u2910": "RBarr",
            "\u2911": "DDotrahd",
            "\u2912": "UpArrowBar",
            "\u2913": "DownArrowBar",
            "\u2916": "Rarrtl",
            "\u2919": "latail",
            "\u291A": "ratail",
            "\u291B": "lAtail",
            "\u291C": "rAtail",
            "\u291D": "larrfs",
            "\u291E": "rarrfs",
            "\u291F": "larrbfs",
            "\u2920": "rarrbfs",
            "\u2923": "nwarhk",
            "\u2924": "nearhk",
            "\u2925": "searhk",
            "\u2926": "swarhk",
            "\u2927": "nwnear",
            "\u2928": "toea",
            "\u2929": "tosa",
            "\u292A": "swnwar",
            "\u2933": "rarrc",
            "\u2933\u0338": "nrarrc",
            "\u2935": "cudarrr",
            "\u2936": "ldca",
            "\u2937": "rdca",
            "\u2938": "cudarrl",
            "\u2939": "larrpl",
            "\u293C": "curarrm",
            "\u293D": "cularrp",
            "\u2945": "rarrpl",
            "\u2948": "harrcir",
            "\u2949": "Uarrocir",
            "\u294A": "lurdshar",
            "\u294B": "ldrushar",
            "\u294E": "LeftRightVector",
            "\u294F": "RightUpDownVector",
            "\u2950": "DownLeftRightVector",
            "\u2951": "LeftUpDownVector",
            "\u2952": "LeftVectorBar",
            "\u2953": "RightVectorBar",
            "\u2954": "RightUpVectorBar",
            "\u2955": "RightDownVectorBar",
            "\u2956": "DownLeftVectorBar",
            "\u2957": "DownRightVectorBar",
            "\u2958": "LeftUpVectorBar",
            "\u2959": "LeftDownVectorBar",
            "\u295A": "LeftTeeVector",
            "\u295B": "RightTeeVector",
            "\u295C": "RightUpTeeVector",
            "\u295D": "RightDownTeeVector",
            "\u295E": "DownLeftTeeVector",
            "\u295F": "DownRightTeeVector",
            "\u2960": "LeftUpTeeVector",
            "\u2961": "LeftDownTeeVector",
            "\u2962": "lHar",
            "\u2963": "uHar",
            "\u2964": "rHar",
            "\u2965": "dHar",
            "\u2966": "luruhar",
            "\u2967": "ldrdhar",
            "\u2968": "ruluhar",
            "\u2969": "rdldhar",
            "\u296A": "lharul",
            "\u296B": "llhard",
            "\u296C": "rharul",
            "\u296D": "lrhard",
            "\u296E": "udhar",
            "\u296F": "duhar",
            "\u2970": "RoundImplies",
            "\u2971": "erarr",
            "\u2972": "simrarr",
            "\u2973": "larrsim",
            "\u2974": "rarrsim",
            "\u2975": "rarrap",
            "\u2976": "ltlarr",
            "\u2978": "gtrarr",
            "\u2979": "subrarr",
            "\u297B": "suplarr",
            "\u297C": "lfisht",
            "\u297D": "rfisht",
            "\u297E": "ufisht",
            "\u297F": "dfisht",
            "\u299A": "vzigzag",
            "\u299C": "vangrt",
            "\u299D": "angrtvbd",
            "\u29A4": "ange",
            "\u29A5": "range",
            "\u29A6": "dwangle",
            "\u29A7": "uwangle",
            "\u29A8": "angmsdaa",
            "\u29A9": "angmsdab",
            "\u29AA": "angmsdac",
            "\u29AB": "angmsdad",
            "\u29AC": "angmsdae",
            "\u29AD": "angmsdaf",
            "\u29AE": "angmsdag",
            "\u29AF": "angmsdah",
            "\u29B0": "bemptyv",
            "\u29B1": "demptyv",
            "\u29B2": "cemptyv",
            "\u29B3": "raemptyv",
            "\u29B4": "laemptyv",
            "\u29B5": "ohbar",
            "\u29B6": "omid",
            "\u29B7": "opar",
            "\u29B9": "operp",
            "\u29BB": "olcross",
            "\u29BC": "odsold",
            "\u29BE": "olcir",
            "\u29BF": "ofcir",
            "\u29C0": "olt",
            "\u29C1": "ogt",
            "\u29C2": "cirscir",
            "\u29C3": "cirE",
            "\u29C4": "solb",
            "\u29C5": "bsolb",
            "\u29C9": "boxbox",
            "\u29CD": "trisb",
            "\u29CE": "rtriltri",
            "\u29CF": "LeftTriangleBar",
            "\u29CF\u0338": "NotLeftTriangleBar",
            "\u29D0": "RightTriangleBar",
            "\u29D0\u0338": "NotRightTriangleBar",
            "\u29DC": "iinfin",
            "\u29DD": "infintie",
            "\u29DE": "nvinfin",
            "\u29E3": "eparsl",
            "\u29E4": "smeparsl",
            "\u29E5": "eqvparsl",
            "\u29EB": "lozf",
            "\u29F4": "RuleDelayed",
            "\u29F6": "dsol",
            "\u2A00": "xodot",
            "\u2A01": "xoplus",
            "\u2A02": "xotime",
            "\u2A04": "xuplus",
            "\u2A06": "xsqcup",
            "\u2A0D": "fpartint",
            "\u2A10": "cirfnint",
            "\u2A11": "awint",
            "\u2A12": "rppolint",
            "\u2A13": "scpolint",
            "\u2A14": "npolint",
            "\u2A15": "pointint",
            "\u2A16": "quatint",
            "\u2A17": "intlarhk",
            "\u2A22": "pluscir",
            "\u2A23": "plusacir",
            "\u2A24": "simplus",
            "\u2A25": "plusdu",
            "\u2A26": "plussim",
            "\u2A27": "plustwo",
            "\u2A29": "mcomma",
            "\u2A2A": "minusdu",
            "\u2A2D": "loplus",
            "\u2A2E": "roplus",
            "\u2A2F": "Cross",
            "\u2A30": "timesd",
            "\u2A31": "timesbar",
            "\u2A33": "smashp",
            "\u2A34": "lotimes",
            "\u2A35": "rotimes",
            "\u2A36": "otimesas",
            "\u2A37": "Otimes",
            "\u2A38": "odiv",
            "\u2A39": "triplus",
            "\u2A3A": "triminus",
            "\u2A3B": "tritime",
            "\u2A3C": "iprod",
            "\u2A3F": "amalg",
            "\u2A40": "capdot",
            "\u2A42": "ncup",
            "\u2A43": "ncap",
            "\u2A44": "capand",
            "\u2A45": "cupor",
            "\u2A46": "cupcap",
            "\u2A47": "capcup",
            "\u2A48": "cupbrcap",
            "\u2A49": "capbrcup",
            "\u2A4A": "cupcup",
            "\u2A4B": "capcap",
            "\u2A4C": "ccups",
            "\u2A4D": "ccaps",
            "\u2A50": "ccupssm",
            "\u2A53": "And",
            "\u2A54": "Or",
            "\u2A55": "andand",
            "\u2A56": "oror",
            "\u2A57": "orslope",
            "\u2A58": "andslope",
            "\u2A5A": "andv",
            "\u2A5B": "orv",
            "\u2A5C": "andd",
            "\u2A5D": "ord",
            "\u2A5F": "wedbar",
            "\u2A66": "sdote",
            "\u2A6A": "simdot",
            "\u2A6D": "congdot",
            "\u2A6D\u0338": "ncongdot",
            "\u2A6E": "easter",
            "\u2A6F": "apacir",
            "\u2A70": "apE",
            "\u2A70\u0338": "napE",
            "\u2A71": "eplus",
            "\u2A72": "pluse",
            "\u2A73": "Esim",
            "\u2A77": "eDDot",
            "\u2A78": "equivDD",
            "\u2A79": "ltcir",
            "\u2A7A": "gtcir",
            "\u2A7B": "ltquest",
            "\u2A7C": "gtquest",
            "\u2A7D": "les",
            "\u2A7D\u0338": "nles",
            "\u2A7E": "ges",
            "\u2A7E\u0338": "nges",
            "\u2A7F": "lesdot",
            "\u2A80": "gesdot",
            "\u2A81": "lesdoto",
            "\u2A82": "gesdoto",
            "\u2A83": "lesdotor",
            "\u2A84": "gesdotol",
            "\u2A85": "lap",
            "\u2A86": "gap",
            "\u2A87": "lne",
            "\u2A88": "gne",
            "\u2A89": "lnap",
            "\u2A8A": "gnap",
            "\u2A8B": "lEg",
            "\u2A8C": "gEl",
            "\u2A8D": "lsime",
            "\u2A8E": "gsime",
            "\u2A8F": "lsimg",
            "\u2A90": "gsiml",
            "\u2A91": "lgE",
            "\u2A92": "glE",
            "\u2A93": "lesges",
            "\u2A94": "gesles",
            "\u2A95": "els",
            "\u2A96": "egs",
            "\u2A97": "elsdot",
            "\u2A98": "egsdot",
            "\u2A99": "el",
            "\u2A9A": "eg",
            "\u2A9D": "siml",
            "\u2A9E": "simg",
            "\u2A9F": "simlE",
            "\u2AA0": "simgE",
            "\u2AA1": "LessLess",
            "\u2AA1\u0338": "NotNestedLessLess",
            "\u2AA2": "GreaterGreater",
            "\u2AA2\u0338": "NotNestedGreaterGreater",
            "\u2AA4": "glj",
            "\u2AA5": "gla",
            "\u2AA6": "ltcc",
            "\u2AA7": "gtcc",
            "\u2AA8": "lescc",
            "\u2AA9": "gescc",
            "\u2AAA": "smt",
            "\u2AAB": "lat",
            "\u2AAC": "smte",
            "\u2AAC\uFE00": "smtes",
            "\u2AAD": "late",
            "\u2AAD\uFE00": "lates",
            "\u2AAE": "bumpE",
            "\u2AAF": "pre",
            "\u2AAF\u0338": "npre",
            "\u2AB0": "sce",
            "\u2AB0\u0338": "nsce",
            "\u2AB3": "prE",
            "\u2AB4": "scE",
            "\u2AB5": "prnE",
            "\u2AB6": "scnE",
            "\u2AB7": "prap",
            "\u2AB8": "scap",
            "\u2AB9": "prnap",
            "\u2ABA": "scnap",
            "\u2ABB": "Pr",
            "\u2ABC": "Sc",
            "\u2ABD": "subdot",
            "\u2ABE": "supdot",
            "\u2ABF": "subplus",
            "\u2AC0": "supplus",
            "\u2AC1": "submult",
            "\u2AC2": "supmult",
            "\u2AC3": "subedot",
            "\u2AC4": "supedot",
            "\u2AC5": "subE",
            "\u2AC5\u0338": "nsubE",
            "\u2AC6": "supE",
            "\u2AC6\u0338": "nsupE",
            "\u2AC7": "subsim",
            "\u2AC8": "supsim",
            "\u2ACB\uFE00": "vsubnE",
            "\u2ACB": "subnE",
            "\u2ACC\uFE00": "vsupnE",
            "\u2ACC": "supnE",
            "\u2ACF": "csub",
            "\u2AD0": "csup",
            "\u2AD1": "csube",
            "\u2AD2": "csupe",
            "\u2AD3": "subsup",
            "\u2AD4": "supsub",
            "\u2AD5": "subsub",
            "\u2AD6": "supsup",
            "\u2AD7": "suphsub",
            "\u2AD8": "supdsub",
            "\u2AD9": "forkv",
            "\u2ADA": "topfork",
            "\u2ADB": "mlcp",
            "\u2AE4": "Dashv",
            "\u2AE6": "Vdashl",
            "\u2AE7": "Barv",
            "\u2AE8": "vBar",
            "\u2AE9": "vBarv",
            "\u2AEB": "Vbar",
            "\u2AEC": "Not",
            "\u2AED": "bNot",
            "\u2AEE": "rnmid",
            "\u2AEF": "cirmid",
            "\u2AF0": "midcir",
            "\u2AF1": "topcir",
            "\u2AF2": "nhpar",
            "\u2AF3": "parsim",
            "\u2AFD": "parsl",
            "\u2AFD\u20E5": "nparsl",
            "\u266D": "flat",
            "\u266E": "natur",
            "\u266F": "sharp",
            "\xA4": "curren",
            "\xA2": "cent",
            $: "dollar",
            "\xA3": "pound",
            "\xA5": "yen",
            "\u20AC": "euro",
            "\xB9": "sup1",
            "\xBD": "half",
            "\u2153": "frac13",
            "\xBC": "frac14",
            "\u2155": "frac15",
            "\u2159": "frac16",
            "\u215B": "frac18",
            "\xB2": "sup2",
            "\u2154": "frac23",
            "\u2156": "frac25",
            "\xB3": "sup3",
            "\xBE": "frac34",
            "\u2157": "frac35",
            "\u215C": "frac38",
            "\u2158": "frac45",
            "\u215A": "frac56",
            "\u215D": "frac58",
            "\u215E": "frac78",
            "\u{1D4B6}": "ascr",
            "\u{1D552}": "aopf",
            "\u{1D51E}": "afr",
            "\u{1D538}": "Aopf",
            "\u{1D504}": "Afr",
            "\u{1D49C}": "Ascr",
            ª: "ordf",
            á: "aacute",
            Á: "Aacute",
            à: "agrave",
            À: "Agrave",
            ă: "abreve",
            Ă: "Abreve",
            â: "acirc",
            Â: "Acirc",
            å: "aring",
            Å: "angst",
            ä: "auml",
            Ä: "Auml",
            ã: "atilde",
            Ã: "Atilde",
            ą: "aogon",
            Ą: "Aogon",
            ā: "amacr",
            Ā: "Amacr",
            æ: "aelig",
            Æ: "AElig",
            "\u{1D4B7}": "bscr",
            "\u{1D553}": "bopf",
            "\u{1D51F}": "bfr",
            "\u{1D539}": "Bopf",
            ℬ: "Bscr",
            "\u{1D505}": "Bfr",
            "\u{1D520}": "cfr",
            "\u{1D4B8}": "cscr",
            "\u{1D554}": "copf",
            ℭ: "Cfr",
            "\u{1D49E}": "Cscr",
            ℂ: "Copf",
            ć: "cacute",
            Ć: "Cacute",
            ĉ: "ccirc",
            Ĉ: "Ccirc",
            č: "ccaron",
            Č: "Ccaron",
            ċ: "cdot",
            Ċ: "Cdot",
            ç: "ccedil",
            Ç: "Ccedil",
            "\u2105": "incare",
            "\u{1D521}": "dfr",
            "\u2146": "dd",
            "\u{1D555}": "dopf",
            "\u{1D4B9}": "dscr",
            "\u{1D49F}": "Dscr",
            "\u{1D507}": "Dfr",
            "\u2145": "DD",
            "\u{1D53B}": "Dopf",
            ď: "dcaron",
            Ď: "Dcaron",
            đ: "dstrok",
            Đ: "Dstrok",
            ð: "eth",
            Ð: "ETH",
            "\u2147": "ee",
            ℯ: "escr",
            "\u{1D522}": "efr",
            "\u{1D556}": "eopf",
            ℰ: "Escr",
            "\u{1D508}": "Efr",
            "\u{1D53C}": "Eopf",
            é: "eacute",
            É: "Eacute",
            è: "egrave",
            È: "Egrave",
            ê: "ecirc",
            Ê: "Ecirc",
            ě: "ecaron",
            Ě: "Ecaron",
            ë: "euml",
            Ë: "Euml",
            ė: "edot",
            Ė: "Edot",
            ę: "eogon",
            Ę: "Eogon",
            ē: "emacr",
            Ē: "Emacr",
            "\u{1D523}": "ffr",
            "\u{1D557}": "fopf",
            "\u{1D4BB}": "fscr",
            "\u{1D509}": "Ffr",
            "\u{1D53D}": "Fopf",
            ℱ: "Fscr",
            ﬀ: "fflig",
            ﬃ: "ffilig",
            ﬄ: "ffllig",
            ﬁ: "filig",
            fj: "fjlig",
            ﬂ: "fllig",
            ƒ: "fnof",
            ℊ: "gscr",
            "\u{1D558}": "gopf",
            "\u{1D524}": "gfr",
            "\u{1D4A2}": "Gscr",
            "\u{1D53E}": "Gopf",
            "\u{1D50A}": "Gfr",
            ǵ: "gacute",
            ğ: "gbreve",
            Ğ: "Gbreve",
            ĝ: "gcirc",
            Ĝ: "Gcirc",
            ġ: "gdot",
            Ġ: "Gdot",
            Ģ: "Gcedil",
            "\u{1D525}": "hfr",
            ℎ: "planckh",
            "\u{1D4BD}": "hscr",
            "\u{1D559}": "hopf",
            ℋ: "Hscr",
            ℌ: "Hfr",
            ℍ: "Hopf",
            ĥ: "hcirc",
            Ĥ: "Hcirc",
            ℏ: "hbar",
            ħ: "hstrok",
            Ħ: "Hstrok",
            "\u{1D55A}": "iopf",
            "\u{1D526}": "ifr",
            "\u{1D4BE}": "iscr",
            "\u2148": "ii",
            "\u{1D540}": "Iopf",
            ℐ: "Iscr",
            ℑ: "Im",
            í: "iacute",
            Í: "Iacute",
            ì: "igrave",
            Ì: "Igrave",
            î: "icirc",
            Î: "Icirc",
            ï: "iuml",
            Ï: "Iuml",
            ĩ: "itilde",
            Ĩ: "Itilde",
            İ: "Idot",
            į: "iogon",
            Į: "Iogon",
            ī: "imacr",
            Ī: "Imacr",
            ĳ: "ijlig",
            Ĳ: "IJlig",
            ı: "imath",
            "\u{1D4BF}": "jscr",
            "\u{1D55B}": "jopf",
            "\u{1D527}": "jfr",
            "\u{1D4A5}": "Jscr",
            "\u{1D50D}": "Jfr",
            "\u{1D541}": "Jopf",
            ĵ: "jcirc",
            Ĵ: "Jcirc",
            "\u0237": "jmath",
            "\u{1D55C}": "kopf",
            "\u{1D4C0}": "kscr",
            "\u{1D528}": "kfr",
            "\u{1D4A6}": "Kscr",
            "\u{1D542}": "Kopf",
            "\u{1D50E}": "Kfr",
            ķ: "kcedil",
            Ķ: "Kcedil",
            "\u{1D529}": "lfr",
            "\u{1D4C1}": "lscr",
            ℓ: "ell",
            "\u{1D55D}": "lopf",
            ℒ: "Lscr",
            "\u{1D50F}": "Lfr",
            "\u{1D543}": "Lopf",
            ĺ: "lacute",
            Ĺ: "Lacute",
            ľ: "lcaron",
            Ľ: "Lcaron",
            ļ: "lcedil",
            Ļ: "Lcedil",
            ł: "lstrok",
            Ł: "Lstrok",
            ŀ: "lmidot",
            Ŀ: "Lmidot",
            "\u{1D52A}": "mfr",
            "\u{1D55E}": "mopf",
            "\u{1D4C2}": "mscr",
            "\u{1D510}": "Mfr",
            "\u{1D544}": "Mopf",
            ℳ: "Mscr",
            "\u{1D52B}": "nfr",
            "\u{1D55F}": "nopf",
            "\u{1D4C3}": "nscr",
            ℕ: "Nopf",
            "\u{1D4A9}": "Nscr",
            "\u{1D511}": "Nfr",
            ń: "nacute",
            Ń: "Nacute",
            ň: "ncaron",
            Ň: "Ncaron",
            ñ: "ntilde",
            Ñ: "Ntilde",
            ņ: "ncedil",
            Ņ: "Ncedil",
            "\u2116": "numero",
            ŋ: "eng",
            Ŋ: "ENG",
            "\u{1D560}": "oopf",
            "\u{1D52C}": "ofr",
            ℴ: "oscr",
            "\u{1D4AA}": "Oscr",
            "\u{1D512}": "Ofr",
            "\u{1D546}": "Oopf",
            º: "ordm",
            ó: "oacute",
            Ó: "Oacute",
            ò: "ograve",
            Ò: "Ograve",
            ô: "ocirc",
            Ô: "Ocirc",
            ö: "ouml",
            Ö: "Ouml",
            ő: "odblac",
            Ő: "Odblac",
            õ: "otilde",
            Õ: "Otilde",
            ø: "oslash",
            Ø: "Oslash",
            ō: "omacr",
            Ō: "Omacr",
            œ: "oelig",
            Œ: "OElig",
            "\u{1D52D}": "pfr",
            "\u{1D4C5}": "pscr",
            "\u{1D561}": "popf",
            ℙ: "Popf",
            "\u{1D513}": "Pfr",
            "\u{1D4AB}": "Pscr",
            "\u{1D562}": "qopf",
            "\u{1D52E}": "qfr",
            "\u{1D4C6}": "qscr",
            "\u{1D4AC}": "Qscr",
            "\u{1D514}": "Qfr",
            ℚ: "Qopf",
            ĸ: "kgreen",
            "\u{1D52F}": "rfr",
            "\u{1D563}": "ropf",
            "\u{1D4C7}": "rscr",
            ℛ: "Rscr",
            ℜ: "Re",
            ℝ: "Ropf",
            ŕ: "racute",
            Ŕ: "Racute",
            ř: "rcaron",
            Ř: "Rcaron",
            ŗ: "rcedil",
            Ŗ: "Rcedil",
            "\u{1D564}": "sopf",
            "\u{1D4C8}": "sscr",
            "\u{1D530}": "sfr",
            "\u{1D54A}": "Sopf",
            "\u{1D516}": "Sfr",
            "\u{1D4AE}": "Sscr",
            "\u24C8": "oS",
            ś: "sacute",
            Ś: "Sacute",
            ŝ: "scirc",
            Ŝ: "Scirc",
            š: "scaron",
            Š: "Scaron",
            ş: "scedil",
            Ş: "Scedil",
            ß: "szlig",
            "\u{1D531}": "tfr",
            "\u{1D4C9}": "tscr",
            "\u{1D565}": "topf",
            "\u{1D4AF}": "Tscr",
            "\u{1D517}": "Tfr",
            "\u{1D54B}": "Topf",
            ť: "tcaron",
            Ť: "Tcaron",
            ţ: "tcedil",
            Ţ: "Tcedil",
            "\u2122": "trade",
            ŧ: "tstrok",
            Ŧ: "Tstrok",
            "\u{1D4CA}": "uscr",
            "\u{1D566}": "uopf",
            "\u{1D532}": "ufr",
            "\u{1D54C}": "Uopf",
            "\u{1D518}": "Ufr",
            "\u{1D4B0}": "Uscr",
            ú: "uacute",
            Ú: "Uacute",
            ù: "ugrave",
            Ù: "Ugrave",
            ŭ: "ubreve",
            Ŭ: "Ubreve",
            û: "ucirc",
            Û: "Ucirc",
            ů: "uring",
            Ů: "Uring",
            ü: "uuml",
            Ü: "Uuml",
            ű: "udblac",
            Ű: "Udblac",
            ũ: "utilde",
            Ũ: "Utilde",
            ų: "uogon",
            Ų: "Uogon",
            ū: "umacr",
            Ū: "Umacr",
            "\u{1D533}": "vfr",
            "\u{1D567}": "vopf",
            "\u{1D4CB}": "vscr",
            "\u{1D519}": "Vfr",
            "\u{1D54D}": "Vopf",
            "\u{1D4B1}": "Vscr",
            "\u{1D568}": "wopf",
            "\u{1D4CC}": "wscr",
            "\u{1D534}": "wfr",
            "\u{1D4B2}": "Wscr",
            "\u{1D54E}": "Wopf",
            "\u{1D51A}": "Wfr",
            ŵ: "wcirc",
            Ŵ: "Wcirc",
            "\u{1D535}": "xfr",
            "\u{1D4CD}": "xscr",
            "\u{1D569}": "xopf",
            "\u{1D54F}": "Xopf",
            "\u{1D51B}": "Xfr",
            "\u{1D4B3}": "Xscr",
            "\u{1D536}": "yfr",
            "\u{1D4CE}": "yscr",
            "\u{1D56A}": "yopf",
            "\u{1D4B4}": "Yscr",
            "\u{1D51C}": "Yfr",
            "\u{1D550}": "Yopf",
            ý: "yacute",
            Ý: "Yacute",
            ŷ: "ycirc",
            Ŷ: "Ycirc",
            ÿ: "yuml",
            Ÿ: "Yuml",
            "\u{1D4CF}": "zscr",
            "\u{1D537}": "zfr",
            "\u{1D56B}": "zopf",
            ℨ: "Zfr",
            ℤ: "Zopf",
            "\u{1D4B5}": "Zscr",
            ź: "zacute",
            Ź: "Zacute",
            ž: "zcaron",
            Ž: "Zcaron",
            ż: "zdot",
            Ż: "Zdot",
            Ƶ: "imped",
            þ: "thorn",
            Þ: "THORN",
            ŉ: "napos",
            α: "alpha",
            Α: "Alpha",
            β: "beta",
            Β: "Beta",
            γ: "gamma",
            Γ: "Gamma",
            δ: "delta",
            Δ: "Delta",
            ε: "epsi",
            "\u03F5": "epsiv",
            Ε: "Epsilon",
            ϝ: "gammad",
            Ϝ: "Gammad",
            ζ: "zeta",
            Ζ: "Zeta",
            η: "eta",
            Η: "Eta",
            θ: "theta",
            ϑ: "thetav",
            Θ: "Theta",
            ι: "iota",
            Ι: "Iota",
            κ: "kappa",
            ϰ: "kappav",
            Κ: "Kappa",
            λ: "lambda",
            Λ: "Lambda",
            μ: "mu",
            µ: "micro",
            Μ: "Mu",
            ν: "nu",
            Ν: "Nu",
            ξ: "xi",
            Ξ: "Xi",
            ο: "omicron",
            Ο: "Omicron",
            π: "pi",
            ϖ: "piv",
            Π: "Pi",
            ρ: "rho",
            ϱ: "rhov",
            Ρ: "Rho",
            σ: "sigma",
            Σ: "Sigma",
            ς: "sigmaf",
            τ: "tau",
            Τ: "Tau",
            υ: "upsi",
            Υ: "Upsilon",
            ϒ: "Upsi",
            φ: "phi",
            ϕ: "phiv",
            Φ: "Phi",
            χ: "chi",
            Χ: "Chi",
            ψ: "psi",
            Ψ: "Psi",
            ω: "omega",
            Ω: "ohm",
            а: "acy",
            А: "Acy",
            б: "bcy",
            Б: "Bcy",
            в: "vcy",
            В: "Vcy",
            г: "gcy",
            Г: "Gcy",
            ѓ: "gjcy",
            Ѓ: "GJcy",
            д: "dcy",
            Д: "Dcy",
            ђ: "djcy",
            Ђ: "DJcy",
            е: "iecy",
            Е: "IEcy",
            ё: "iocy",
            Ё: "IOcy",
            є: "jukcy",
            Є: "Jukcy",
            ж: "zhcy",
            Ж: "ZHcy",
            з: "zcy",
            З: "Zcy",
            ѕ: "dscy",
            Ѕ: "DScy",
            и: "icy",
            И: "Icy",
            і: "iukcy",
            І: "Iukcy",
            ї: "yicy",
            Ї: "YIcy",
            й: "jcy",
            Й: "Jcy",
            ј: "jsercy",
            Ј: "Jsercy",
            к: "kcy",
            К: "Kcy",
            ќ: "kjcy",
            Ќ: "KJcy",
            л: "lcy",
            Л: "Lcy",
            љ: "ljcy",
            Љ: "LJcy",
            м: "mcy",
            М: "Mcy",
            н: "ncy",
            Н: "Ncy",
            њ: "njcy",
            Њ: "NJcy",
            о: "ocy",
            О: "Ocy",
            п: "pcy",
            П: "Pcy",
            р: "rcy",
            Р: "Rcy",
            с: "scy",
            С: "Scy",
            т: "tcy",
            Т: "Tcy",
            ћ: "tshcy",
            Ћ: "TSHcy",
            у: "ucy",
            У: "Ucy",
            ў: "ubrcy",
            Ў: "Ubrcy",
            ф: "fcy",
            Ф: "Fcy",
            х: "khcy",
            Х: "KHcy",
            ц: "tscy",
            Ц: "TScy",
            ч: "chcy",
            Ч: "CHcy",
            џ: "dzcy",
            Џ: "DZcy",
            ш: "shcy",
            Ш: "SHcy",
            щ: "shchcy",
            Щ: "SHCHcy",
            ъ: "hardcy",
            Ъ: "HARDcy",
            ы: "ycy",
            Ы: "Ycy",
            ь: "softcy",
            Ь: "SOFTcy",
            э: "ecy",
            Э: "Ecy",
            ю: "yucy",
            Ю: "YUcy",
            я: "yacy",
            Я: "YAcy",
            ℵ: "aleph",
            ℶ: "beth",
            ℷ: "gimel",
            ℸ: "daleth"
        }, q = /["&'<>`]/g, M = {
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#x27;",
            "<": "&lt;",
            ">": "&gt;",
            "`": "&#x60;"
        }, J = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, Y = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Z = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, K = {
            aacute: "\xE1",
            Aacute: "\xC1",
            abreve: "\u0103",
            Abreve: "\u0102",
            ac: "\u223E",
            acd: "\u223F",
            acE: "\u223E\u0333",
            acirc: "\xE2",
            Acirc: "\xC2",
            acute: "\xB4",
            acy: "\u0430",
            Acy: "\u0410",
            aelig: "\xE6",
            AElig: "\xC6",
            af: "\u2061",
            afr: "\u{1D51E}",
            Afr: "\u{1D504}",
            agrave: "\xE0",
            Agrave: "\xC0",
            alefsym: "\u2135",
            aleph: "\u2135",
            alpha: "\u03B1",
            Alpha: "\u0391",
            amacr: "\u0101",
            Amacr: "\u0100",
            amalg: "\u2A3F",
            amp: "&",
            AMP: "&",
            and: "\u2227",
            And: "\u2A53",
            andand: "\u2A55",
            andd: "\u2A5C",
            andslope: "\u2A58",
            andv: "\u2A5A",
            ang: "\u2220",
            ange: "\u29A4",
            angle: "\u2220",
            angmsd: "\u2221",
            angmsdaa: "\u29A8",
            angmsdab: "\u29A9",
            angmsdac: "\u29AA",
            angmsdad: "\u29AB",
            angmsdae: "\u29AC",
            angmsdaf: "\u29AD",
            angmsdag: "\u29AE",
            angmsdah: "\u29AF",
            angrt: "\u221F",
            angrtvb: "\u22BE",
            angrtvbd: "\u299D",
            angsph: "\u2222",
            angst: "\xC5",
            angzarr: "\u237C",
            aogon: "\u0105",
            Aogon: "\u0104",
            aopf: "\u{1D552}",
            Aopf: "\u{1D538}",
            ap: "\u2248",
            apacir: "\u2A6F",
            ape: "\u224A",
            apE: "\u2A70",
            apid: "\u224B",
            apos: "'",
            ApplyFunction: "\u2061",
            approx: "\u2248",
            approxeq: "\u224A",
            aring: "\xE5",
            Aring: "\xC5",
            ascr: "\u{1D4B6}",
            Ascr: "\u{1D49C}",
            Assign: "\u2254",
            ast: "*",
            asymp: "\u2248",
            asympeq: "\u224D",
            atilde: "\xE3",
            Atilde: "\xC3",
            auml: "\xE4",
            Auml: "\xC4",
            awconint: "\u2233",
            awint: "\u2A11",
            backcong: "\u224C",
            backepsilon: "\u03F6",
            backprime: "\u2035",
            backsim: "\u223D",
            backsimeq: "\u22CD",
            Backslash: "\u2216",
            Barv: "\u2AE7",
            barvee: "\u22BD",
            barwed: "\u2305",
            Barwed: "\u2306",
            barwedge: "\u2305",
            bbrk: "\u23B5",
            bbrktbrk: "\u23B6",
            bcong: "\u224C",
            bcy: "\u0431",
            Bcy: "\u0411",
            bdquo: "\u201E",
            becaus: "\u2235",
            because: "\u2235",
            Because: "\u2235",
            bemptyv: "\u29B0",
            bepsi: "\u03F6",
            bernou: "\u212C",
            Bernoullis: "\u212C",
            beta: "\u03B2",
            Beta: "\u0392",
            beth: "\u2136",
            between: "\u226C",
            bfr: "\u{1D51F}",
            Bfr: "\u{1D505}",
            bigcap: "\u22C2",
            bigcirc: "\u25EF",
            bigcup: "\u22C3",
            bigodot: "\u2A00",
            bigoplus: "\u2A01",
            bigotimes: "\u2A02",
            bigsqcup: "\u2A06",
            bigstar: "\u2605",
            bigtriangledown: "\u25BD",
            bigtriangleup: "\u25B3",
            biguplus: "\u2A04",
            bigvee: "\u22C1",
            bigwedge: "\u22C0",
            bkarow: "\u290D",
            blacklozenge: "\u29EB",
            blacksquare: "\u25AA",
            blacktriangle: "\u25B4",
            blacktriangledown: "\u25BE",
            blacktriangleleft: "\u25C2",
            blacktriangleright: "\u25B8",
            blank: "\u2423",
            blk12: "\u2592",
            blk14: "\u2591",
            blk34: "\u2593",
            block: "\u2588",
            bne: "=\u20E5",
            bnequiv: "\u2261\u20E5",
            bnot: "\u2310",
            bNot: "\u2AED",
            bopf: "\u{1D553}",
            Bopf: "\u{1D539}",
            bot: "\u22A5",
            bottom: "\u22A5",
            bowtie: "\u22C8",
            boxbox: "\u29C9",
            boxdl: "\u2510",
            boxdL: "\u2555",
            boxDl: "\u2556",
            boxDL: "\u2557",
            boxdr: "\u250C",
            boxdR: "\u2552",
            boxDr: "\u2553",
            boxDR: "\u2554",
            boxh: "\u2500",
            boxH: "\u2550",
            boxhd: "\u252C",
            boxhD: "\u2565",
            boxHd: "\u2564",
            boxHD: "\u2566",
            boxhu: "\u2534",
            boxhU: "\u2568",
            boxHu: "\u2567",
            boxHU: "\u2569",
            boxminus: "\u229F",
            boxplus: "\u229E",
            boxtimes: "\u22A0",
            boxul: "\u2518",
            boxuL: "\u255B",
            boxUl: "\u255C",
            boxUL: "\u255D",
            boxur: "\u2514",
            boxuR: "\u2558",
            boxUr: "\u2559",
            boxUR: "\u255A",
            boxv: "\u2502",
            boxV: "\u2551",
            boxvh: "\u253C",
            boxvH: "\u256A",
            boxVh: "\u256B",
            boxVH: "\u256C",
            boxvl: "\u2524",
            boxvL: "\u2561",
            boxVl: "\u2562",
            boxVL: "\u2563",
            boxvr: "\u251C",
            boxvR: "\u255E",
            boxVr: "\u255F",
            boxVR: "\u2560",
            bprime: "\u2035",
            breve: "\u02D8",
            Breve: "\u02D8",
            brvbar: "\xA6",
            bscr: "\u{1D4B7}",
            Bscr: "\u212C",
            bsemi: "\u204F",
            bsim: "\u223D",
            bsime: "\u22CD",
            bsol: "\\",
            bsolb: "\u29C5",
            bsolhsub: "\u27C8",
            bull: "\u2022",
            bullet: "\u2022",
            bump: "\u224E",
            bumpe: "\u224F",
            bumpE: "\u2AAE",
            bumpeq: "\u224F",
            Bumpeq: "\u224E",
            cacute: "\u0107",
            Cacute: "\u0106",
            cap: "\u2229",
            Cap: "\u22D2",
            capand: "\u2A44",
            capbrcup: "\u2A49",
            capcap: "\u2A4B",
            capcup: "\u2A47",
            capdot: "\u2A40",
            CapitalDifferentialD: "\u2145",
            caps: "\u2229\uFE00",
            caret: "\u2041",
            caron: "\u02C7",
            Cayleys: "\u212D",
            ccaps: "\u2A4D",
            ccaron: "\u010D",
            Ccaron: "\u010C",
            ccedil: "\xE7",
            Ccedil: "\xC7",
            ccirc: "\u0109",
            Ccirc: "\u0108",
            Cconint: "\u2230",
            ccups: "\u2A4C",
            ccupssm: "\u2A50",
            cdot: "\u010B",
            Cdot: "\u010A",
            cedil: "\xB8",
            Cedilla: "\xB8",
            cemptyv: "\u29B2",
            cent: "\xA2",
            centerdot: "\xB7",
            CenterDot: "\xB7",
            cfr: "\u{1D520}",
            Cfr: "\u212D",
            chcy: "\u0447",
            CHcy: "\u0427",
            check: "\u2713",
            checkmark: "\u2713",
            chi: "\u03C7",
            Chi: "\u03A7",
            cir: "\u25CB",
            circ: "\u02C6",
            circeq: "\u2257",
            circlearrowleft: "\u21BA",
            circlearrowright: "\u21BB",
            circledast: "\u229B",
            circledcirc: "\u229A",
            circleddash: "\u229D",
            CircleDot: "\u2299",
            circledR: "\xAE",
            circledS: "\u24C8",
            CircleMinus: "\u2296",
            CirclePlus: "\u2295",
            CircleTimes: "\u2297",
            cire: "\u2257",
            cirE: "\u29C3",
            cirfnint: "\u2A10",
            cirmid: "\u2AEF",
            cirscir: "\u29C2",
            ClockwiseContourIntegral: "\u2232",
            CloseCurlyDoubleQuote: "\u201D",
            CloseCurlyQuote: "\u2019",
            clubs: "\u2663",
            clubsuit: "\u2663",
            colon: ":",
            Colon: "\u2237",
            colone: "\u2254",
            Colone: "\u2A74",
            coloneq: "\u2254",
            comma: ",",
            commat: "@",
            comp: "\u2201",
            compfn: "\u2218",
            complement: "\u2201",
            complexes: "\u2102",
            cong: "\u2245",
            congdot: "\u2A6D",
            Congruent: "\u2261",
            conint: "\u222E",
            Conint: "\u222F",
            ContourIntegral: "\u222E",
            copf: "\u{1D554}",
            Copf: "\u2102",
            coprod: "\u2210",
            Coproduct: "\u2210",
            copy: "\xA9",
            COPY: "\xA9",
            copysr: "\u2117",
            CounterClockwiseContourIntegral: "\u2233",
            crarr: "\u21B5",
            cross: "\u2717",
            Cross: "\u2A2F",
            cscr: "\u{1D4B8}",
            Cscr: "\u{1D49E}",
            csub: "\u2ACF",
            csube: "\u2AD1",
            csup: "\u2AD0",
            csupe: "\u2AD2",
            ctdot: "\u22EF",
            cudarrl: "\u2938",
            cudarrr: "\u2935",
            cuepr: "\u22DE",
            cuesc: "\u22DF",
            cularr: "\u21B6",
            cularrp: "\u293D",
            cup: "\u222A",
            Cup: "\u22D3",
            cupbrcap: "\u2A48",
            cupcap: "\u2A46",
            CupCap: "\u224D",
            cupcup: "\u2A4A",
            cupdot: "\u228D",
            cupor: "\u2A45",
            cups: "\u222A\uFE00",
            curarr: "\u21B7",
            curarrm: "\u293C",
            curlyeqprec: "\u22DE",
            curlyeqsucc: "\u22DF",
            curlyvee: "\u22CE",
            curlywedge: "\u22CF",
            curren: "\xA4",
            curvearrowleft: "\u21B6",
            curvearrowright: "\u21B7",
            cuvee: "\u22CE",
            cuwed: "\u22CF",
            cwconint: "\u2232",
            cwint: "\u2231",
            cylcty: "\u232D",
            dagger: "\u2020",
            Dagger: "\u2021",
            daleth: "\u2138",
            darr: "\u2193",
            dArr: "\u21D3",
            Darr: "\u21A1",
            dash: "\u2010",
            dashv: "\u22A3",
            Dashv: "\u2AE4",
            dbkarow: "\u290F",
            dblac: "\u02DD",
            dcaron: "\u010F",
            Dcaron: "\u010E",
            dcy: "\u0434",
            Dcy: "\u0414",
            dd: "\u2146",
            DD: "\u2145",
            ddagger: "\u2021",
            ddarr: "\u21CA",
            DDotrahd: "\u2911",
            ddotseq: "\u2A77",
            deg: "\xB0",
            Del: "\u2207",
            delta: "\u03B4",
            Delta: "\u0394",
            demptyv: "\u29B1",
            dfisht: "\u297F",
            dfr: "\u{1D521}",
            Dfr: "\u{1D507}",
            dHar: "\u2965",
            dharl: "\u21C3",
            dharr: "\u21C2",
            DiacriticalAcute: "\xB4",
            DiacriticalDot: "\u02D9",
            DiacriticalDoubleAcute: "\u02DD",
            DiacriticalGrave: "`",
            DiacriticalTilde: "\u02DC",
            diam: "\u22C4",
            diamond: "\u22C4",
            Diamond: "\u22C4",
            diamondsuit: "\u2666",
            diams: "\u2666",
            die: "\xA8",
            DifferentialD: "\u2146",
            digamma: "\u03DD",
            disin: "\u22F2",
            div: "\xF7",
            divide: "\xF7",
            divideontimes: "\u22C7",
            divonx: "\u22C7",
            djcy: "\u0452",
            DJcy: "\u0402",
            dlcorn: "\u231E",
            dlcrop: "\u230D",
            dollar: "$",
            dopf: "\u{1D555}",
            Dopf: "\u{1D53B}",
            dot: "\u02D9",
            Dot: "\xA8",
            DotDot: "\u20DC",
            doteq: "\u2250",
            doteqdot: "\u2251",
            DotEqual: "\u2250",
            dotminus: "\u2238",
            dotplus: "\u2214",
            dotsquare: "\u22A1",
            doublebarwedge: "\u2306",
            DoubleContourIntegral: "\u222F",
            DoubleDot: "\xA8",
            DoubleDownArrow: "\u21D3",
            DoubleLeftArrow: "\u21D0",
            DoubleLeftRightArrow: "\u21D4",
            DoubleLeftTee: "\u2AE4",
            DoubleLongLeftArrow: "\u27F8",
            DoubleLongLeftRightArrow: "\u27FA",
            DoubleLongRightArrow: "\u27F9",
            DoubleRightArrow: "\u21D2",
            DoubleRightTee: "\u22A8",
            DoubleUpArrow: "\u21D1",
            DoubleUpDownArrow: "\u21D5",
            DoubleVerticalBar: "\u2225",
            downarrow: "\u2193",
            Downarrow: "\u21D3",
            DownArrow: "\u2193",
            DownArrowBar: "\u2913",
            DownArrowUpArrow: "\u21F5",
            DownBreve: "\u0311",
            downdownarrows: "\u21CA",
            downharpoonleft: "\u21C3",
            downharpoonright: "\u21C2",
            DownLeftRightVector: "\u2950",
            DownLeftTeeVector: "\u295E",
            DownLeftVector: "\u21BD",
            DownLeftVectorBar: "\u2956",
            DownRightTeeVector: "\u295F",
            DownRightVector: "\u21C1",
            DownRightVectorBar: "\u2957",
            DownTee: "\u22A4",
            DownTeeArrow: "\u21A7",
            drbkarow: "\u2910",
            drcorn: "\u231F",
            drcrop: "\u230C",
            dscr: "\u{1D4B9}",
            Dscr: "\u{1D49F}",
            dscy: "\u0455",
            DScy: "\u0405",
            dsol: "\u29F6",
            dstrok: "\u0111",
            Dstrok: "\u0110",
            dtdot: "\u22F1",
            dtri: "\u25BF",
            dtrif: "\u25BE",
            duarr: "\u21F5",
            duhar: "\u296F",
            dwangle: "\u29A6",
            dzcy: "\u045F",
            DZcy: "\u040F",
            dzigrarr: "\u27FF",
            eacute: "\xE9",
            Eacute: "\xC9",
            easter: "\u2A6E",
            ecaron: "\u011B",
            Ecaron: "\u011A",
            ecir: "\u2256",
            ecirc: "\xEA",
            Ecirc: "\xCA",
            ecolon: "\u2255",
            ecy: "\u044D",
            Ecy: "\u042D",
            eDDot: "\u2A77",
            edot: "\u0117",
            eDot: "\u2251",
            Edot: "\u0116",
            ee: "\u2147",
            efDot: "\u2252",
            efr: "\u{1D522}",
            Efr: "\u{1D508}",
            eg: "\u2A9A",
            egrave: "\xE8",
            Egrave: "\xC8",
            egs: "\u2A96",
            egsdot: "\u2A98",
            el: "\u2A99",
            Element: "\u2208",
            elinters: "\u23E7",
            ell: "\u2113",
            els: "\u2A95",
            elsdot: "\u2A97",
            emacr: "\u0113",
            Emacr: "\u0112",
            empty: "\u2205",
            emptyset: "\u2205",
            EmptySmallSquare: "\u25FB",
            emptyv: "\u2205",
            EmptyVerySmallSquare: "\u25AB",
            emsp: "\u2003",
            emsp13: "\u2004",
            emsp14: "\u2005",
            eng: "\u014B",
            ENG: "\u014A",
            ensp: "\u2002",
            eogon: "\u0119",
            Eogon: "\u0118",
            eopf: "\u{1D556}",
            Eopf: "\u{1D53C}",
            epar: "\u22D5",
            eparsl: "\u29E3",
            eplus: "\u2A71",
            epsi: "\u03B5",
            epsilon: "\u03B5",
            Epsilon: "\u0395",
            epsiv: "\u03F5",
            eqcirc: "\u2256",
            eqcolon: "\u2255",
            eqsim: "\u2242",
            eqslantgtr: "\u2A96",
            eqslantless: "\u2A95",
            Equal: "\u2A75",
            equals: "=",
            EqualTilde: "\u2242",
            equest: "\u225F",
            Equilibrium: "\u21CC",
            equiv: "\u2261",
            equivDD: "\u2A78",
            eqvparsl: "\u29E5",
            erarr: "\u2971",
            erDot: "\u2253",
            escr: "\u212F",
            Escr: "\u2130",
            esdot: "\u2250",
            esim: "\u2242",
            Esim: "\u2A73",
            eta: "\u03B7",
            Eta: "\u0397",
            eth: "\xF0",
            ETH: "\xD0",
            euml: "\xEB",
            Euml: "\xCB",
            euro: "\u20AC",
            excl: "!",
            exist: "\u2203",
            Exists: "\u2203",
            expectation: "\u2130",
            exponentiale: "\u2147",
            ExponentialE: "\u2147",
            fallingdotseq: "\u2252",
            fcy: "\u0444",
            Fcy: "\u0424",
            female: "\u2640",
            ffilig: "\uFB03",
            fflig: "\uFB00",
            ffllig: "\uFB04",
            ffr: "\u{1D523}",
            Ffr: "\u{1D509}",
            filig: "\uFB01",
            FilledSmallSquare: "\u25FC",
            FilledVerySmallSquare: "\u25AA",
            fjlig: "fj",
            flat: "\u266D",
            fllig: "\uFB02",
            fltns: "\u25B1",
            fnof: "\u0192",
            fopf: "\u{1D557}",
            Fopf: "\u{1D53D}",
            forall: "\u2200",
            ForAll: "\u2200",
            fork: "\u22D4",
            forkv: "\u2AD9",
            Fouriertrf: "\u2131",
            fpartint: "\u2A0D",
            frac12: "\xBD",
            frac13: "\u2153",
            frac14: "\xBC",
            frac15: "\u2155",
            frac16: "\u2159",
            frac18: "\u215B",
            frac23: "\u2154",
            frac25: "\u2156",
            frac34: "\xBE",
            frac35: "\u2157",
            frac38: "\u215C",
            frac45: "\u2158",
            frac56: "\u215A",
            frac58: "\u215D",
            frac78: "\u215E",
            frasl: "\u2044",
            frown: "\u2322",
            fscr: "\u{1D4BB}",
            Fscr: "\u2131",
            gacute: "\u01F5",
            gamma: "\u03B3",
            Gamma: "\u0393",
            gammad: "\u03DD",
            Gammad: "\u03DC",
            gap: "\u2A86",
            gbreve: "\u011F",
            Gbreve: "\u011E",
            Gcedil: "\u0122",
            gcirc: "\u011D",
            Gcirc: "\u011C",
            gcy: "\u0433",
            Gcy: "\u0413",
            gdot: "\u0121",
            Gdot: "\u0120",
            ge: "\u2265",
            gE: "\u2267",
            gel: "\u22DB",
            gEl: "\u2A8C",
            geq: "\u2265",
            geqq: "\u2267",
            geqslant: "\u2A7E",
            ges: "\u2A7E",
            gescc: "\u2AA9",
            gesdot: "\u2A80",
            gesdoto: "\u2A82",
            gesdotol: "\u2A84",
            gesl: "\u22DB\uFE00",
            gesles: "\u2A94",
            gfr: "\u{1D524}",
            Gfr: "\u{1D50A}",
            gg: "\u226B",
            Gg: "\u22D9",
            ggg: "\u22D9",
            gimel: "\u2137",
            gjcy: "\u0453",
            GJcy: "\u0403",
            gl: "\u2277",
            gla: "\u2AA5",
            glE: "\u2A92",
            glj: "\u2AA4",
            gnap: "\u2A8A",
            gnapprox: "\u2A8A",
            gne: "\u2A88",
            gnE: "\u2269",
            gneq: "\u2A88",
            gneqq: "\u2269",
            gnsim: "\u22E7",
            gopf: "\u{1D558}",
            Gopf: "\u{1D53E}",
            grave: "`",
            GreaterEqual: "\u2265",
            GreaterEqualLess: "\u22DB",
            GreaterFullEqual: "\u2267",
            GreaterGreater: "\u2AA2",
            GreaterLess: "\u2277",
            GreaterSlantEqual: "\u2A7E",
            GreaterTilde: "\u2273",
            gscr: "\u210A",
            Gscr: "\u{1D4A2}",
            gsim: "\u2273",
            gsime: "\u2A8E",
            gsiml: "\u2A90",
            gt: ">",
            Gt: "\u226B",
            GT: ">",
            gtcc: "\u2AA7",
            gtcir: "\u2A7A",
            gtdot: "\u22D7",
            gtlPar: "\u2995",
            gtquest: "\u2A7C",
            gtrapprox: "\u2A86",
            gtrarr: "\u2978",
            gtrdot: "\u22D7",
            gtreqless: "\u22DB",
            gtreqqless: "\u2A8C",
            gtrless: "\u2277",
            gtrsim: "\u2273",
            gvertneqq: "\u2269\uFE00",
            gvnE: "\u2269\uFE00",
            Hacek: "\u02C7",
            hairsp: "\u200A",
            half: "\xBD",
            hamilt: "\u210B",
            hardcy: "\u044A",
            HARDcy: "\u042A",
            harr: "\u2194",
            hArr: "\u21D4",
            harrcir: "\u2948",
            harrw: "\u21AD",
            Hat: "^",
            hbar: "\u210F",
            hcirc: "\u0125",
            Hcirc: "\u0124",
            hearts: "\u2665",
            heartsuit: "\u2665",
            hellip: "\u2026",
            hercon: "\u22B9",
            hfr: "\u{1D525}",
            Hfr: "\u210C",
            HilbertSpace: "\u210B",
            hksearow: "\u2925",
            hkswarow: "\u2926",
            hoarr: "\u21FF",
            homtht: "\u223B",
            hookleftarrow: "\u21A9",
            hookrightarrow: "\u21AA",
            hopf: "\u{1D559}",
            Hopf: "\u210D",
            horbar: "\u2015",
            HorizontalLine: "\u2500",
            hscr: "\u{1D4BD}",
            Hscr: "\u210B",
            hslash: "\u210F",
            hstrok: "\u0127",
            Hstrok: "\u0126",
            HumpDownHump: "\u224E",
            HumpEqual: "\u224F",
            hybull: "\u2043",
            hyphen: "\u2010",
            iacute: "\xED",
            Iacute: "\xCD",
            ic: "\u2063",
            icirc: "\xEE",
            Icirc: "\xCE",
            icy: "\u0438",
            Icy: "\u0418",
            Idot: "\u0130",
            iecy: "\u0435",
            IEcy: "\u0415",
            iexcl: "\xA1",
            iff: "\u21D4",
            ifr: "\u{1D526}",
            Ifr: "\u2111",
            igrave: "\xEC",
            Igrave: "\xCC",
            ii: "\u2148",
            iiiint: "\u2A0C",
            iiint: "\u222D",
            iinfin: "\u29DC",
            iiota: "\u2129",
            ijlig: "\u0133",
            IJlig: "\u0132",
            Im: "\u2111",
            imacr: "\u012B",
            Imacr: "\u012A",
            image: "\u2111",
            ImaginaryI: "\u2148",
            imagline: "\u2110",
            imagpart: "\u2111",
            imath: "\u0131",
            imof: "\u22B7",
            imped: "\u01B5",
            Implies: "\u21D2",
            in: "\u2208",
            incare: "\u2105",
            infin: "\u221E",
            infintie: "\u29DD",
            inodot: "\u0131",
            int: "\u222B",
            Int: "\u222C",
            intcal: "\u22BA",
            integers: "\u2124",
            Integral: "\u222B",
            intercal: "\u22BA",
            Intersection: "\u22C2",
            intlarhk: "\u2A17",
            intprod: "\u2A3C",
            InvisibleComma: "\u2063",
            InvisibleTimes: "\u2062",
            iocy: "\u0451",
            IOcy: "\u0401",
            iogon: "\u012F",
            Iogon: "\u012E",
            iopf: "\u{1D55A}",
            Iopf: "\u{1D540}",
            iota: "\u03B9",
            Iota: "\u0399",
            iprod: "\u2A3C",
            iquest: "\xBF",
            iscr: "\u{1D4BE}",
            Iscr: "\u2110",
            isin: "\u2208",
            isindot: "\u22F5",
            isinE: "\u22F9",
            isins: "\u22F4",
            isinsv: "\u22F3",
            isinv: "\u2208",
            it: "\u2062",
            itilde: "\u0129",
            Itilde: "\u0128",
            iukcy: "\u0456",
            Iukcy: "\u0406",
            iuml: "\xEF",
            Iuml: "\xCF",
            jcirc: "\u0135",
            Jcirc: "\u0134",
            jcy: "\u0439",
            Jcy: "\u0419",
            jfr: "\u{1D527}",
            Jfr: "\u{1D50D}",
            jmath: "\u0237",
            jopf: "\u{1D55B}",
            Jopf: "\u{1D541}",
            jscr: "\u{1D4BF}",
            Jscr: "\u{1D4A5}",
            jsercy: "\u0458",
            Jsercy: "\u0408",
            jukcy: "\u0454",
            Jukcy: "\u0404",
            kappa: "\u03BA",
            Kappa: "\u039A",
            kappav: "\u03F0",
            kcedil: "\u0137",
            Kcedil: "\u0136",
            kcy: "\u043A",
            Kcy: "\u041A",
            kfr: "\u{1D528}",
            Kfr: "\u{1D50E}",
            kgreen: "\u0138",
            khcy: "\u0445",
            KHcy: "\u0425",
            kjcy: "\u045C",
            KJcy: "\u040C",
            kopf: "\u{1D55C}",
            Kopf: "\u{1D542}",
            kscr: "\u{1D4C0}",
            Kscr: "\u{1D4A6}",
            lAarr: "\u21DA",
            lacute: "\u013A",
            Lacute: "\u0139",
            laemptyv: "\u29B4",
            lagran: "\u2112",
            lambda: "\u03BB",
            Lambda: "\u039B",
            lang: "\u27E8",
            Lang: "\u27EA",
            langd: "\u2991",
            langle: "\u27E8",
            lap: "\u2A85",
            Laplacetrf: "\u2112",
            laquo: "\xAB",
            larr: "\u2190",
            lArr: "\u21D0",
            Larr: "\u219E",
            larrb: "\u21E4",
            larrbfs: "\u291F",
            larrfs: "\u291D",
            larrhk: "\u21A9",
            larrlp: "\u21AB",
            larrpl: "\u2939",
            larrsim: "\u2973",
            larrtl: "\u21A2",
            lat: "\u2AAB",
            latail: "\u2919",
            lAtail: "\u291B",
            late: "\u2AAD",
            lates: "\u2AAD\uFE00",
            lbarr: "\u290C",
            lBarr: "\u290E",
            lbbrk: "\u2772",
            lbrace: "{",
            lbrack: "[",
            lbrke: "\u298B",
            lbrksld: "\u298F",
            lbrkslu: "\u298D",
            lcaron: "\u013E",
            Lcaron: "\u013D",
            lcedil: "\u013C",
            Lcedil: "\u013B",
            lceil: "\u2308",
            lcub: "{",
            lcy: "\u043B",
            Lcy: "\u041B",
            ldca: "\u2936",
            ldquo: "\u201C",
            ldquor: "\u201E",
            ldrdhar: "\u2967",
            ldrushar: "\u294B",
            ldsh: "\u21B2",
            le: "\u2264",
            lE: "\u2266",
            LeftAngleBracket: "\u27E8",
            leftarrow: "\u2190",
            Leftarrow: "\u21D0",
            LeftArrow: "\u2190",
            LeftArrowBar: "\u21E4",
            LeftArrowRightArrow: "\u21C6",
            leftarrowtail: "\u21A2",
            LeftCeiling: "\u2308",
            LeftDoubleBracket: "\u27E6",
            LeftDownTeeVector: "\u2961",
            LeftDownVector: "\u21C3",
            LeftDownVectorBar: "\u2959",
            LeftFloor: "\u230A",
            leftharpoondown: "\u21BD",
            leftharpoonup: "\u21BC",
            leftleftarrows: "\u21C7",
            leftrightarrow: "\u2194",
            Leftrightarrow: "\u21D4",
            LeftRightArrow: "\u2194",
            leftrightarrows: "\u21C6",
            leftrightharpoons: "\u21CB",
            leftrightsquigarrow: "\u21AD",
            LeftRightVector: "\u294E",
            LeftTee: "\u22A3",
            LeftTeeArrow: "\u21A4",
            LeftTeeVector: "\u295A",
            leftthreetimes: "\u22CB",
            LeftTriangle: "\u22B2",
            LeftTriangleBar: "\u29CF",
            LeftTriangleEqual: "\u22B4",
            LeftUpDownVector: "\u2951",
            LeftUpTeeVector: "\u2960",
            LeftUpVector: "\u21BF",
            LeftUpVectorBar: "\u2958",
            LeftVector: "\u21BC",
            LeftVectorBar: "\u2952",
            leg: "\u22DA",
            lEg: "\u2A8B",
            leq: "\u2264",
            leqq: "\u2266",
            leqslant: "\u2A7D",
            les: "\u2A7D",
            lescc: "\u2AA8",
            lesdot: "\u2A7F",
            lesdoto: "\u2A81",
            lesdotor: "\u2A83",
            lesg: "\u22DA\uFE00",
            lesges: "\u2A93",
            lessapprox: "\u2A85",
            lessdot: "\u22D6",
            lesseqgtr: "\u22DA",
            lesseqqgtr: "\u2A8B",
            LessEqualGreater: "\u22DA",
            LessFullEqual: "\u2266",
            LessGreater: "\u2276",
            lessgtr: "\u2276",
            LessLess: "\u2AA1",
            lesssim: "\u2272",
            LessSlantEqual: "\u2A7D",
            LessTilde: "\u2272",
            lfisht: "\u297C",
            lfloor: "\u230A",
            lfr: "\u{1D529}",
            Lfr: "\u{1D50F}",
            lg: "\u2276",
            lgE: "\u2A91",
            lHar: "\u2962",
            lhard: "\u21BD",
            lharu: "\u21BC",
            lharul: "\u296A",
            lhblk: "\u2584",
            ljcy: "\u0459",
            LJcy: "\u0409",
            ll: "\u226A",
            Ll: "\u22D8",
            llarr: "\u21C7",
            llcorner: "\u231E",
            Lleftarrow: "\u21DA",
            llhard: "\u296B",
            lltri: "\u25FA",
            lmidot: "\u0140",
            Lmidot: "\u013F",
            lmoust: "\u23B0",
            lmoustache: "\u23B0",
            lnap: "\u2A89",
            lnapprox: "\u2A89",
            lne: "\u2A87",
            lnE: "\u2268",
            lneq: "\u2A87",
            lneqq: "\u2268",
            lnsim: "\u22E6",
            loang: "\u27EC",
            loarr: "\u21FD",
            lobrk: "\u27E6",
            longleftarrow: "\u27F5",
            Longleftarrow: "\u27F8",
            LongLeftArrow: "\u27F5",
            longleftrightarrow: "\u27F7",
            Longleftrightarrow: "\u27FA",
            LongLeftRightArrow: "\u27F7",
            longmapsto: "\u27FC",
            longrightarrow: "\u27F6",
            Longrightarrow: "\u27F9",
            LongRightArrow: "\u27F6",
            looparrowleft: "\u21AB",
            looparrowright: "\u21AC",
            lopar: "\u2985",
            lopf: "\u{1D55D}",
            Lopf: "\u{1D543}",
            loplus: "\u2A2D",
            lotimes: "\u2A34",
            lowast: "\u2217",
            lowbar: "_",
            LowerLeftArrow: "\u2199",
            LowerRightArrow: "\u2198",
            loz: "\u25CA",
            lozenge: "\u25CA",
            lozf: "\u29EB",
            lpar: "(",
            lparlt: "\u2993",
            lrarr: "\u21C6",
            lrcorner: "\u231F",
            lrhar: "\u21CB",
            lrhard: "\u296D",
            lrm: "\u200E",
            lrtri: "\u22BF",
            lsaquo: "\u2039",
            lscr: "\u{1D4C1}",
            Lscr: "\u2112",
            lsh: "\u21B0",
            Lsh: "\u21B0",
            lsim: "\u2272",
            lsime: "\u2A8D",
            lsimg: "\u2A8F",
            lsqb: "[",
            lsquo: "\u2018",
            lsquor: "\u201A",
            lstrok: "\u0142",
            Lstrok: "\u0141",
            lt: "<",
            Lt: "\u226A",
            LT: "<",
            ltcc: "\u2AA6",
            ltcir: "\u2A79",
            ltdot: "\u22D6",
            lthree: "\u22CB",
            ltimes: "\u22C9",
            ltlarr: "\u2976",
            ltquest: "\u2A7B",
            ltri: "\u25C3",
            ltrie: "\u22B4",
            ltrif: "\u25C2",
            ltrPar: "\u2996",
            lurdshar: "\u294A",
            luruhar: "\u2966",
            lvertneqq: "\u2268\uFE00",
            lvnE: "\u2268\uFE00",
            macr: "\xAF",
            male: "\u2642",
            malt: "\u2720",
            maltese: "\u2720",
            map: "\u21A6",
            Map: "\u2905",
            mapsto: "\u21A6",
            mapstodown: "\u21A7",
            mapstoleft: "\u21A4",
            mapstoup: "\u21A5",
            marker: "\u25AE",
            mcomma: "\u2A29",
            mcy: "\u043C",
            Mcy: "\u041C",
            mdash: "\u2014",
            mDDot: "\u223A",
            measuredangle: "\u2221",
            MediumSpace: "\u205F",
            Mellintrf: "\u2133",
            mfr: "\u{1D52A}",
            Mfr: "\u{1D510}",
            mho: "\u2127",
            micro: "\xB5",
            mid: "\u2223",
            midast: "*",
            midcir: "\u2AF0",
            middot: "\xB7",
            minus: "\u2212",
            minusb: "\u229F",
            minusd: "\u2238",
            minusdu: "\u2A2A",
            MinusPlus: "\u2213",
            mlcp: "\u2ADB",
            mldr: "\u2026",
            mnplus: "\u2213",
            models: "\u22A7",
            mopf: "\u{1D55E}",
            Mopf: "\u{1D544}",
            mp: "\u2213",
            mscr: "\u{1D4C2}",
            Mscr: "\u2133",
            mstpos: "\u223E",
            mu: "\u03BC",
            Mu: "\u039C",
            multimap: "\u22B8",
            mumap: "\u22B8",
            nabla: "\u2207",
            nacute: "\u0144",
            Nacute: "\u0143",
            nang: "\u2220\u20D2",
            nap: "\u2249",
            napE: "\u2A70\u0338",
            napid: "\u224B\u0338",
            napos: "\u0149",
            napprox: "\u2249",
            natur: "\u266E",
            natural: "\u266E",
            naturals: "\u2115",
            nbsp: "\xA0",
            nbump: "\u224E\u0338",
            nbumpe: "\u224F\u0338",
            ncap: "\u2A43",
            ncaron: "\u0148",
            Ncaron: "\u0147",
            ncedil: "\u0146",
            Ncedil: "\u0145",
            ncong: "\u2247",
            ncongdot: "\u2A6D\u0338",
            ncup: "\u2A42",
            ncy: "\u043D",
            Ncy: "\u041D",
            ndash: "\u2013",
            ne: "\u2260",
            nearhk: "\u2924",
            nearr: "\u2197",
            neArr: "\u21D7",
            nearrow: "\u2197",
            nedot: "\u2250\u0338",
            NegativeMediumSpace: "\u200B",
            NegativeThickSpace: "\u200B",
            NegativeThinSpace: "\u200B",
            NegativeVeryThinSpace: "\u200B",
            nequiv: "\u2262",
            nesear: "\u2928",
            nesim: "\u2242\u0338",
            NestedGreaterGreater: "\u226B",
            NestedLessLess: "\u226A",
            NewLine: `
`,
            nexist: "\u2204",
            nexists: "\u2204",
            nfr: "\u{1D52B}",
            Nfr: "\u{1D511}",
            nge: "\u2271",
            ngE: "\u2267\u0338",
            ngeq: "\u2271",
            ngeqq: "\u2267\u0338",
            ngeqslant: "\u2A7E\u0338",
            nges: "\u2A7E\u0338",
            nGg: "\u22D9\u0338",
            ngsim: "\u2275",
            ngt: "\u226F",
            nGt: "\u226B\u20D2",
            ngtr: "\u226F",
            nGtv: "\u226B\u0338",
            nharr: "\u21AE",
            nhArr: "\u21CE",
            nhpar: "\u2AF2",
            ni: "\u220B",
            nis: "\u22FC",
            nisd: "\u22FA",
            niv: "\u220B",
            njcy: "\u045A",
            NJcy: "\u040A",
            nlarr: "\u219A",
            nlArr: "\u21CD",
            nldr: "\u2025",
            nle: "\u2270",
            nlE: "\u2266\u0338",
            nleftarrow: "\u219A",
            nLeftarrow: "\u21CD",
            nleftrightarrow: "\u21AE",
            nLeftrightarrow: "\u21CE",
            nleq: "\u2270",
            nleqq: "\u2266\u0338",
            nleqslant: "\u2A7D\u0338",
            nles: "\u2A7D\u0338",
            nless: "\u226E",
            nLl: "\u22D8\u0338",
            nlsim: "\u2274",
            nlt: "\u226E",
            nLt: "\u226A\u20D2",
            nltri: "\u22EA",
            nltrie: "\u22EC",
            nLtv: "\u226A\u0338",
            nmid: "\u2224",
            NoBreak: "\u2060",
            NonBreakingSpace: "\xA0",
            nopf: "\u{1D55F}",
            Nopf: "\u2115",
            not: "\xAC",
            Not: "\u2AEC",
            NotCongruent: "\u2262",
            NotCupCap: "\u226D",
            NotDoubleVerticalBar: "\u2226",
            NotElement: "\u2209",
            NotEqual: "\u2260",
            NotEqualTilde: "\u2242\u0338",
            NotExists: "\u2204",
            NotGreater: "\u226F",
            NotGreaterEqual: "\u2271",
            NotGreaterFullEqual: "\u2267\u0338",
            NotGreaterGreater: "\u226B\u0338",
            NotGreaterLess: "\u2279",
            NotGreaterSlantEqual: "\u2A7E\u0338",
            NotGreaterTilde: "\u2275",
            NotHumpDownHump: "\u224E\u0338",
            NotHumpEqual: "\u224F\u0338",
            notin: "\u2209",
            notindot: "\u22F5\u0338",
            notinE: "\u22F9\u0338",
            notinva: "\u2209",
            notinvb: "\u22F7",
            notinvc: "\u22F6",
            NotLeftTriangle: "\u22EA",
            NotLeftTriangleBar: "\u29CF\u0338",
            NotLeftTriangleEqual: "\u22EC",
            NotLess: "\u226E",
            NotLessEqual: "\u2270",
            NotLessGreater: "\u2278",
            NotLessLess: "\u226A\u0338",
            NotLessSlantEqual: "\u2A7D\u0338",
            NotLessTilde: "\u2274",
            NotNestedGreaterGreater: "\u2AA2\u0338",
            NotNestedLessLess: "\u2AA1\u0338",
            notni: "\u220C",
            notniva: "\u220C",
            notnivb: "\u22FE",
            notnivc: "\u22FD",
            NotPrecedes: "\u2280",
            NotPrecedesEqual: "\u2AAF\u0338",
            NotPrecedesSlantEqual: "\u22E0",
            NotReverseElement: "\u220C",
            NotRightTriangle: "\u22EB",
            NotRightTriangleBar: "\u29D0\u0338",
            NotRightTriangleEqual: "\u22ED",
            NotSquareSubset: "\u228F\u0338",
            NotSquareSubsetEqual: "\u22E2",
            NotSquareSuperset: "\u2290\u0338",
            NotSquareSupersetEqual: "\u22E3",
            NotSubset: "\u2282\u20D2",
            NotSubsetEqual: "\u2288",
            NotSucceeds: "\u2281",
            NotSucceedsEqual: "\u2AB0\u0338",
            NotSucceedsSlantEqual: "\u22E1",
            NotSucceedsTilde: "\u227F\u0338",
            NotSuperset: "\u2283\u20D2",
            NotSupersetEqual: "\u2289",
            NotTilde: "\u2241",
            NotTildeEqual: "\u2244",
            NotTildeFullEqual: "\u2247",
            NotTildeTilde: "\u2249",
            NotVerticalBar: "\u2224",
            npar: "\u2226",
            nparallel: "\u2226",
            nparsl: "\u2AFD\u20E5",
            npart: "\u2202\u0338",
            npolint: "\u2A14",
            npr: "\u2280",
            nprcue: "\u22E0",
            npre: "\u2AAF\u0338",
            nprec: "\u2280",
            npreceq: "\u2AAF\u0338",
            nrarr: "\u219B",
            nrArr: "\u21CF",
            nrarrc: "\u2933\u0338",
            nrarrw: "\u219D\u0338",
            nrightarrow: "\u219B",
            nRightarrow: "\u21CF",
            nrtri: "\u22EB",
            nrtrie: "\u22ED",
            nsc: "\u2281",
            nsccue: "\u22E1",
            nsce: "\u2AB0\u0338",
            nscr: "\u{1D4C3}",
            Nscr: "\u{1D4A9}",
            nshortmid: "\u2224",
            nshortparallel: "\u2226",
            nsim: "\u2241",
            nsime: "\u2244",
            nsimeq: "\u2244",
            nsmid: "\u2224",
            nspar: "\u2226",
            nsqsube: "\u22E2",
            nsqsupe: "\u22E3",
            nsub: "\u2284",
            nsube: "\u2288",
            nsubE: "\u2AC5\u0338",
            nsubset: "\u2282\u20D2",
            nsubseteq: "\u2288",
            nsubseteqq: "\u2AC5\u0338",
            nsucc: "\u2281",
            nsucceq: "\u2AB0\u0338",
            nsup: "\u2285",
            nsupe: "\u2289",
            nsupE: "\u2AC6\u0338",
            nsupset: "\u2283\u20D2",
            nsupseteq: "\u2289",
            nsupseteqq: "\u2AC6\u0338",
            ntgl: "\u2279",
            ntilde: "\xF1",
            Ntilde: "\xD1",
            ntlg: "\u2278",
            ntriangleleft: "\u22EA",
            ntrianglelefteq: "\u22EC",
            ntriangleright: "\u22EB",
            ntrianglerighteq: "\u22ED",
            nu: "\u03BD",
            Nu: "\u039D",
            num: "#",
            numero: "\u2116",
            numsp: "\u2007",
            nvap: "\u224D\u20D2",
            nvdash: "\u22AC",
            nvDash: "\u22AD",
            nVdash: "\u22AE",
            nVDash: "\u22AF",
            nvge: "\u2265\u20D2",
            nvgt: ">\u20D2",
            nvHarr: "\u2904",
            nvinfin: "\u29DE",
            nvlArr: "\u2902",
            nvle: "\u2264\u20D2",
            nvlt: "<\u20D2",
            nvltrie: "\u22B4\u20D2",
            nvrArr: "\u2903",
            nvrtrie: "\u22B5\u20D2",
            nvsim: "\u223C\u20D2",
            nwarhk: "\u2923",
            nwarr: "\u2196",
            nwArr: "\u21D6",
            nwarrow: "\u2196",
            nwnear: "\u2927",
            oacute: "\xF3",
            Oacute: "\xD3",
            oast: "\u229B",
            ocir: "\u229A",
            ocirc: "\xF4",
            Ocirc: "\xD4",
            ocy: "\u043E",
            Ocy: "\u041E",
            odash: "\u229D",
            odblac: "\u0151",
            Odblac: "\u0150",
            odiv: "\u2A38",
            odot: "\u2299",
            odsold: "\u29BC",
            oelig: "\u0153",
            OElig: "\u0152",
            ofcir: "\u29BF",
            ofr: "\u{1D52C}",
            Ofr: "\u{1D512}",
            ogon: "\u02DB",
            ograve: "\xF2",
            Ograve: "\xD2",
            ogt: "\u29C1",
            ohbar: "\u29B5",
            ohm: "\u03A9",
            oint: "\u222E",
            olarr: "\u21BA",
            olcir: "\u29BE",
            olcross: "\u29BB",
            oline: "\u203E",
            olt: "\u29C0",
            omacr: "\u014D",
            Omacr: "\u014C",
            omega: "\u03C9",
            Omega: "\u03A9",
            omicron: "\u03BF",
            Omicron: "\u039F",
            omid: "\u29B6",
            ominus: "\u2296",
            oopf: "\u{1D560}",
            Oopf: "\u{1D546}",
            opar: "\u29B7",
            OpenCurlyDoubleQuote: "\u201C",
            OpenCurlyQuote: "\u2018",
            operp: "\u29B9",
            oplus: "\u2295",
            or: "\u2228",
            Or: "\u2A54",
            orarr: "\u21BB",
            ord: "\u2A5D",
            order: "\u2134",
            orderof: "\u2134",
            ordf: "\xAA",
            ordm: "\xBA",
            origof: "\u22B6",
            oror: "\u2A56",
            orslope: "\u2A57",
            orv: "\u2A5B",
            oS: "\u24C8",
            oscr: "\u2134",
            Oscr: "\u{1D4AA}",
            oslash: "\xF8",
            Oslash: "\xD8",
            osol: "\u2298",
            otilde: "\xF5",
            Otilde: "\xD5",
            otimes: "\u2297",
            Otimes: "\u2A37",
            otimesas: "\u2A36",
            ouml: "\xF6",
            Ouml: "\xD6",
            ovbar: "\u233D",
            OverBar: "\u203E",
            OverBrace: "\u23DE",
            OverBracket: "\u23B4",
            OverParenthesis: "\u23DC",
            par: "\u2225",
            para: "\xB6",
            parallel: "\u2225",
            parsim: "\u2AF3",
            parsl: "\u2AFD",
            part: "\u2202",
            PartialD: "\u2202",
            pcy: "\u043F",
            Pcy: "\u041F",
            percnt: "%",
            period: ".",
            permil: "\u2030",
            perp: "\u22A5",
            pertenk: "\u2031",
            pfr: "\u{1D52D}",
            Pfr: "\u{1D513}",
            phi: "\u03C6",
            Phi: "\u03A6",
            phiv: "\u03D5",
            phmmat: "\u2133",
            phone: "\u260E",
            pi: "\u03C0",
            Pi: "\u03A0",
            pitchfork: "\u22D4",
            piv: "\u03D6",
            planck: "\u210F",
            planckh: "\u210E",
            plankv: "\u210F",
            plus: "+",
            plusacir: "\u2A23",
            plusb: "\u229E",
            pluscir: "\u2A22",
            plusdo: "\u2214",
            plusdu: "\u2A25",
            pluse: "\u2A72",
            PlusMinus: "\xB1",
            plusmn: "\xB1",
            plussim: "\u2A26",
            plustwo: "\u2A27",
            pm: "\xB1",
            Poincareplane: "\u210C",
            pointint: "\u2A15",
            popf: "\u{1D561}",
            Popf: "\u2119",
            pound: "\xA3",
            pr: "\u227A",
            Pr: "\u2ABB",
            prap: "\u2AB7",
            prcue: "\u227C",
            pre: "\u2AAF",
            prE: "\u2AB3",
            prec: "\u227A",
            precapprox: "\u2AB7",
            preccurlyeq: "\u227C",
            Precedes: "\u227A",
            PrecedesEqual: "\u2AAF",
            PrecedesSlantEqual: "\u227C",
            PrecedesTilde: "\u227E",
            preceq: "\u2AAF",
            precnapprox: "\u2AB9",
            precneqq: "\u2AB5",
            precnsim: "\u22E8",
            precsim: "\u227E",
            prime: "\u2032",
            Prime: "\u2033",
            primes: "\u2119",
            prnap: "\u2AB9",
            prnE: "\u2AB5",
            prnsim: "\u22E8",
            prod: "\u220F",
            Product: "\u220F",
            profalar: "\u232E",
            profline: "\u2312",
            profsurf: "\u2313",
            prop: "\u221D",
            Proportion: "\u2237",
            Proportional: "\u221D",
            propto: "\u221D",
            prsim: "\u227E",
            prurel: "\u22B0",
            pscr: "\u{1D4C5}",
            Pscr: "\u{1D4AB}",
            psi: "\u03C8",
            Psi: "\u03A8",
            puncsp: "\u2008",
            qfr: "\u{1D52E}",
            Qfr: "\u{1D514}",
            qint: "\u2A0C",
            qopf: "\u{1D562}",
            Qopf: "\u211A",
            qprime: "\u2057",
            qscr: "\u{1D4C6}",
            Qscr: "\u{1D4AC}",
            quaternions: "\u210D",
            quatint: "\u2A16",
            quest: "?",
            questeq: "\u225F",
            quot: '"',
            QUOT: '"',
            rAarr: "\u21DB",
            race: "\u223D\u0331",
            racute: "\u0155",
            Racute: "\u0154",
            radic: "\u221A",
            raemptyv: "\u29B3",
            rang: "\u27E9",
            Rang: "\u27EB",
            rangd: "\u2992",
            range: "\u29A5",
            rangle: "\u27E9",
            raquo: "\xBB",
            rarr: "\u2192",
            rArr: "\u21D2",
            Rarr: "\u21A0",
            rarrap: "\u2975",
            rarrb: "\u21E5",
            rarrbfs: "\u2920",
            rarrc: "\u2933",
            rarrfs: "\u291E",
            rarrhk: "\u21AA",
            rarrlp: "\u21AC",
            rarrpl: "\u2945",
            rarrsim: "\u2974",
            rarrtl: "\u21A3",
            Rarrtl: "\u2916",
            rarrw: "\u219D",
            ratail: "\u291A",
            rAtail: "\u291C",
            ratio: "\u2236",
            rationals: "\u211A",
            rbarr: "\u290D",
            rBarr: "\u290F",
            RBarr: "\u2910",
            rbbrk: "\u2773",
            rbrace: "}",
            rbrack: "]",
            rbrke: "\u298C",
            rbrksld: "\u298E",
            rbrkslu: "\u2990",
            rcaron: "\u0159",
            Rcaron: "\u0158",
            rcedil: "\u0157",
            Rcedil: "\u0156",
            rceil: "\u2309",
            rcub: "}",
            rcy: "\u0440",
            Rcy: "\u0420",
            rdca: "\u2937",
            rdldhar: "\u2969",
            rdquo: "\u201D",
            rdquor: "\u201D",
            rdsh: "\u21B3",
            Re: "\u211C",
            real: "\u211C",
            realine: "\u211B",
            realpart: "\u211C",
            reals: "\u211D",
            rect: "\u25AD",
            reg: "\xAE",
            REG: "\xAE",
            ReverseElement: "\u220B",
            ReverseEquilibrium: "\u21CB",
            ReverseUpEquilibrium: "\u296F",
            rfisht: "\u297D",
            rfloor: "\u230B",
            rfr: "\u{1D52F}",
            Rfr: "\u211C",
            rHar: "\u2964",
            rhard: "\u21C1",
            rharu: "\u21C0",
            rharul: "\u296C",
            rho: "\u03C1",
            Rho: "\u03A1",
            rhov: "\u03F1",
            RightAngleBracket: "\u27E9",
            rightarrow: "\u2192",
            Rightarrow: "\u21D2",
            RightArrow: "\u2192",
            RightArrowBar: "\u21E5",
            RightArrowLeftArrow: "\u21C4",
            rightarrowtail: "\u21A3",
            RightCeiling: "\u2309",
            RightDoubleBracket: "\u27E7",
            RightDownTeeVector: "\u295D",
            RightDownVector: "\u21C2",
            RightDownVectorBar: "\u2955",
            RightFloor: "\u230B",
            rightharpoondown: "\u21C1",
            rightharpoonup: "\u21C0",
            rightleftarrows: "\u21C4",
            rightleftharpoons: "\u21CC",
            rightrightarrows: "\u21C9",
            rightsquigarrow: "\u219D",
            RightTee: "\u22A2",
            RightTeeArrow: "\u21A6",
            RightTeeVector: "\u295B",
            rightthreetimes: "\u22CC",
            RightTriangle: "\u22B3",
            RightTriangleBar: "\u29D0",
            RightTriangleEqual: "\u22B5",
            RightUpDownVector: "\u294F",
            RightUpTeeVector: "\u295C",
            RightUpVector: "\u21BE",
            RightUpVectorBar: "\u2954",
            RightVector: "\u21C0",
            RightVectorBar: "\u2953",
            ring: "\u02DA",
            risingdotseq: "\u2253",
            rlarr: "\u21C4",
            rlhar: "\u21CC",
            rlm: "\u200F",
            rmoust: "\u23B1",
            rmoustache: "\u23B1",
            rnmid: "\u2AEE",
            roang: "\u27ED",
            roarr: "\u21FE",
            robrk: "\u27E7",
            ropar: "\u2986",
            ropf: "\u{1D563}",
            Ropf: "\u211D",
            roplus: "\u2A2E",
            rotimes: "\u2A35",
            RoundImplies: "\u2970",
            rpar: ")",
            rpargt: "\u2994",
            rppolint: "\u2A12",
            rrarr: "\u21C9",
            Rrightarrow: "\u21DB",
            rsaquo: "\u203A",
            rscr: "\u{1D4C7}",
            Rscr: "\u211B",
            rsh: "\u21B1",
            Rsh: "\u21B1",
            rsqb: "]",
            rsquo: "\u2019",
            rsquor: "\u2019",
            rthree: "\u22CC",
            rtimes: "\u22CA",
            rtri: "\u25B9",
            rtrie: "\u22B5",
            rtrif: "\u25B8",
            rtriltri: "\u29CE",
            RuleDelayed: "\u29F4",
            ruluhar: "\u2968",
            rx: "\u211E",
            sacute: "\u015B",
            Sacute: "\u015A",
            sbquo: "\u201A",
            sc: "\u227B",
            Sc: "\u2ABC",
            scap: "\u2AB8",
            scaron: "\u0161",
            Scaron: "\u0160",
            sccue: "\u227D",
            sce: "\u2AB0",
            scE: "\u2AB4",
            scedil: "\u015F",
            Scedil: "\u015E",
            scirc: "\u015D",
            Scirc: "\u015C",
            scnap: "\u2ABA",
            scnE: "\u2AB6",
            scnsim: "\u22E9",
            scpolint: "\u2A13",
            scsim: "\u227F",
            scy: "\u0441",
            Scy: "\u0421",
            sdot: "\u22C5",
            sdotb: "\u22A1",
            sdote: "\u2A66",
            searhk: "\u2925",
            searr: "\u2198",
            seArr: "\u21D8",
            searrow: "\u2198",
            sect: "\xA7",
            semi: ";",
            seswar: "\u2929",
            setminus: "\u2216",
            setmn: "\u2216",
            sext: "\u2736",
            sfr: "\u{1D530}",
            Sfr: "\u{1D516}",
            sfrown: "\u2322",
            sharp: "\u266F",
            shchcy: "\u0449",
            SHCHcy: "\u0429",
            shcy: "\u0448",
            SHcy: "\u0428",
            ShortDownArrow: "\u2193",
            ShortLeftArrow: "\u2190",
            shortmid: "\u2223",
            shortparallel: "\u2225",
            ShortRightArrow: "\u2192",
            ShortUpArrow: "\u2191",
            shy: "\xAD",
            sigma: "\u03C3",
            Sigma: "\u03A3",
            sigmaf: "\u03C2",
            sigmav: "\u03C2",
            sim: "\u223C",
            simdot: "\u2A6A",
            sime: "\u2243",
            simeq: "\u2243",
            simg: "\u2A9E",
            simgE: "\u2AA0",
            siml: "\u2A9D",
            simlE: "\u2A9F",
            simne: "\u2246",
            simplus: "\u2A24",
            simrarr: "\u2972",
            slarr: "\u2190",
            SmallCircle: "\u2218",
            smallsetminus: "\u2216",
            smashp: "\u2A33",
            smeparsl: "\u29E4",
            smid: "\u2223",
            smile: "\u2323",
            smt: "\u2AAA",
            smte: "\u2AAC",
            smtes: "\u2AAC\uFE00",
            softcy: "\u044C",
            SOFTcy: "\u042C",
            sol: "/",
            solb: "\u29C4",
            solbar: "\u233F",
            sopf: "\u{1D564}",
            Sopf: "\u{1D54A}",
            spades: "\u2660",
            spadesuit: "\u2660",
            spar: "\u2225",
            sqcap: "\u2293",
            sqcaps: "\u2293\uFE00",
            sqcup: "\u2294",
            sqcups: "\u2294\uFE00",
            Sqrt: "\u221A",
            sqsub: "\u228F",
            sqsube: "\u2291",
            sqsubset: "\u228F",
            sqsubseteq: "\u2291",
            sqsup: "\u2290",
            sqsupe: "\u2292",
            sqsupset: "\u2290",
            sqsupseteq: "\u2292",
            squ: "\u25A1",
            square: "\u25A1",
            Square: "\u25A1",
            SquareIntersection: "\u2293",
            SquareSubset: "\u228F",
            SquareSubsetEqual: "\u2291",
            SquareSuperset: "\u2290",
            SquareSupersetEqual: "\u2292",
            SquareUnion: "\u2294",
            squarf: "\u25AA",
            squf: "\u25AA",
            srarr: "\u2192",
            sscr: "\u{1D4C8}",
            Sscr: "\u{1D4AE}",
            ssetmn: "\u2216",
            ssmile: "\u2323",
            sstarf: "\u22C6",
            star: "\u2606",
            Star: "\u22C6",
            starf: "\u2605",
            straightepsilon: "\u03F5",
            straightphi: "\u03D5",
            strns: "\xAF",
            sub: "\u2282",
            Sub: "\u22D0",
            subdot: "\u2ABD",
            sube: "\u2286",
            subE: "\u2AC5",
            subedot: "\u2AC3",
            submult: "\u2AC1",
            subne: "\u228A",
            subnE: "\u2ACB",
            subplus: "\u2ABF",
            subrarr: "\u2979",
            subset: "\u2282",
            Subset: "\u22D0",
            subseteq: "\u2286",
            subseteqq: "\u2AC5",
            SubsetEqual: "\u2286",
            subsetneq: "\u228A",
            subsetneqq: "\u2ACB",
            subsim: "\u2AC7",
            subsub: "\u2AD5",
            subsup: "\u2AD3",
            succ: "\u227B",
            succapprox: "\u2AB8",
            succcurlyeq: "\u227D",
            Succeeds: "\u227B",
            SucceedsEqual: "\u2AB0",
            SucceedsSlantEqual: "\u227D",
            SucceedsTilde: "\u227F",
            succeq: "\u2AB0",
            succnapprox: "\u2ABA",
            succneqq: "\u2AB6",
            succnsim: "\u22E9",
            succsim: "\u227F",
            SuchThat: "\u220B",
            sum: "\u2211",
            Sum: "\u2211",
            sung: "\u266A",
            sup: "\u2283",
            Sup: "\u22D1",
            sup1: "\xB9",
            sup2: "\xB2",
            sup3: "\xB3",
            supdot: "\u2ABE",
            supdsub: "\u2AD8",
            supe: "\u2287",
            supE: "\u2AC6",
            supedot: "\u2AC4",
            Superset: "\u2283",
            SupersetEqual: "\u2287",
            suphsol: "\u27C9",
            suphsub: "\u2AD7",
            suplarr: "\u297B",
            supmult: "\u2AC2",
            supne: "\u228B",
            supnE: "\u2ACC",
            supplus: "\u2AC0",
            supset: "\u2283",
            Supset: "\u22D1",
            supseteq: "\u2287",
            supseteqq: "\u2AC6",
            supsetneq: "\u228B",
            supsetneqq: "\u2ACC",
            supsim: "\u2AC8",
            supsub: "\u2AD4",
            supsup: "\u2AD6",
            swarhk: "\u2926",
            swarr: "\u2199",
            swArr: "\u21D9",
            swarrow: "\u2199",
            swnwar: "\u292A",
            szlig: "\xDF",
            Tab: "	",
            target: "\u2316",
            tau: "\u03C4",
            Tau: "\u03A4",
            tbrk: "\u23B4",
            tcaron: "\u0165",
            Tcaron: "\u0164",
            tcedil: "\u0163",
            Tcedil: "\u0162",
            tcy: "\u0442",
            Tcy: "\u0422",
            tdot: "\u20DB",
            telrec: "\u2315",
            tfr: "\u{1D531}",
            Tfr: "\u{1D517}",
            there4: "\u2234",
            therefore: "\u2234",
            Therefore: "\u2234",
            theta: "\u03B8",
            Theta: "\u0398",
            thetasym: "\u03D1",
            thetav: "\u03D1",
            thickapprox: "\u2248",
            thicksim: "\u223C",
            ThickSpace: "\u205F\u200A",
            thinsp: "\u2009",
            ThinSpace: "\u2009",
            thkap: "\u2248",
            thksim: "\u223C",
            thorn: "\xFE",
            THORN: "\xDE",
            tilde: "\u02DC",
            Tilde: "\u223C",
            TildeEqual: "\u2243",
            TildeFullEqual: "\u2245",
            TildeTilde: "\u2248",
            times: "\xD7",
            timesb: "\u22A0",
            timesbar: "\u2A31",
            timesd: "\u2A30",
            tint: "\u222D",
            toea: "\u2928",
            top: "\u22A4",
            topbot: "\u2336",
            topcir: "\u2AF1",
            topf: "\u{1D565}",
            Topf: "\u{1D54B}",
            topfork: "\u2ADA",
            tosa: "\u2929",
            tprime: "\u2034",
            trade: "\u2122",
            TRADE: "\u2122",
            triangle: "\u25B5",
            triangledown: "\u25BF",
            triangleleft: "\u25C3",
            trianglelefteq: "\u22B4",
            triangleq: "\u225C",
            triangleright: "\u25B9",
            trianglerighteq: "\u22B5",
            tridot: "\u25EC",
            trie: "\u225C",
            triminus: "\u2A3A",
            TripleDot: "\u20DB",
            triplus: "\u2A39",
            trisb: "\u29CD",
            tritime: "\u2A3B",
            trpezium: "\u23E2",
            tscr: "\u{1D4C9}",
            Tscr: "\u{1D4AF}",
            tscy: "\u0446",
            TScy: "\u0426",
            tshcy: "\u045B",
            TSHcy: "\u040B",
            tstrok: "\u0167",
            Tstrok: "\u0166",
            twixt: "\u226C",
            twoheadleftarrow: "\u219E",
            twoheadrightarrow: "\u21A0",
            uacute: "\xFA",
            Uacute: "\xDA",
            uarr: "\u2191",
            uArr: "\u21D1",
            Uarr: "\u219F",
            Uarrocir: "\u2949",
            ubrcy: "\u045E",
            Ubrcy: "\u040E",
            ubreve: "\u016D",
            Ubreve: "\u016C",
            ucirc: "\xFB",
            Ucirc: "\xDB",
            ucy: "\u0443",
            Ucy: "\u0423",
            udarr: "\u21C5",
            udblac: "\u0171",
            Udblac: "\u0170",
            udhar: "\u296E",
            ufisht: "\u297E",
            ufr: "\u{1D532}",
            Ufr: "\u{1D518}",
            ugrave: "\xF9",
            Ugrave: "\xD9",
            uHar: "\u2963",
            uharl: "\u21BF",
            uharr: "\u21BE",
            uhblk: "\u2580",
            ulcorn: "\u231C",
            ulcorner: "\u231C",
            ulcrop: "\u230F",
            ultri: "\u25F8",
            umacr: "\u016B",
            Umacr: "\u016A",
            uml: "\xA8",
            UnderBar: "_",
            UnderBrace: "\u23DF",
            UnderBracket: "\u23B5",
            UnderParenthesis: "\u23DD",
            Union: "\u22C3",
            UnionPlus: "\u228E",
            uogon: "\u0173",
            Uogon: "\u0172",
            uopf: "\u{1D566}",
            Uopf: "\u{1D54C}",
            uparrow: "\u2191",
            Uparrow: "\u21D1",
            UpArrow: "\u2191",
            UpArrowBar: "\u2912",
            UpArrowDownArrow: "\u21C5",
            updownarrow: "\u2195",
            Updownarrow: "\u21D5",
            UpDownArrow: "\u2195",
            UpEquilibrium: "\u296E",
            upharpoonleft: "\u21BF",
            upharpoonright: "\u21BE",
            uplus: "\u228E",
            UpperLeftArrow: "\u2196",
            UpperRightArrow: "\u2197",
            upsi: "\u03C5",
            Upsi: "\u03D2",
            upsih: "\u03D2",
            upsilon: "\u03C5",
            Upsilon: "\u03A5",
            UpTee: "\u22A5",
            UpTeeArrow: "\u21A5",
            upuparrows: "\u21C8",
            urcorn: "\u231D",
            urcorner: "\u231D",
            urcrop: "\u230E",
            uring: "\u016F",
            Uring: "\u016E",
            urtri: "\u25F9",
            uscr: "\u{1D4CA}",
            Uscr: "\u{1D4B0}",
            utdot: "\u22F0",
            utilde: "\u0169",
            Utilde: "\u0168",
            utri: "\u25B5",
            utrif: "\u25B4",
            uuarr: "\u21C8",
            uuml: "\xFC",
            Uuml: "\xDC",
            uwangle: "\u29A7",
            vangrt: "\u299C",
            varepsilon: "\u03F5",
            varkappa: "\u03F0",
            varnothing: "\u2205",
            varphi: "\u03D5",
            varpi: "\u03D6",
            varpropto: "\u221D",
            varr: "\u2195",
            vArr: "\u21D5",
            varrho: "\u03F1",
            varsigma: "\u03C2",
            varsubsetneq: "\u228A\uFE00",
            varsubsetneqq: "\u2ACB\uFE00",
            varsupsetneq: "\u228B\uFE00",
            varsupsetneqq: "\u2ACC\uFE00",
            vartheta: "\u03D1",
            vartriangleleft: "\u22B2",
            vartriangleright: "\u22B3",
            vBar: "\u2AE8",
            Vbar: "\u2AEB",
            vBarv: "\u2AE9",
            vcy: "\u0432",
            Vcy: "\u0412",
            vdash: "\u22A2",
            vDash: "\u22A8",
            Vdash: "\u22A9",
            VDash: "\u22AB",
            Vdashl: "\u2AE6",
            vee: "\u2228",
            Vee: "\u22C1",
            veebar: "\u22BB",
            veeeq: "\u225A",
            vellip: "\u22EE",
            verbar: "|",
            Verbar: "\u2016",
            vert: "|",
            Vert: "\u2016",
            VerticalBar: "\u2223",
            VerticalLine: "|",
            VerticalSeparator: "\u2758",
            VerticalTilde: "\u2240",
            VeryThinSpace: "\u200A",
            vfr: "\u{1D533}",
            Vfr: "\u{1D519}",
            vltri: "\u22B2",
            vnsub: "\u2282\u20D2",
            vnsup: "\u2283\u20D2",
            vopf: "\u{1D567}",
            Vopf: "\u{1D54D}",
            vprop: "\u221D",
            vrtri: "\u22B3",
            vscr: "\u{1D4CB}",
            Vscr: "\u{1D4B1}",
            vsubne: "\u228A\uFE00",
            vsubnE: "\u2ACB\uFE00",
            vsupne: "\u228B\uFE00",
            vsupnE: "\u2ACC\uFE00",
            Vvdash: "\u22AA",
            vzigzag: "\u299A",
            wcirc: "\u0175",
            Wcirc: "\u0174",
            wedbar: "\u2A5F",
            wedge: "\u2227",
            Wedge: "\u22C0",
            wedgeq: "\u2259",
            weierp: "\u2118",
            wfr: "\u{1D534}",
            Wfr: "\u{1D51A}",
            wopf: "\u{1D568}",
            Wopf: "\u{1D54E}",
            wp: "\u2118",
            wr: "\u2240",
            wreath: "\u2240",
            wscr: "\u{1D4CC}",
            Wscr: "\u{1D4B2}",
            xcap: "\u22C2",
            xcirc: "\u25EF",
            xcup: "\u22C3",
            xdtri: "\u25BD",
            xfr: "\u{1D535}",
            Xfr: "\u{1D51B}",
            xharr: "\u27F7",
            xhArr: "\u27FA",
            xi: "\u03BE",
            Xi: "\u039E",
            xlarr: "\u27F5",
            xlArr: "\u27F8",
            xmap: "\u27FC",
            xnis: "\u22FB",
            xodot: "\u2A00",
            xopf: "\u{1D569}",
            Xopf: "\u{1D54F}",
            xoplus: "\u2A01",
            xotime: "\u2A02",
            xrarr: "\u27F6",
            xrArr: "\u27F9",
            xscr: "\u{1D4CD}",
            Xscr: "\u{1D4B3}",
            xsqcup: "\u2A06",
            xuplus: "\u2A04",
            xutri: "\u25B3",
            xvee: "\u22C1",
            xwedge: "\u22C0",
            yacute: "\xFD",
            Yacute: "\xDD",
            yacy: "\u044F",
            YAcy: "\u042F",
            ycirc: "\u0177",
            Ycirc: "\u0176",
            ycy: "\u044B",
            Ycy: "\u042B",
            yen: "\xA5",
            yfr: "\u{1D536}",
            Yfr: "\u{1D51C}",
            yicy: "\u0457",
            YIcy: "\u0407",
            yopf: "\u{1D56A}",
            Yopf: "\u{1D550}",
            yscr: "\u{1D4CE}",
            Yscr: "\u{1D4B4}",
            yucy: "\u044E",
            YUcy: "\u042E",
            yuml: "\xFF",
            Yuml: "\u0178",
            zacute: "\u017A",
            Zacute: "\u0179",
            zcaron: "\u017E",
            Zcaron: "\u017D",
            zcy: "\u0437",
            Zcy: "\u0417",
            zdot: "\u017C",
            Zdot: "\u017B",
            zeetrf: "\u2128",
            ZeroWidthSpace: "\u200B",
            zeta: "\u03B6",
            Zeta: "\u0396",
            zfr: "\u{1D537}",
            Zfr: "\u2128",
            zhcy: "\u0436",
            ZHcy: "\u0416",
            zigrarr: "\u21DD",
            zopf: "\u{1D56B}",
            Zopf: "\u2124",
            zscr: "\u{1D4CF}",
            Zscr: "\u{1D4B5}",
            zwj: "\u200D",
            zwnj: "\u200C"
        }, Q = {
            aacute: "\xE1",
            Aacute: "\xC1",
            acirc: "\xE2",
            Acirc: "\xC2",
            acute: "\xB4",
            aelig: "\xE6",
            AElig: "\xC6",
            agrave: "\xE0",
            Agrave: "\xC0",
            amp: "&",
            AMP: "&",
            aring: "\xE5",
            Aring: "\xC5",
            atilde: "\xE3",
            Atilde: "\xC3",
            auml: "\xE4",
            Auml: "\xC4",
            brvbar: "\xA6",
            ccedil: "\xE7",
            Ccedil: "\xC7",
            cedil: "\xB8",
            cent: "\xA2",
            copy: "\xA9",
            COPY: "\xA9",
            curren: "\xA4",
            deg: "\xB0",
            divide: "\xF7",
            eacute: "\xE9",
            Eacute: "\xC9",
            ecirc: "\xEA",
            Ecirc: "\xCA",
            egrave: "\xE8",
            Egrave: "\xC8",
            eth: "\xF0",
            ETH: "\xD0",
            euml: "\xEB",
            Euml: "\xCB",
            frac12: "\xBD",
            frac14: "\xBC",
            frac34: "\xBE",
            gt: ">",
            GT: ">",
            iacute: "\xED",
            Iacute: "\xCD",
            icirc: "\xEE",
            Icirc: "\xCE",
            iexcl: "\xA1",
            igrave: "\xEC",
            Igrave: "\xCC",
            iquest: "\xBF",
            iuml: "\xEF",
            Iuml: "\xCF",
            laquo: "\xAB",
            lt: "<",
            LT: "<",
            macr: "\xAF",
            micro: "\xB5",
            middot: "\xB7",
            nbsp: "\xA0",
            not: "\xAC",
            ntilde: "\xF1",
            Ntilde: "\xD1",
            oacute: "\xF3",
            Oacute: "\xD3",
            ocirc: "\xF4",
            Ocirc: "\xD4",
            ograve: "\xF2",
            Ograve: "\xD2",
            ordf: "\xAA",
            ordm: "\xBA",
            oslash: "\xF8",
            Oslash: "\xD8",
            otilde: "\xF5",
            Otilde: "\xD5",
            ouml: "\xF6",
            Ouml: "\xD6",
            para: "\xB6",
            plusmn: "\xB1",
            pound: "\xA3",
            quot: '"',
            QUOT: '"',
            raquo: "\xBB",
            reg: "\xAE",
            REG: "\xAE",
            sect: "\xA7",
            shy: "\xAD",
            sup1: "\xB9",
            sup2: "\xB2",
            sup3: "\xB3",
            szlig: "\xDF",
            thorn: "\xFE",
            THORN: "\xDE",
            times: "\xD7",
            uacute: "\xFA",
            Uacute: "\xDA",
            ucirc: "\xFB",
            Ucirc: "\xDB",
            ugrave: "\xF9",
            Ugrave: "\xD9",
            uml: "\xA8",
            uuml: "\xFC",
            Uuml: "\xDC",
            yacute: "\xFD",
            Yacute: "\xDD",
            yen: "\xA5",
            yuml: "\xFF"
        }, S = {
            0: "\uFFFD",
            128: "\u20AC",
            130: "\u201A",
            131: "\u0192",
            132: "\u201E",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02C6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017D",
            145: "\u2018",
            146: "\u2019",
            147: "\u201C",
            148: "\u201D",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02DC",
            153: "\u2122",
            154: "\u0161",
            155: "\u203A",
            156: "\u0153",
            158: "\u017E",
            159: "\u0178"
        }, W = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            11,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            127,
            128,
            129,
            130,
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
            157,
            158,
            159,
            64976,
            64977,
            64978,
            64979,
            64980,
            64981,
            64982,
            64983,
            64984,
            64985,
            64986,
            64987,
            64988,
            64989,
            64990,
            64991,
            64992,
            64993,
            64994,
            64995,
            64996,
            64997,
            64998,
            64999,
            65e3,
            65001,
            65002,
            65003,
            65004,
            65005,
            65006,
            65007,
            65534,
            65535,
            131070,
            131071,
            196606,
            196607,
            262142,
            262143,
            327678,
            327679,
            393214,
            393215,
            458750,
            458751,
            524286,
            524287,
            589822,
            589823,
            655358,
            655359,
            720894,
            720895,
            786430,
            786431,
            851966,
            851967,
            917502,
            917503,
            983038,
            983039,
            1048574,
            1048575,
            1114110,
            1114111
        ], T = String.fromCharCode, X = {}, _ = X.hasOwnProperty, f = function(u, r) {
            return _.call(u, r);
        }, $ = function(u, r) {
            for(var e = -1, s = u.length; ++e < s;)if (u[e] == r) return !0;
            return !1;
        }, R = function(u, r) {
            if (!u) return r;
            var e = {}, s;
            for(s in r)e[s] = f(u, s) ? u[s] : r[s];
            return e;
        }, N = function(u, r) {
            var e = "";
            return u >= 55296 && u <= 57343 || u > 1114111 ? (r && c("character reference outside the permissible Unicode range"), "\uFFFD") : f(S, u) ? (r && c("disallowed character reference"), S[u]) : (r && $(W, u) && c("disallowed character reference"), u > 65535 && (u -= 65536, e += T(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += T(u), e);
        }, uu = function(u) {
            return "&#x" + u.toString(16).toUpperCase() + ";";
        }, ru = function(u) {
            return "&#" + u + ";";
        }, c = function(u) {
            throw Error("Parse error: " + u);
        }, w = function(u, r) {
            r = R(r, w.options);
            var e = r.strict;
            e && Y.test(u) && c("forbidden code point");
            var s = r.encodeEverything, D = r.useNamedReferences, g = r.allowUnsafeSymbols, E = r.decimal ? ru : uu, A = function(t) {
                return E(t.charCodeAt(0));
            };
            return s ? (u = u.replace(z, function(t) {
                return D && f(d, t) ? "&" + d[t] + ";" : A(t);
            }), D && (u = u.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), D && (u = u.replace(k, function(t) {
                return "&" + d[t] + ";";
            }))) : D ? (g || (u = u.replace(q, function(t) {
                return "&" + d[t] + ";";
            })), u = u.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), u = u.replace(k, function(t) {
                return "&" + d[t] + ";";
            })) : g || (u = u.replace(q, A)), u.replace(n, function(t) {
                var b = t.charCodeAt(0), L = t.charCodeAt(1), U = (b - 55296) * 1024 + L - 56320 + 65536;
                return E(U);
            }).replace(j, A);
        };
        w.options = {
            allowUnsafeSymbols: !1,
            encodeEverything: !1,
            strict: !1,
            useNamedReferences: !1,
            decimal: !1
        };
        var C = function(u, r) {
            r = R(r, C.options);
            var e = r.strict;
            return e && J.test(u) && c("malformed character reference"), u.replace(Z, function(s, D, g, E, A, t, b, L, U) {
                var h, B, V, G, x, F;
                return D ? (x = D, K[x]) : g ? (x = g, F = E, F && r.isAttributeValue ? (e && F == "=" && c("`&` did not start a character reference"), s) : (e && c("named character reference was not terminated by a semicolon"), Q[x] + (F || ""))) : A ? (V = A, B = t, e && !B && c("character reference was not terminated by a semicolon"), h = parseInt(V, 10), N(h, e)) : b ? (G = b, B = L, e && !B && c("character reference was not terminated by a semicolon"), h = parseInt(G, 16), N(h, e)) : (e && c("named character reference was not terminated by a semicolon"), s);
            });
        };
        C.options = {
            isAttributeValue: !1,
            strict: !1
        };
        var eu = function(u) {
            return u.replace(q, function(r) {
                return M[r];
            });
        }, p = {
            version: "1.2.0",
            encode: w,
            decode: C,
            escape: eu,
            unescape: C
        };
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) define(function() {
            return p;
        });
        else if (a && !a.nodeType) if (l) l.exports = p;
        else for(var y in p)f(p, y) && (a[y] = p[y]);
        else o.he = p;
    })(v);
});
var P1 = nu(I2()), { version: Au , encode: du , decode: gu , escape: mu , unescape: fu  } = P1, { default: O3 , ...Du } = P1, Cu = O3 !== void 0 ? O3 : Du;
const __css_select$ = Object.assign({
    default: Ye
}, mod1);
var it = Object.create;
var Ee = Object.defineProperty;
var ut = Object.getOwnPropertyDescriptor;
var at1 = Object.getOwnPropertyNames;
var ot1 = Object.getPrototypeOf, st1 = Object.prototype.hasOwnProperty;
((r)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, {
        get: (t, e)=>(typeof require < "u" ? require : t)[e]
    }) : r)(function(r) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + r + '" is not supported');
});
var b5 = (r, t)=>()=>(t || r((t = {
            exports: {}
        }).exports, t), t.exports);
var lt1 = (r, t, e, n)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let i of at1(t))!st1.call(r, i) && i !== e && Ee(r, i, {
        get: ()=>t[i],
        enumerable: !(n = ut(t, i)) || n.enumerable
    });
    return r;
};
var ft1 = (r, t, e)=>(e = r != null ? it(ot1(r)) : {}, lt1(t || !r || !r.__esModule ? Ee(e, "default", {
        value: r,
        enumerable: !0
    }) : e, r));
var R1 = b5((ie)=>{
    "use strict";
    Object.defineProperty(ie, "__esModule", {
        value: !0
    });
    var xe = Cu, ct = function() {
        function r(t, e) {
            t === void 0 && (t = null), this.parentNode = t, this.childNodes = [], Object.defineProperty(this, "range", {
                enumerable: !1,
                writable: !0,
                configurable: !0,
                value: e ?? [
                    -1,
                    -1
                ]
            });
        }
        return r.prototype.remove = function() {
            var t = this;
            if (this.parentNode) {
                var e = this.parentNode.childNodes;
                this.parentNode.childNodes = e.filter(function(n) {
                    return t !== n;
                }), this.parentNode = null;
            }
            return this;
        }, Object.defineProperty(r.prototype, "innerText", {
            get: function() {
                return this.rawText;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r.prototype, "textContent", {
            get: function() {
                return (0, xe.decode)(this.rawText);
            },
            set: function(t) {
                this.rawText = (0, xe.encode)(t);
            },
            enumerable: !1,
            configurable: !0
        }), r;
    }();
    ie.default = ct;
});
var L2 = b5((ae)=>{
    "use strict";
    Object.defineProperty(ae, "__esModule", {
        value: !0
    });
    var ue;
    (function(r) {
        r[r.ELEMENT_NODE = 1] = "ELEMENT_NODE", r[r.TEXT_NODE = 3] = "TEXT_NODE", r[r.COMMENT_NODE = 8] = "COMMENT_NODE";
    })(ue || (ue = {}));
    ae.default = ue;
});
var oe1 = b5((x)=>{
    "use strict";
    var dt = x && x.__extends || function() {
        var r = function(t, e) {
            return r = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(n, i) {
                n.__proto__ = i;
            } || function(n, i) {
                for(var u in i)Object.prototype.hasOwnProperty.call(i, u) && (n[u] = i[u]);
            }, r(t, e);
        };
        return function(t, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            r(t, e);
            function n() {
                this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n);
        };
    }(), je = x && x.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        };
    };
    Object.defineProperty(x, "__esModule", {
        value: !0
    });
    var ht = je(R1()), pt = je(L2()), vt = function(r) {
        dt(t, r);
        function t(e, n, i) {
            var u = r.call(this, n, i) || this;
            return u.rawText = e, u.nodeType = pt.default.COMMENT_NODE, u;
        }
        return t.prototype.clone = function() {
            return new t(this.rawText, null);
        }, Object.defineProperty(t.prototype, "text", {
            get: function() {
                return this.rawText;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.toString = function() {
            return "<!--".concat(this.rawText, "-->");
        }, t;
    }(ht.default);
    x.default = vt;
});
var Ae = b5((se)=>{
    "use strict";
    Object.defineProperty(se, "__esModule", {
        value: !0
    });
    function _t(r) {
        return r[r.length - 1];
    }
    se.default = _t;
});
var De = b5((B)=>{
    "use strict";
    var gt = B && B.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        };
    };
    Object.defineProperty(B, "__esModule", {
        value: !0
    });
    var bt = gt(L2());
    function G(r) {
        return r && r.nodeType === bt.default.ELEMENT_NODE;
    }
    function Ce(r, t) {
        return G(r) ? r.getAttribute(t) : void 0;
    }
    function yt(r) {
        return (r && r.rawTagName || "").toLowerCase();
    }
    function V(r) {
        return r && r.childNodes;
    }
    function le(r) {
        return r ? r.parentNode : null;
    }
    function Tt(r) {
        return r.text;
    }
    function Nt(r) {
        for(var t = r.length, e, n, i; --t > -1;){
            for(e = n = r[t], r[t] = null, i = !0; n;){
                if (r.indexOf(n) > -1) {
                    i = !1, r.splice(t, 1);
                    break;
                }
                n = le(n);
            }
            i && (r[t] = e);
        }
        return r;
    }
    function Le(r, t) {
        return t.some(function(e) {
            return G(e) ? r(e) || Le(r, V(e)) : !1;
        });
    }
    function mt(r) {
        var t = le(r);
        return t ? V(t) : [];
    }
    function wt(r, t) {
        return Ce(r, t) !== void 0;
    }
    function Me(r, t) {
        for(var e = null, n = 0, i = t?.length; n < i && !e; n++){
            var u = t[n];
            if (r(u)) e = u;
            else {
                var a = V(u);
                a && a.length > 0 && (e = Me(r, a));
            }
        }
        return e;
    }
    function Pe(r, t) {
        for(var e = [], n = 0, i = t.length; n < i; n++)if (!!G(t[n])) {
            r(t[n]) && e.push(t[n]);
            var u = V(t[n]);
            u && (e = e.concat(Pe(r, u)));
        }
        return e;
    }
    B.default = {
        isTag: G,
        getAttributeValue: Ce,
        getName: yt,
        getChildren: V,
        getParent: le,
        getText: Tt,
        removeSubsets: Nt,
        existsOne: Le,
        getSiblings: mt,
        hasAttrib: wt,
        findOne: Me,
        findAll: Pe
    };
});
var Se = b5((fe)=>{
    "use strict";
    Object.defineProperty(fe, "__esModule", {
        value: !0
    });
    var Ot = function() {
        function r(t, e) {
            t === void 0 && (t = !1), this.addClosingSlash = t, Array.isArray(e) ? this.voidTags = e.reduce(function(n, i) {
                return n.add(i.toLowerCase());
            }, new Set) : this.voidTags = [
                "area",
                "base",
                "br",
                "col",
                "embed",
                "hr",
                "img",
                "input",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr"
            ].reduce(function(n, i) {
                return n.add(i);
            }, new Set);
        }
        return r.prototype.formatNode = function(t, e, n) {
            var i = this.addClosingSlash, u = i && e && !e.endsWith(" ") ? " " : "", a = i ? "".concat(u, "/") : "";
            return this.isVoidElement(t.toLowerCase()) ? "<".concat(t).concat(e).concat(a, ">") : "<".concat(t).concat(e, ">").concat(n, "</").concat(t, ">");
        }, r.prototype.isVoidElement = function(t) {
            return this.voidTags.has(t);
        }, r;
    }();
    fe.default = Ot;
});
var ce1 = b5((j)=>{
    "use strict";
    var Et = j && j.__extends || function() {
        var r = function(t, e) {
            return r = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(n, i) {
                n.__proto__ = i;
            } || function(n, i) {
                for(var u in i)Object.prototype.hasOwnProperty.call(i, u) && (n[u] = i[u]);
            }, r(t, e);
        };
        return function(t, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            r(t, e);
            function n() {
                this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n);
        };
    }(), qe = j && j.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        };
    };
    Object.defineProperty(j, "__esModule", {
        value: !0
    });
    var xt = Cu, jt = qe(R1()), At = qe(L2()), Ct = function(r) {
        Et(t, r);
        function t(e, n, i) {
            var u = r.call(this, n, i) || this;
            return u.nodeType = At.default.TEXT_NODE, u._rawText = e, u;
        }
        return t.prototype.clone = function() {
            return new t(this._rawText, null);
        }, Object.defineProperty(t.prototype, "rawText", {
            get: function() {
                return this._rawText;
            },
            set: function(e) {
                this._rawText = e, this._trimmedRawText = void 0, this._trimmedText = void 0;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "trimmedRawText", {
            get: function() {
                return this._trimmedRawText !== void 0 ? this._trimmedRawText : (this._trimmedRawText = He(this.rawText), this._trimmedRawText);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "trimmedText", {
            get: function() {
                return this._trimmedText !== void 0 ? this._trimmedText : (this._trimmedText = He(this.text), this._trimmedText);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "text", {
            get: function() {
                return (0, xt.decode)(this.rawText);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isWhitespace", {
            get: function() {
                return /^(\s|&nbsp;)*$/.test(this.rawText);
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.toString = function() {
            return this.rawText;
        }, t;
    }(jt.default);
    j.default = Ct;
    function He(r) {
        for(var t = 0, e, n; t >= 0 && t < r.length;)/\S/.test(r[t]) && (e === void 0 ? (e = t, t = r.length) : (n = t, t = void 0)), e === void 0 ? t++ : t--;
        e === void 0 && (e = 0), n === void 0 && (n = r.length - 1);
        var i = e > 0 && /[^\S\r\n]/.test(r[e - 1]), u = n < r.length - 1 && /[^\S\r\n]/.test(r[n + 1]);
        return (i ? " " : "") + r.slice(e, n + 1) + (u ? " " : "");
    }
});
var Q1 = b5((h)=>{
    "use strict";
    var Lt = h && h.__extends || function() {
        var r = function(t, e) {
            return r = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(n, i) {
                n.__proto__ = i;
            } || function(n, i) {
                for(var u in i)Object.prototype.hasOwnProperty.call(i, u) && (n[u] = i[u]);
            }, r(t, e);
        };
        return function(t, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            r(t, e);
            function n() {
                this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n);
        };
    }(), P = h && h.__assign || function() {
        return P = Object.assign || function(r) {
            for(var t, e = 1, n = arguments.length; e < n; e++){
                t = arguments[e];
                for(var i in t)Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
            }
            return r;
        }, P.apply(this, arguments);
    }, W = h && h.__spreadArray || function(r, t, e) {
        if (e || arguments.length === 2) for(var n = 0, i = t.length, u; n < i; n++)(u || !(n in t)) && (u || (u = Array.prototype.slice.call(t, 0, n)), u[n] = t[n]);
        return r.concat(u || Array.prototype.slice.call(t));
    }, O = h && h.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        };
    };
    Object.defineProperty(h, "__esModule", {
        value: !0
    });
    h.parse = h.base_parse = void 0;
    var de = __css_select$, Mt = O(Cu), D = O(Ae()), he = O(De()), Re = O(Se()), Pt = O(oe1()), pe = O(R1()), S = O(ce1()), y = O(L2());
    function U(r) {
        return JSON.parse(JSON.stringify(Mt.default.decode(r)));
    }
    var Dt = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup"
    ], St = [
        "details",
        "dialog",
        "dd",
        "div",
        "dt"
    ], Ht = [
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form"
    ], qt = [
        "table",
        "td",
        "tr"
    ], It = [
        "address",
        "article",
        "aside",
        "blockquote",
        "br",
        "hr",
        "li",
        "main",
        "nav",
        "ol",
        "p",
        "pre",
        "section",
        "ul"
    ], ve = new Set;
    function kt() {
        for(var r = [], t = 0; t < arguments.length; t++)r[t] = arguments[t];
        for(var e = function(a) {
            for(var l = 0; l < a.length; l++){
                var o = a[l];
                ve.add(o), ve.add(o.toUpperCase());
            }
        }, n = 0, i = r; n < i.length; n++){
            var u = i[n];
            e(u);
        }
    }
    kt(Dt, St, Ht, qt, It);
    var Rt = function() {
        function r(t, e) {
            t === void 0 && (t = []), e === void 0 && (e = function() {
                return null;
            }), this._set = new Set(t), this._afterUpdate = e;
        }
        return r.prototype._validate = function(t) {
            if (/\s/.test(t)) throw new Error("DOMException in DOMTokenList.add: The token '".concat(t, "' contains HTML space characters, which are not valid in tokens."));
        }, r.prototype.add = function(t) {
            this._validate(t), this._set.add(t), this._afterUpdate(this);
        }, r.prototype.replace = function(t, e) {
            this._validate(e), this._set.delete(t), this._set.add(e), this._afterUpdate(this);
        }, r.prototype.remove = function(t) {
            this._set.delete(t) && this._afterUpdate(this);
        }, r.prototype.toggle = function(t) {
            this._validate(t), this._set.has(t) ? this._set.delete(t) : this._set.add(t), this._afterUpdate(this);
        }, r.prototype.contains = function(t) {
            return this._set.has(t);
        }, Object.defineProperty(r.prototype, "length", {
            get: function() {
                return this._set.size;
            },
            enumerable: !1,
            configurable: !0
        }), r.prototype.values = function() {
            return this._set.values();
        }, Object.defineProperty(r.prototype, "value", {
            get: function() {
                return Array.from(this._set.values());
            },
            enumerable: !1,
            configurable: !0
        }), r.prototype.toString = function() {
            return Array.from(this._set.values()).join(" ");
        }, r;
    }(), _e = function(r) {
        Lt(t, r);
        function t(e, n, i, u, a, l, o) {
            i === void 0 && (i = ""), l === void 0 && (l = new Re.default), o === void 0 && (o = {});
            var s = r.call(this, u, a) || this;
            if (s.rawAttrs = i, s.voidTag = l, s.nodeType = y.default.ELEMENT_NODE, s.rawTagName = e, s.rawAttrs = i || "", s.id = n.id || "", s.childNodes = [], s._parseOptions = o, s.classList = new Rt(n.class ? n.class.split(/\s+/) : [], function(_) {
                return s.setAttribute("class", _.toString());
            }), n.id && (i || (s.rawAttrs = 'id="'.concat(n.id, '"'))), n.class && !i) {
                var v = 'class="'.concat(s.classList.toString(), '"');
                s.rawAttrs ? s.rawAttrs += " ".concat(v) : s.rawAttrs = v;
            }
            return s;
        }
        return t.prototype.quoteAttribute = function(e) {
            return e == null ? "null" : JSON.stringify(e.replace(/"/g, "&quot;"));
        }, t.prototype.removeChild = function(e) {
            return this.childNodes = this.childNodes.filter(function(n) {
                return n !== e;
            }), this;
        }, t.prototype.exchangeChild = function(e, n) {
            var i = this.childNodes;
            return this.childNodes = i.map(function(u) {
                return u === e ? n : u;
            }), this;
        }, Object.defineProperty(t.prototype, "tagName", {
            get: function() {
                return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName;
            },
            set: function(e) {
                this.rawTagName = e.toLowerCase();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "localName", {
            get: function() {
                return this.rawTagName.toLowerCase();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isVoidElement", {
            get: function() {
                return this.voidTag.isVoidElement(this.localName);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rawText", {
            get: function() {
                return this.childNodes.reduce(function(e, n) {
                    return e += n.rawText;
                }, "");
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "textContent", {
            get: function() {
                return U(this.rawText);
            },
            set: function(e) {
                var n = [
                    new S.default(e, this)
                ];
                this.childNodes = n;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "text", {
            get: function() {
                return U(this.rawText);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "structuredText", {
            get: function() {
                var e = [], n = [
                    e
                ];
                function i(u) {
                    if (u.nodeType === y.default.ELEMENT_NODE) ve.has(u.rawTagName) ? (e.length > 0 && n.push(e = []), u.childNodes.forEach(i), e.length > 0 && n.push(e = [])) : u.childNodes.forEach(i);
                    else if (u.nodeType === y.default.TEXT_NODE) if (u.isWhitespace) e.prependWhitespace = !0;
                    else {
                        var a = u.trimmedText;
                        e.prependWhitespace && (a = " ".concat(a), e.prependWhitespace = !1), e.push(a);
                    }
                }
                return i(this), n.map(function(u) {
                    return u.join("").replace(/\s{2,}/g, " ");
                }).join(`
`).replace(/\s+$/, "");
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.toString = function() {
            var e = this.rawTagName;
            if (e) {
                var n = this.rawAttrs ? " ".concat(this.rawAttrs) : "";
                return this.voidTag.formatNode(e, n, this.innerHTML);
            }
            return this.innerHTML;
        }, Object.defineProperty(t.prototype, "innerHTML", {
            get: function() {
                return this.childNodes.map(function(e) {
                    return e.toString();
                }).join("");
            },
            set: function(e) {
                var n = M(e, this._parseOptions), i = n.childNodes.length ? n.childNodes : [
                    new S.default(e, this)
                ];
                N(i, this), N(this.childNodes, null), this.childNodes = i;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.set_content = function(e, n) {
            if (n === void 0 && (n = {}), e instanceof pe.default) e = [
                e
            ];
            else if (typeof e == "string") {
                n = P(P({}, this._parseOptions), n);
                var i = M(e, n);
                e = i.childNodes.length ? i.childNodes : [
                    new S.default(i.innerHTML, this)
                ];
            }
            return N(this.childNodes, null), N(e, this), this.childNodes = e, this;
        }, t.prototype.replaceWith = function() {
            for(var e = this, n = [], i = 0; i < arguments.length; i++)n[i] = arguments[i];
            var u = this.parentNode, a = n.map(function(o) {
                if (o instanceof pe.default) return [
                    o
                ];
                if (typeof o == "string") {
                    var s = M(o, e._parseOptions);
                    return s.childNodes.length ? s.childNodes : [
                        new S.default(o, e)
                    ];
                }
                return [];
            }).flat(), l = u.childNodes.findIndex(function(o) {
                return o === e;
            });
            return N([
                this
            ], null), u.childNodes = W(W(W([], u.childNodes.slice(0, l), !0), N(a, u), !0), u.childNodes.slice(l + 1), !0), this;
        }, Object.defineProperty(t.prototype, "outerHTML", {
            get: function() {
                return this.toString();
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.trimRight = function(e) {
            for(var n = 0; n < this.childNodes.length; n++){
                var i = this.childNodes[n];
                if (i.nodeType === y.default.ELEMENT_NODE) i.trimRight(e);
                else {
                    var u = i.rawText.search(e);
                    u > -1 && (i.rawText = i.rawText.substr(0, u), this.childNodes.length = n + 1);
                }
            }
            return this;
        }, Object.defineProperty(t.prototype, "structure", {
            get: function() {
                var e = [], n = 0;
                function i(a) {
                    e.push("  ".repeat(n) + a);
                }
                function u(a) {
                    var l = a.id ? "#".concat(a.id) : "", o = a.classList.length ? ".".concat(a.classList.value.join(".")) : "";
                    i("".concat(a.rawTagName).concat(l).concat(o)), n++, a.childNodes.forEach(function(s) {
                        s.nodeType === y.default.ELEMENT_NODE ? u(s) : s.nodeType === y.default.TEXT_NODE && (s.isWhitespace || i("#text"));
                    }), n--;
                }
                return u(this), e.join(`
`);
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.removeWhitespace = function() {
            var e = this, n = 0;
            return this.childNodes.forEach(function(i) {
                if (i.nodeType === y.default.TEXT_NODE) {
                    if (i.isWhitespace) return;
                    i.rawText = i.trimmedRawText;
                } else i.nodeType === y.default.ELEMENT_NODE && i.removeWhitespace();
                e.childNodes[n++] = i;
            }), this.childNodes.length = n, this;
        }, t.prototype.querySelectorAll = function(e) {
            return (0, de.selectAll)(e, this, {
                xmlMode: !0,
                adapter: he.default
            });
        }, t.prototype.querySelector = function(e) {
            return (0, de.selectOne)(e, this, {
                xmlMode: !0,
                adapter: he.default
            });
        }, t.prototype.getElementsByTagName = function(e) {
            for(var n = e.toUpperCase(), i = [], u = [], a = this, l = 0; l !== void 0;){
                var o = void 0;
                do o = a.childNodes[l++];
                while (l < a.childNodes.length && o === void 0)
                if (o === void 0) {
                    a = a.parentNode, l = u.pop();
                    continue;
                }
                o.nodeType === y.default.ELEMENT_NODE && ((e === "*" || o.tagName === n) && i.push(o), o.childNodes.length > 0 && (u.push(l), a = o, l = 0));
            }
            return i;
        }, t.prototype.getElementById = function(e) {
            for(var n = [], i = this, u = 0; u !== void 0;){
                var a = void 0;
                do a = i.childNodes[u++];
                while (u < i.childNodes.length && a === void 0)
                if (a === void 0) {
                    i = i.parentNode, u = n.pop();
                    continue;
                }
                if (a.nodeType === y.default.ELEMENT_NODE) {
                    if (a.id === e) return a;
                    a.childNodes.length > 0 && (n.push(u), i = a, u = 0);
                }
            }
            return null;
        }, t.prototype.closest = function(e) {
            var n = new Map, i = this, u = null;
            function a(o, s) {
                for(var v = null, _ = 0, z = s.length; _ < z && !v; _++){
                    var f = s[_];
                    if (o(f)) v = f;
                    else {
                        var p = n.get(f);
                        p && (v = a(o, [
                            p
                        ]));
                    }
                }
                return v;
            }
            for(; i;)n.set(i, u), u = i, i = i.parentNode;
            for(i = this; i;){
                var l = (0, de.selectOne)(e, i, {
                    xmlMode: !0,
                    adapter: P(P({}, he.default), {
                        getChildren: function(o) {
                            var s = n.get(o);
                            return s && [
                                s
                            ];
                        },
                        getSiblings: function(o) {
                            return [
                                o
                            ];
                        },
                        findOne: a,
                        findAll: function() {
                            return [];
                        }
                    })
                });
                if (l) return l;
                i = i.parentNode;
            }
            return null;
        }, t.prototype.appendChild = function(e) {
            return e.remove(), this.childNodes.push(e), e.parentNode = this, e;
        }, Object.defineProperty(t.prototype, "firstChild", {
            get: function() {
                return this.childNodes[0];
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lastChild", {
            get: function() {
                return (0, D.default)(this.childNodes);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "attrs", {
            get: function() {
                if (this._attrs) return this._attrs;
                this._attrs = {};
                var e = this.rawAttributes;
                for(var n in e){
                    var i = e[n] || "";
                    this._attrs[n.toLowerCase()] = U(i);
                }
                return this._attrs;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "attributes", {
            get: function() {
                var e = {}, n = this.rawAttributes;
                for(var i in n){
                    var u = n[i] || "";
                    e[i] = U(u);
                }
                return e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rawAttributes", {
            get: function() {
                if (this._rawAttrs) return this._rawAttrs;
                var e = {};
                if (this.rawAttrs) for(var n = /([a-zA-Z()[\]#@$.?][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g, i = void 0; i = n.exec(this.rawAttrs);){
                    var u = i[1], a = i[2] || null;
                    a && (a[0] === "'" || a[0] === '"') && (a = a.slice(1, a.length - 1)), e[u] = a;
                }
                return this._rawAttrs = e, e;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.removeAttribute = function(e) {
            var n = this.rawAttributes;
            return delete n[e], this._attrs && delete this._attrs[e], this.rawAttrs = Object.keys(n).map(function(i) {
                var u = JSON.stringify(n[i]);
                return u === void 0 || u === "null" ? i : "".concat(i, "=").concat(u);
            }).join(" "), e === "id" && (this.id = ""), this;
        }, t.prototype.hasAttribute = function(e) {
            return e.toLowerCase() in this.attrs;
        }, t.prototype.getAttribute = function(e) {
            return this.attrs[e.toLowerCase()];
        }, t.prototype.setAttribute = function(e, n) {
            var i = this;
            if (arguments.length < 2) throw new Error("Failed to execute 'setAttribute' on 'Element'");
            var u = e.toLowerCase(), a = this.rawAttributes;
            for(var l in a)if (l.toLowerCase() === u) {
                e = l;
                break;
            }
            return a[e] = String(n), this._attrs && (this._attrs[u] = U(a[e])), this.rawAttrs = Object.keys(a).map(function(o) {
                var s = i.quoteAttribute(a[o]);
                return s === "null" || s === '""' ? o : "".concat(o, "=").concat(s);
            }).join(" "), e === "id" && (this.id = n), this;
        }, t.prototype.setAttributes = function(e) {
            var n = this;
            return this._attrs && delete this._attrs, this._rawAttrs && delete this._rawAttrs, this.rawAttrs = Object.keys(e).map(function(i) {
                var u = e[i];
                return u === "null" || u === '""' ? i : "".concat(i, "=").concat(n.quoteAttribute(String(u)));
            }).join(" "), this;
        }, t.prototype.insertAdjacentHTML = function(e, n) {
            var i, u, a, l = this;
            if (arguments.length < 2) throw new Error("2 arguments required");
            var o = M(n, this._parseOptions);
            if (e === "afterend") {
                var s = this.parentNode.childNodes.findIndex(function(v) {
                    return v === l;
                });
                N(o.childNodes, this.parentNode), (i = this.parentNode.childNodes).splice.apply(i, W([
                    s + 1,
                    0
                ], o.childNodes, !1));
            } else if (e === "afterbegin") N(o.childNodes, this), (u = this.childNodes).unshift.apply(u, o.childNodes);
            else if (e === "beforeend") o.childNodes.forEach(function(v) {
                l.appendChild(v);
            });
            else if (e === "beforebegin") {
                var s = this.parentNode.childNodes.findIndex(function(_) {
                    return _ === l;
                });
                N(o.childNodes, this.parentNode), (a = this.parentNode.childNodes).splice.apply(a, W([
                    s,
                    0
                ], o.childNodes, !1));
            } else throw new Error("The value provided ('".concat(e, "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"));
            return this;
        }, Object.defineProperty(t.prototype, "nextSibling", {
            get: function() {
                if (this.parentNode) {
                    for(var e = this.parentNode.childNodes, n = 0; n < e.length;){
                        var i = e[n++];
                        if (this === i) return e[n] || null;
                    }
                    return null;
                }
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "nextElementSibling", {
            get: function() {
                if (this.parentNode) {
                    for(var e = this.parentNode.childNodes, n = 0, i = !1; n < e.length;){
                        var u = e[n++];
                        if (i) {
                            if (u instanceof t) return u || null;
                        } else this === u && (i = !0);
                    }
                    return null;
                }
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "previousSibling", {
            get: function() {
                if (this.parentNode) {
                    for(var e = this.parentNode.childNodes, n = e.length; n > 0;){
                        var i = e[--n];
                        if (this === i) return e[n - 1] || null;
                    }
                    return null;
                }
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "previousElementSibling", {
            get: function() {
                if (this.parentNode) {
                    for(var e = this.parentNode.childNodes, n = e.length, i = !1; n > 0;){
                        var u = e[--n];
                        if (i) {
                            if (u instanceof t) return u || null;
                        } else this === u && (i = !0);
                    }
                    return null;
                }
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "classNames", {
            get: function() {
                return this.classList.toString();
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.clone = function() {
            return M(this.toString(), this._parseOptions).firstChild;
        }, t;
    }(pe.default);
    h.default = _e;
    var T = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g, Bt = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi, Vt = {
        area: !0,
        AREA: !0,
        base: !0,
        BASE: !0,
        br: !0,
        BR: !0,
        col: !0,
        COL: !0,
        hr: !0,
        HR: !0,
        img: !0,
        IMG: !0,
        input: !0,
        INPUT: !0,
        link: !0,
        LINK: !0,
        meta: !0,
        META: !0,
        source: !0,
        SOURCE: !0,
        embed: !0,
        EMBED: !0,
        param: !0,
        PARAM: !0,
        track: !0,
        TRACK: !0,
        wbr: !0,
        WBR: !0
    }, Ie = {
        li: {
            li: !0,
            LI: !0
        },
        LI: {
            li: !0,
            LI: !0
        },
        p: {
            p: !0,
            div: !0,
            P: !0,
            DIV: !0
        },
        P: {
            p: !0,
            div: !0,
            P: !0,
            DIV: !0
        },
        b: {
            div: !0,
            DIV: !0
        },
        B: {
            div: !0,
            DIV: !0
        },
        td: {
            td: !0,
            th: !0,
            TD: !0,
            TH: !0
        },
        TD: {
            td: !0,
            th: !0,
            TD: !0,
            TH: !0
        },
        th: {
            td: !0,
            th: !0,
            TD: !0,
            TH: !0
        },
        TH: {
            td: !0,
            th: !0,
            TD: !0,
            TH: !0
        },
        h1: {
            h1: !0,
            H1: !0
        },
        H1: {
            h1: !0,
            H1: !0
        },
        h2: {
            h2: !0,
            H2: !0
        },
        H2: {
            h2: !0,
            H2: !0
        },
        h3: {
            h3: !0,
            H3: !0
        },
        H3: {
            h3: !0,
            H3: !0
        },
        h4: {
            h4: !0,
            H4: !0
        },
        H4: {
            h4: !0,
            H4: !0
        },
        h5: {
            h5: !0,
            H5: !0
        },
        H5: {
            h5: !0,
            H5: !0
        },
        h6: {
            h6: !0,
            H6: !0
        },
        H6: {
            h6: !0,
            H6: !0
        }
    }, ke = {
        li: {
            ul: !0,
            ol: !0,
            UL: !0,
            OL: !0
        },
        LI: {
            ul: !0,
            ol: !0,
            UL: !0,
            OL: !0
        },
        a: {
            div: !0,
            DIV: !0
        },
        A: {
            div: !0,
            DIV: !0
        },
        b: {
            div: !0,
            DIV: !0
        },
        B: {
            div: !0,
            DIV: !0
        },
        i: {
            div: !0,
            DIV: !0
        },
        I: {
            div: !0,
            DIV: !0
        },
        p: {
            div: !0,
            DIV: !0
        },
        P: {
            div: !0,
            DIV: !0
        },
        td: {
            tr: !0,
            table: !0,
            TR: !0,
            TABLE: !0
        },
        TD: {
            tr: !0,
            table: !0,
            TR: !0,
            TABLE: !0
        },
        th: {
            tr: !0,
            table: !0,
            TR: !0,
            TABLE: !0
        },
        TH: {
            tr: !0,
            table: !0,
            TR: !0,
            TABLE: !0
        }
    }, X = "documentfragmentcontainer";
    function Be(r, t) {
        var e, n;
        t === void 0 && (t = {});
        var i = new Re.default((e = t?.voidTag) === null || e === void 0 ? void 0 : e.closingSlash, (n = t?.voidTag) === null || n === void 0 ? void 0 : n.tags), u = t.blockTextElements || {
            script: !0,
            noscript: !0,
            style: !0,
            pre: !0
        }, a = Object.keys(u), l = a.map(function(g) {
            return new RegExp("^".concat(g, "$"), "i");
        }), o = a.filter(function(g) {
            return u[g];
        }).map(function(g) {
            return new RegExp("^".concat(g, "$"), "i");
        });
        function s(g) {
            return o.some(function(k) {
                return k.test(g);
            });
        }
        function v(g) {
            return l.some(function(k) {
                return k.test(g);
            });
        }
        var _ = function(g, k) {
            return [
                g - ye,
                k - ye
            ];
        }, z = new _e(null, {}, "", null, [
            0,
            r.length
        ], i, t), f = z, p = [
            z
        ], w = -1, H = void 0, C;
        r = "<".concat(X, ">").concat(r, "</").concat(X, ">");
        for(var be = t.lowerCaseTagName, Ye = t.fixNestedATags, et = r.length - (X.length + 2), ye = X.length + 2; C = T.exec(r);){
            var Te = C[0], ee = C[1], d = C[2], Ne = C[3], me = C[4], te = Te.length, $ = T.lastIndex - te, J = T.lastIndex;
            if (w > -1 && w + te < J) {
                var E = r.substring(w, $);
                f.appendChild(new S.default(E, f, _(w, $)));
            }
            if (w = T.lastIndex, d !== X) {
                if (Te[1] === "!") {
                    if (t.comment) {
                        var E = r.substring($ + 4, J - 3);
                        f.appendChild(new Pt.default(E, f, _($, J)));
                    }
                    continue;
                }
                if (be && (d = d.toLowerCase()), !ee) {
                    for(var we = {}, re = void 0; re = Bt.exec(Ne);){
                        var tt = re[1], q = re[2], rt = q[0] === "'" || q[0] === '"';
                        we[tt.toLowerCase()] = rt ? q.slice(1, q.length - 1) : q;
                    }
                    var I = f.rawTagName;
                    !me && Ie[I] && Ie[I][d] && (p.pop(), f = (0, D.default)(p)), Ye && (d === "a" || d === "A") && (H !== void 0 && (p.splice(H), f = (0, D.default)(p)), H = p.length);
                    var Z = T.lastIndex, nt = Z - te;
                    if (f = f.appendChild(new _e(d, we, Ne.slice(1), null, _(nt, Z), i, t)), p.push(f), v(d)) {
                        var ne = "</".concat(d, ">"), F = be ? r.toLocaleLowerCase().indexOf(ne, T.lastIndex) : r.indexOf(ne, T.lastIndex), Oe = F === -1 ? et : F;
                        if (s(d)) {
                            var E = r.substring(Z, Oe);
                            E.length > 0 && /\S/.test(E) && f.appendChild(new S.default(E, f, _(Z, Oe)));
                        }
                        F === -1 ? w = T.lastIndex = r.length + 1 : (w = T.lastIndex = F + ne.length, ee = "/");
                    }
                }
                if (ee || me || Vt[d]) for(;;)if (H != null && (d === "a" || d === "A") && (H = void 0), f.rawTagName === d) {
                    f.range[1] = _(-1, Math.max(w, J))[1], p.pop(), f = (0, D.default)(p);
                    break;
                } else {
                    var I = f.tagName;
                    if (ke[I] && ke[I][d]) {
                        p.pop(), f = (0, D.default)(p);
                        continue;
                    }
                    break;
                }
            }
        }
        return p;
    }
    h.base_parse = Be;
    function M(r, t) {
        t === void 0 && (t = {});
        for(var e = Be(r, t), n = e[0], i = function() {
            var u = e.pop(), a = (0, D.default)(e);
            u.parentNode && u.parentNode.parentNode && (u.parentNode === a && u.tagName === a.tagName ? t.parseNoneClosedTags !== !0 && (a.removeChild(u), u.childNodes.forEach(function(l) {
                a.parentNode.appendChild(l);
            }), e.pop()) : t.parseNoneClosedTags !== !0 && (a.removeChild(u), u.childNodes.forEach(function(l) {
                a.appendChild(l);
            })));
        }; e.length > 1;)i();
        return n;
    }
    h.parse = M;
    function N(r, t) {
        return r.map(function(e) {
            return e.parentNode = t, e;
        });
    }
});
var Ve = b5((Y)=>{
    "use strict";
    Object.defineProperty(Y, "__esModule", {
        value: !0
    });
    Y.default = void 0;
    var Wt = Q1();
    Object.defineProperty(Y, "default", {
        enumerable: !0,
        get: function() {
            return Wt.parse;
        }
    });
});
var We = b5((ge)=>{
    "use strict";
    Object.defineProperty(ge, "__esModule", {
        value: !0
    });
    var Ut = Q1();
    function Xt(r, t) {
        t === void 0 && (t = {});
        var e = (0, Ut.base_parse)(r, t);
        return Boolean(e.length === 1);
    }
    ge.default = Xt;
});
var Ke = b5((c)=>{
    "use strict";
    var A = c && c.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        };
    };
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    c.NodeType = c.TextNode = c.Node = c.valid = c.CommentNode = c.HTMLElement = c.parse = void 0;
    var Ue = A(oe1());
    c.CommentNode = Ue.default;
    var Xe = A(Q1());
    c.HTMLElement = Xe.default;
    var ze = A(R1());
    c.Node = ze.default;
    var $e = A(ce1());
    c.TextNode = $e.default;
    var Je = A(L2());
    c.NodeType = Je.default;
    var Ze = A(Ve()), Fe = A(We());
    c.valid = Fe.default;
    function m(r, t) {
        return t === void 0 && (t = {}), (0, Ze.default)(r, t);
    }
    c.default = m;
    c.parse = m;
    m.parse = Ze.default;
    m.HTMLElement = Xe.default;
    m.CommentNode = Ue.default;
    m.valid = Fe.default;
    m.Node = ze.default;
    m.TextNode = $e.default;
    m.NodeType = Je.default;
});
var Qe1 = ft1(Ke()), { NodeType: ur , TextNode: ar , Node: or , valid: sr , CommentNode: lr , HTMLElement: fr , parse: cr  } = Qe1, { default: Ge1 , ...zt } = Qe1;
var Ie = Object.create;
var ft2 = Object.defineProperty;
var Me = Object.getOwnPropertyDescriptor;
var We1 = Object.getOwnPropertyNames;
var Ue = Object.getPrototypeOf, ze = Object.prototype.hasOwnProperty;
var qe = (t)=>ft2(t, "__esModule", {
        value: !0
    });
var g4 = (t, e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e), e.exports);
var Xe1 = (t, e, i, s)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let _ of We1(e))!ze.call(t, _) && (i || _ !== "default") && ft2(t, _, {
        get: ()=>e[_],
        enumerable: !(s = Me(e, _)) || s.enumerable
    });
    return t;
}, jt1 = (t, e)=>Xe1(qe(ft2(t != null ? Ie(Ue(t)) : {}, "default", !e && t && t.__esModule ? {
        get: ()=>t.default,
        enumerable: !0
    } : {
        value: t,
        enumerable: !0
    })), t);
var it1 = g4((Hi, Kt)=>{
    "use strict";
    function y(t) {
        this.__parent = t, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
    }
    y.prototype.clone_empty = function() {
        var t = new y(this.__parent);
        return t.set_indent(this.__indent_count, this.__alignment_count), t;
    };
    y.prototype.item = function(t) {
        return t < 0 ? this.__items[this.__items.length + t] : this.__items[t];
    };
    y.prototype.has_match = function(t) {
        for(var e = this.__items.length - 1; e >= 0; e--)if (this.__items[e].match(t)) return !0;
        return !1;
    };
    y.prototype.set_indent = function(t, e) {
        this.is_empty() && (this.__indent_count = t || 0, this.__alignment_count = e || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
    };
    y.prototype._set_wrap_point = function() {
        this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
    };
    y.prototype._should_wrap = function() {
        return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
    };
    y.prototype._allow_wrap = function() {
        if (this._should_wrap()) {
            this.__parent.add_new_line();
            var t = this.__parent.current_line;
            return t.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), t.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), t.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, t.__items[0] === " " && (t.__items.splice(0, 1), t.__character_count -= 1), !0;
        }
        return !1;
    };
    y.prototype.is_empty = function() {
        return this.__items.length === 0;
    };
    y.prototype.last = function() {
        return this.is_empty() ? null : this.__items[this.__items.length - 1];
    };
    y.prototype.push = function(t) {
        this.__items.push(t);
        var e = t.lastIndexOf(`
`);
        e !== -1 ? this.__character_count = t.length - e : this.__character_count += t.length;
    };
    y.prototype.pop = function() {
        var t = null;
        return this.is_empty() || (t = this.__items.pop(), this.__character_count -= t.length), t;
    };
    y.prototype._remove_indent = function() {
        this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
    };
    y.prototype._remove_wrap_indent = function() {
        this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
    };
    y.prototype.trim = function() {
        for(; this.last() === " ";)this.__items.pop(), this.__character_count -= 1;
    };
    y.prototype.toString = function() {
        var t = "";
        return this.is_empty() ? this.__parent.indent_empty_lines && (t = this.__parent.get_indent_string(this.__indent_count)) : (t = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), t += this.__items.join("")), t;
    };
    function q(t, e) {
        this.__cache = [
            ""
        ], this.__indent_size = t.indent_size, this.__indent_string = t.indent_char, t.indent_with_tabs || (this.__indent_string = new Array(t.indent_size + 1).join(t.indent_char)), e = e || "", t.indent_level > 0 && (e = new Array(t.indent_level + 1).join(this.__indent_string)), this.__base_string = e, this.__base_string_length = e.length;
    }
    q.prototype.get_indent_size = function(t, e) {
        var i = this.__base_string_length;
        return e = e || 0, t < 0 && (i = 0), i += t * this.__indent_size, i += e, i;
    };
    q.prototype.get_indent_string = function(t, e) {
        var i = this.__base_string;
        return e = e || 0, t < 0 && (t = 0, i = ""), e += t * this.__indent_size, this.__ensure_cache(e), i += this.__cache[e], i;
    };
    q.prototype.__ensure_cache = function(t) {
        for(; t >= this.__cache.length;)this.__add_column();
    };
    q.prototype.__add_column = function() {
        var t = this.__cache.length, e = 0, i = "";
        this.__indent_size && t >= this.__indent_size && (e = Math.floor(t / this.__indent_size), t -= e * this.__indent_size, i = new Array(e + 1).join(this.__indent_string)), t && (i += new Array(t + 1).join(" ")), this.__cache.push(i);
    };
    function v(t, e) {
        this.__indent_cache = new q(t, e), this.raw = !1, this._end_with_newline = t.end_with_newline, this.indent_size = t.indent_size, this.wrap_line_length = t.wrap_line_length, this.indent_empty_lines = t.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new y(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
    }
    v.prototype.__add_outputline = function() {
        this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
    };
    v.prototype.get_line_number = function() {
        return this.__lines.length;
    };
    v.prototype.get_indent_string = function(t, e) {
        return this.__indent_cache.get_indent_string(t, e);
    };
    v.prototype.get_indent_size = function(t, e) {
        return this.__indent_cache.get_indent_size(t, e);
    };
    v.prototype.is_empty = function() {
        return !this.previous_line && this.current_line.is_empty();
    };
    v.prototype.add_new_line = function(t) {
        return this.is_empty() || !t && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
    };
    v.prototype.get_code = function(t) {
        this.trim(!0);
        var e = this.current_line.pop();
        e && (e[e.length - 1] === `
` && (e = e.replace(/\n+$/g, "")), this.current_line.push(e)), this._end_with_newline && this.__add_outputline();
        var i = this.__lines.join(`
`);
        return t !== `
` && (i = i.replace(/[\n]/g, t)), i;
    };
    v.prototype.set_wrap_point = function() {
        this.current_line._set_wrap_point();
    };
    v.prototype.set_indent = function(t, e) {
        return t = t || 0, e = e || 0, this.next_line.set_indent(t, e), this.__lines.length > 1 ? (this.current_line.set_indent(t, e), !0) : (this.current_line.set_indent(), !1);
    };
    v.prototype.add_raw_token = function(t) {
        for(var e = 0; e < t.newlines; e++)this.__add_outputline();
        this.current_line.set_indent(-1), this.current_line.push(t.whitespace_before), this.current_line.push(t.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
    };
    v.prototype.add_token = function(t) {
        this.__add_space_before_token(), this.current_line.push(t), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
    };
    v.prototype.__add_space_before_token = function() {
        this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
    };
    v.prototype.remove_indent = function(t) {
        for(var e = this.__lines.length; t < e;)this.__lines[t]._remove_indent(), t++;
        this.current_line._remove_wrap_indent();
    };
    v.prototype.trim = function(t) {
        for(t = t === void 0 ? !1 : t, this.current_line.trim(); t && this.__lines.length > 1 && this.current_line.is_empty();)this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
        this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
    };
    v.prototype.just_added_newline = function() {
        return this.current_line.is_empty();
    };
    v.prototype.just_added_blankline = function() {
        return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
    };
    v.prototype.ensure_empty_line_above = function(t, e) {
        for(var i = this.__lines.length - 2; i >= 0;){
            var s = this.__lines[i];
            if (s.is_empty()) break;
            if (s.item(0).indexOf(t) !== 0 && s.item(-1) !== e) {
                this.__lines.splice(i + 1, 0, new y(this)), this.previous_line = this.__lines[this.__lines.length - 2];
                break;
            }
            i--;
        }
    };
    Kt.exports.Output = v;
});
var ct1 = g4((Ji, It)=>{
    "use strict";
    function Ve(t, e, i, s) {
        this.type = t, this.text = e, this.comments_before = null, this.newlines = i || 0, this.whitespace_before = s || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
    }
    It.exports.Token = Ve;
});
var gt1 = g4((D)=>{
    "use strict";
    var Ge = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", Mt = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", dt = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", Wt = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", Ut = "(?:\\\\u[0-9a-fA-F]{4}|[" + Ge + dt + "])", Fe = "(?:\\\\u[0-9a-fA-F]{4}|[" + Mt + dt + Wt + "])*";
    D.identifier = new RegExp(Ut + Fe, "g");
    D.identifierStart = new RegExp(Ut);
    D.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + Mt + dt + Wt + "])+");
    D.newline = /[\n\r\u2028\u2029]/;
    D.lineBreak = new RegExp(`\r
|` + D.newline.source);
    D.allLineBreaks = new RegExp(D.lineBreak.source, "g");
});
var _t = g4((es, st)=>{
    "use strict";
    function j(t, e) {
        this.raw_options = zt(t, e), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", [
            "auto",
            "none",
            "django",
            "erb",
            "handlebars",
            "php",
            "smarty"
        ], [
            "auto"
        ]);
    }
    j.prototype._get_array = function(t, e) {
        var i = this.raw_options[t], s = e || [];
        return typeof i == "object" ? i !== null && typeof i.concat == "function" && (s = i.concat()) : typeof i == "string" && (s = i.split(/[^a-zA-Z0-9_\/\-]+/)), s;
    };
    j.prototype._get_boolean = function(t, e) {
        var i = this.raw_options[t], s = i === void 0 ? !!e : !!i;
        return s;
    };
    j.prototype._get_characters = function(t, e) {
        var i = this.raw_options[t], s = e || "";
        return typeof i == "string" && (s = i.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), s;
    };
    j.prototype._get_number = function(t, e) {
        var i = this.raw_options[t];
        e = parseInt(e, 10), isNaN(e) && (e = 0);
        var s = parseInt(i, 10);
        return isNaN(s) && (s = e), s;
    };
    j.prototype._get_selection = function(t, e, i) {
        var s = this._get_selection_list(t, e, i);
        if (s.length !== 1) throw new Error("Invalid Option Value: The option '" + t + `' can only be one of the following values:
` + e + `
You passed in: '` + this.raw_options[t] + "'");
        return s[0];
    };
    j.prototype._get_selection_list = function(t, e, i) {
        if (!e || e.length === 0) throw new Error("Selection list cannot be empty.");
        if (i = i || [
            e[0]
        ], !this._is_valid_selection(i, e)) throw new Error("Invalid Default Value!");
        var s = this._get_array(t, i);
        if (!this._is_valid_selection(s, e)) throw new Error("Invalid Option Value: The option '" + t + `' can contain only the following values:
` + e + `
You passed in: '` + this.raw_options[t] + "'");
        return s;
    };
    j.prototype._is_valid_selection = function(t, e) {
        return t.length && e.length && !t.some(function(i) {
            return e.indexOf(i) === -1;
        });
    };
    function zt(t, e) {
        var i = {};
        t = qt(t);
        var s;
        for(s in t)s !== e && (i[s] = t[s]);
        if (e && t[e]) for(s in t[e])i[s] = t[e][s];
        return i;
    }
    function qt(t) {
        var e = {}, i;
        for(i in t){
            var s = i.replace(/-/g, "_");
            e[s] = t[i];
        }
        return e;
    }
    st.exports.Options = j;
    st.exports.normalizeOpts = qt;
    st.exports.mergeOpts = zt;
});
var mt = g4((is, Gt)=>{
    "use strict";
    var Xt = _t().Options, $e = [
        "before-newline",
        "after-newline",
        "preserve-newline"
    ];
    function Vt(t) {
        Xt.call(this, t, "js");
        var e = this.raw_options.brace_style || null;
        e === "expand-strict" ? this.raw_options.brace_style = "expand" : e === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
        var i = this._get_selection_list("brace_style", [
            "collapse",
            "expand",
            "end-expand",
            "none",
            "preserve-inline"
        ]);
        this.brace_preserve_inline = !1, this.brace_style = "collapse";
        for(var s = 0; s < i.length; s++)i[s] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = i[s];
        this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", $e), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
    }
    Vt.prototype = new Xt;
    Gt.exports.Options = Vt;
});
var nt = g4((ss, $t)=>{
    "use strict";
    var Ft = RegExp.prototype.hasOwnProperty("sticky");
    function x(t) {
        this.__input = t || "", this.__input_length = this.__input.length, this.__position = 0;
    }
    x.prototype.restart = function() {
        this.__position = 0;
    };
    x.prototype.back = function() {
        this.__position > 0 && (this.__position -= 1);
    };
    x.prototype.hasNext = function() {
        return this.__position < this.__input_length;
    };
    x.prototype.next = function() {
        var t = null;
        return this.hasNext() && (t = this.__input.charAt(this.__position), this.__position += 1), t;
    };
    x.prototype.peek = function(t) {
        var e = null;
        return t = t || 0, t += this.__position, t >= 0 && t < this.__input_length && (e = this.__input.charAt(t)), e;
    };
    x.prototype.__match = function(t, e) {
        t.lastIndex = e;
        var i = t.exec(this.__input);
        return i && !(Ft && t.sticky) && i.index !== e && (i = null), i;
    };
    x.prototype.test = function(t, e) {
        return e = e || 0, e += this.__position, e >= 0 && e < this.__input_length ? !!this.__match(t, e) : !1;
    };
    x.prototype.testChar = function(t, e) {
        var i = this.peek(e);
        return t.lastIndex = 0, i !== null && t.test(i);
    };
    x.prototype.match = function(t) {
        var e = this.__match(t, this.__position);
        return e ? this.__position += e[0].length : e = null, e;
    };
    x.prototype.read = function(t, e, i) {
        var s = "", _;
        return t && (_ = this.match(t), _ && (s += _[0])), e && (_ || !t) && (s += this.readUntil(e, i)), s;
    };
    x.prototype.readUntil = function(t, e) {
        var i = "", s = this.__position;
        t.lastIndex = this.__position;
        var _ = t.exec(this.__input);
        return _ ? (s = _.index, e && (s += _[0].length)) : s = this.__input_length, i = this.__input.substring(this.__position, s), this.__position = s, i;
    };
    x.prototype.readUntilAfter = function(t) {
        return this.readUntil(t, !0);
    };
    x.prototype.get_regexp = function(t, e) {
        var i = null, s = "g";
        return e && Ft && (s = "y"), typeof t == "string" && t !== "" ? i = new RegExp(t, s) : t && (i = new RegExp(t.source, s)), i;
    };
    x.prototype.get_literal_regexp = function(t) {
        return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
    };
    x.prototype.peekUntilAfter = function(t) {
        var e = this.__position, i = this.readUntilAfter(t);
        return this.__position = e, i;
    };
    x.prototype.lookBack = function(t) {
        var e = this.__position - 1;
        return e >= t.length && this.__input.substring(e - t.length, e).toLowerCase() === t;
    };
    $t.exports.InputScanner = x;
});
var Zt = g4((_s, Qt)=>{
    "use strict";
    function M(t) {
        this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = t;
    }
    M.prototype.restart = function() {
        this.__position = 0;
    };
    M.prototype.isEmpty = function() {
        return this.__tokens_length === 0;
    };
    M.prototype.hasNext = function() {
        return this.__position < this.__tokens_length;
    };
    M.prototype.next = function() {
        var t = null;
        return this.hasNext() && (t = this.__tokens[this.__position], this.__position += 1), t;
    };
    M.prototype.peek = function(t) {
        var e = null;
        return t = t || 0, t += this.__position, t >= 0 && t < this.__tokens_length && (e = this.__tokens[t]), e;
    };
    M.prototype.add = function(t) {
        this.__parent_token && (t.parent = this.__parent_token), this.__tokens.push(t), this.__tokens_length += 1;
    };
    Qt.exports.TokenStream = M;
});
var X2 = g4((ns, Yt)=>{
    "use strict";
    function C(t, e) {
        this._input = t, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, e && (this._starting_pattern = this._input.get_regexp(e._starting_pattern, !0), this._match_pattern = this._input.get_regexp(e._match_pattern, !0), this._until_pattern = this._input.get_regexp(e._until_pattern), this._until_after = e._until_after);
    }
    C.prototype.read = function() {
        var t = this._input.read(this._starting_pattern);
        return (!this._starting_pattern || t) && (t += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), t;
    };
    C.prototype.read_match = function() {
        return this._input.match(this._match_pattern);
    };
    C.prototype.until_after = function(t) {
        var e = this._create();
        return e._until_after = !0, e._until_pattern = this._input.get_regexp(t), e._update(), e;
    };
    C.prototype.until = function(t) {
        var e = this._create();
        return e._until_after = !1, e._until_pattern = this._input.get_regexp(t), e._update(), e;
    };
    C.prototype.starting_with = function(t) {
        var e = this._create();
        return e._starting_pattern = this._input.get_regexp(t, !0), e._update(), e;
    };
    C.prototype.matching = function(t) {
        var e = this._create();
        return e._match_pattern = this._input.get_regexp(t, !0), e._update(), e;
    };
    C.prototype._create = function() {
        return new C(this._input, this);
    };
    C.prototype._update = function() {};
    Yt.exports.Pattern = C;
});
var te1 = g4((as, Jt)=>{
    "use strict";
    var Ht = X2().Pattern;
    function K(t, e) {
        Ht.call(this, t, e), e ? this._line_regexp = this._input.get_regexp(e._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
    }
    K.prototype = new Ht;
    K.prototype.__set_whitespace_patterns = function(t, e) {
        t += "\\t ", e += "\\n\\r", this._match_pattern = this._input.get_regexp("[" + t + e + "]+", !0), this._newline_regexp = this._input.get_regexp("\\r\\n|[" + e + "]");
    };
    K.prototype.read = function() {
        this.newline_count = 0, this.whitespace_before_token = "";
        var t = this._input.read(this._match_pattern);
        if (t === " ") this.whitespace_before_token = " ";
        else if (t) {
            var e = this.__split(this._newline_regexp, t);
            this.newline_count = e.length - 1, this.whitespace_before_token = e[this.newline_count];
        }
        return t;
    };
    K.prototype.matching = function(t, e) {
        var i = this._create();
        return i.__set_whitespace_patterns(t, e), i._update(), i;
    };
    K.prototype._create = function() {
        return new K(this._input, this);
    };
    K.prototype.__split = function(t, e) {
        t.lastIndex = 0;
        for(var i = 0, s = [], _ = t.exec(e); _;)s.push(e.substring(i, _.index)), i = _.index + _[0].length, _ = t.exec(e);
        return i < e.length ? s.push(e.substring(i, e.length)) : s.push(""), s;
    };
    Jt.exports.WhitespacePattern = K;
});
var G3 = g4((rs, yt)=>{
    "use strict";
    var Qe = nt().InputScanner, ee = ct1().Token, bt = Zt().TokenStream, Ze = te1().WhitespacePattern, V = {
        START: "TK_START",
        RAW: "TK_RAW",
        EOF: "TK_EOF"
    }, P = function(t, e) {
        this._input = new Qe(t), this._options = e || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new Ze(this._input);
    };
    P.prototype.tokenize = function() {
        this._input.restart(), this.__tokens = new bt, this._reset();
        for(var t, e = new ee(V.START, ""), i = null, s = [], _ = new bt; e.type !== V.EOF;){
            for(t = this._get_next_token(e, i); this._is_comment(t);)_.add(t), t = this._get_next_token(e, i);
            _.isEmpty() || (t.comments_before = _, _ = new bt), t.parent = i, this._is_opening(t) ? (s.push(i), i = t) : i && this._is_closing(t, i) && (t.opened = i, i.closed = t, i = s.pop(), t.parent = i), t.previous = e, e.next = t, this.__tokens.add(t), e = t;
        }
        return this.__tokens;
    };
    P.prototype._is_first_token = function() {
        return this.__tokens.isEmpty();
    };
    P.prototype._reset = function() {};
    P.prototype._get_next_token = function(t, e) {
        this._readWhitespace();
        var i = this._input.read(/.+/g);
        return i ? this._create_token(V.RAW, i) : this._create_token(V.EOF, "");
    };
    P.prototype._is_comment = function(t) {
        return !1;
    };
    P.prototype._is_opening = function(t) {
        return !1;
    };
    P.prototype._is_closing = function(t, e) {
        return !1;
    };
    P.prototype._create_token = function(t, e) {
        var i = new ee(t, e, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
        return i;
    };
    P.prototype._readWhitespace = function() {
        return this._patterns.whitespace.read();
    };
    yt.exports.Tokenizer = P;
    yt.exports.TOKEN = V;
});
var at2 = g4((us, ie)=>{
    "use strict";
    function vt(t, e) {
        t = typeof t == "string" ? t : t.source, e = typeof e == "string" ? e : e.source, this.__directives_block_pattern = new RegExp(t + / beautify( \w+[:]\w+)+ /.source + e, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(t + /\sbeautify\signore:end\s/.source + e, "g");
    }
    vt.prototype.get_directives = function(t) {
        if (!t.match(this.__directives_block_pattern)) return null;
        var e = {};
        this.__directive_pattern.lastIndex = 0;
        for(var i = this.__directive_pattern.exec(t); i;)e[i[1]] = i[2], i = this.__directive_pattern.exec(t);
        return e;
    };
    vt.prototype.readIgnored = function(t) {
        return t.readUntilAfter(this.__directives_end_ignore_pattern);
    };
    ie.exports.Directives = vt;
});
var Et1 = g4((os, se)=>{
    "use strict";
    var wt = X2().Pattern, xt = {
        django: !1,
        erb: !1,
        handlebars: !1,
        php: !1,
        smarty: !1
    };
    function N(t, e) {
        wt.call(this, t, e), this.__template_pattern = null, this._disabled = Object.assign({}, xt), this._excluded = Object.assign({}, xt), e && (this.__template_pattern = this._input.get_regexp(e.__template_pattern), this._excluded = Object.assign(this._excluded, e._excluded), this._disabled = Object.assign(this._disabled, e._disabled));
        var i = new wt(t);
        this.__patterns = {
            handlebars_comment: i.starting_with(/{{!--/).until_after(/--}}/),
            handlebars_unescaped: i.starting_with(/{{{/).until_after(/}}}/),
            handlebars: i.starting_with(/{{/).until_after(/}}/),
            php: i.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
            erb: i.starting_with(/<%[^%]/).until_after(/[^%]%>/),
            django: i.starting_with(/{%/).until_after(/%}/),
            django_value: i.starting_with(/{{/).until_after(/}}/),
            django_comment: i.starting_with(/{#/).until_after(/#}/),
            smarty: i.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
            smarty_comment: i.starting_with(/{\*/).until_after(/\*}/),
            smarty_literal: i.starting_with(/{literal}/).until_after(/{\/literal}/)
        };
    }
    N.prototype = new wt;
    N.prototype._create = function() {
        return new N(this._input, this);
    };
    N.prototype._update = function() {
        this.__set_templated_pattern();
    };
    N.prototype.disable = function(t) {
        var e = this._create();
        return e._disabled[t] = !0, e._update(), e;
    };
    N.prototype.read_options = function(t) {
        var e = this._create();
        for(var i in xt)e._disabled[i] = t.templating.indexOf(i) === -1;
        return e._update(), e;
    };
    N.prototype.exclude = function(t) {
        var e = this._create();
        return e._excluded[t] = !0, e._update(), e;
    };
    N.prototype.read = function() {
        var t = "";
        this._match_pattern ? t = this._input.read(this._starting_pattern) : t = this._input.read(this._starting_pattern, this.__template_pattern);
        for(var e = this._read_template(); e;)this._match_pattern ? e += this._input.read(this._match_pattern) : e += this._input.readUntil(this.__template_pattern), t += e, e = this._read_template();
        return this._until_after && (t += this._input.readUntilAfter(this._until_pattern)), t;
    };
    N.prototype.__set_templated_pattern = function() {
        var t = [];
        this._disabled.php || t.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || t.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || t.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (t.push(this.__patterns.django._starting_pattern.source), t.push(this.__patterns.django_value._starting_pattern.source), t.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || t.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && t.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + t.join("|") + ")");
    };
    N.prototype._read_template = function() {
        var t = "", e = this._input.peek();
        if (e === "<") {
            var i = this._input.peek(1);
            !this._disabled.php && !this._excluded.php && i === "?" && (t = t || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && i === "%" && (t = t || this.__patterns.erb.read());
        } else e === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (t = t || this.__patterns.handlebars_comment.read(), t = t || this.__patterns.handlebars_unescaped.read(), t = t || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (t = t || this.__patterns.django_value.read()), this._excluded.django || (t = t || this.__patterns.django_comment.read(), t = t || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (t = t || this.__patterns.smarty_comment.read(), t = t || this.__patterns.smarty_literal.read(), t = t || this.__patterns.smarty.read()));
        return t;
    };
    se.exports.TemplatablePattern = N;
});
var $2 = g4((hs, F)=>{
    "use strict";
    var Ye = nt().InputScanner, ne = G3().Tokenizer, Ot = G3().TOKEN, He = at2().Directives, k = gt1(), Je = X2().Pattern, ti = Et1().TemplatablePattern;
    function Tt(t, e) {
        return e.indexOf(t) !== -1;
    }
    var u = {
        START_EXPR: "TK_START_EXPR",
        END_EXPR: "TK_END_EXPR",
        START_BLOCK: "TK_START_BLOCK",
        END_BLOCK: "TK_END_BLOCK",
        WORD: "TK_WORD",
        RESERVED: "TK_RESERVED",
        SEMICOLON: "TK_SEMICOLON",
        STRING: "TK_STRING",
        EQUALS: "TK_EQUALS",
        OPERATOR: "TK_OPERATOR",
        COMMA: "TK_COMMA",
        BLOCK_COMMENT: "TK_BLOCK_COMMENT",
        COMMENT: "TK_COMMENT",
        DOT: "TK_DOT",
        UNKNOWN: "TK_UNKNOWN",
        START: Ot.START,
        RAW: Ot.RAW,
        EOF: Ot.EOF
    }, _e = new He(/\/\*/, /\*\//), ei = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, ii = /[0-9]/, si = /[^\d\.]/, _i = ">>> === !== << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), W = ">>>= ... >>= <<= === >>> !== **= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
    W = W.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
    W = "\\?\\.(?!\\d) " + W;
    W = W.replace(/ /g, "|");
    var ni = new RegExp(W), ae = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), ai = ae.concat([
        "do",
        "in",
        "of",
        "else",
        "get",
        "set",
        "new",
        "catch",
        "finally",
        "typeof",
        "yield",
        "async",
        "await",
        "from",
        "as"
    ]), ri = new RegExp("^(?:" + ai.join("|") + ")$"), rt, E = function(t, e) {
        ne.call(this, t, e), this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
        var i = new Je(this._input), s = new ti(this._input).read_options(this._options);
        this.__patterns = {
            template: s,
            identifier: s.starting_with(k.identifier).matching(k.identifierMatch),
            number: i.matching(ei),
            punct: i.matching(ni),
            comment: i.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
            block_comment: i.starting_with(/\/\*/).until_after(/\*\//),
            html_comment_start: i.matching(/<!--/),
            html_comment_end: i.matching(/-->/),
            include: i.starting_with(/#include/).until_after(k.lineBreak),
            shebang: i.starting_with(/#!/).until_after(k.lineBreak),
            xml: i.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\]|)(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),
            single_quote: s.until(/['\\\n\r\u2028\u2029]/),
            double_quote: s.until(/["\\\n\r\u2028\u2029]/),
            template_text: s.until(/[`\\$]/),
            template_expression: s.until(/[`}\\]/)
        };
    };
    E.prototype = new ne;
    E.prototype._is_comment = function(t) {
        return t.type === u.COMMENT || t.type === u.BLOCK_COMMENT || t.type === u.UNKNOWN;
    };
    E.prototype._is_opening = function(t) {
        return t.type === u.START_BLOCK || t.type === u.START_EXPR;
    };
    E.prototype._is_closing = function(t, e) {
        return (t.type === u.END_BLOCK || t.type === u.END_EXPR) && e && (t.text === "]" && e.text === "[" || t.text === ")" && e.text === "(" || t.text === "}" && e.text === "{");
    };
    E.prototype._reset = function() {
        rt = !1;
    };
    E.prototype._get_next_token = function(t, e) {
        var i = null;
        this._readWhitespace();
        var s = this._input.peek();
        return s === null ? this._create_token(u.EOF, "") : (i = i || this._read_non_javascript(s), i = i || this._read_string(s), i = i || this._read_word(t), i = i || this._read_singles(s), i = i || this._read_comment(s), i = i || this._read_regexp(s, t), i = i || this._read_xml(s, t), i = i || this._read_punctuation(), i = i || this._create_token(u.UNKNOWN, this._input.next()), i);
    };
    E.prototype._read_word = function(t) {
        var e;
        if (e = this.__patterns.identifier.read(), e !== "") return e = e.replace(k.allLineBreaks, `
`), !(t.type === u.DOT || t.type === u.RESERVED && (t.text === "set" || t.text === "get")) && ri.test(e) ? e === "in" || e === "of" ? this._create_token(u.OPERATOR, e) : this._create_token(u.RESERVED, e) : this._create_token(u.WORD, e);
        if (e = this.__patterns.number.read(), e !== "") return this._create_token(u.WORD, e);
    };
    E.prototype._read_singles = function(t) {
        var e = null;
        return t === "(" || t === "[" ? e = this._create_token(u.START_EXPR, t) : t === ")" || t === "]" ? e = this._create_token(u.END_EXPR, t) : t === "{" ? e = this._create_token(u.START_BLOCK, t) : t === "}" ? e = this._create_token(u.END_BLOCK, t) : t === ";" ? e = this._create_token(u.SEMICOLON, t) : t === "." && si.test(this._input.peek(1)) ? e = this._create_token(u.DOT, t) : t === "," && (e = this._create_token(u.COMMA, t)), e && this._input.next(), e;
    };
    E.prototype._read_punctuation = function() {
        var t = this.__patterns.punct.read();
        if (t !== "") return t === "=" ? this._create_token(u.EQUALS, t) : t === "?." ? this._create_token(u.DOT, t) : this._create_token(u.OPERATOR, t);
    };
    E.prototype._read_non_javascript = function(t) {
        var e = "";
        if (t === "#") {
            if (this._is_first_token() && (e = this.__patterns.shebang.read(), e)) return this._create_token(u.UNKNOWN, e.trim() + `
`);
            if (e = this.__patterns.include.read(), e) return this._create_token(u.UNKNOWN, e.trim() + `
`);
            t = this._input.next();
            var i = "#";
            if (this._input.hasNext() && this._input.testChar(ii)) {
                do t = this._input.next(), i += t;
                while (this._input.hasNext() && t !== "#" && t !== "=")
                return t === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (i += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (i += "{}", this._input.next(), this._input.next())), this._create_token(u.WORD, i);
            }
            this._input.back();
        } else if (t === "<" && this._is_first_token()) {
            if (e = this.__patterns.html_comment_start.read(), e) {
                for(; this._input.hasNext() && !this._input.testChar(k.newline);)e += this._input.next();
                return rt = !0, this._create_token(u.COMMENT, e);
            }
        } else if (rt && t === "-" && (e = this.__patterns.html_comment_end.read(), e)) return rt = !1, this._create_token(u.COMMENT, e);
        return null;
    };
    E.prototype._read_comment = function(t) {
        var e = null;
        if (t === "/") {
            var i = "";
            if (this._input.peek(1) === "*") {
                i = this.__patterns.block_comment.read();
                var s = _e.get_directives(i);
                s && s.ignore === "start" && (i += _e.readIgnored(this._input)), i = i.replace(k.allLineBreaks, `
`), e = this._create_token(u.BLOCK_COMMENT, i), e.directives = s;
            } else this._input.peek(1) === "/" && (i = this.__patterns.comment.read(), e = this._create_token(u.COMMENT, i));
        }
        return e;
    };
    E.prototype._read_string = function(t) {
        if (t === "`" || t === "'" || t === '"') {
            var e = this._input.next();
            return this.has_char_escapes = !1, t === "`" ? e += this._read_string_recursive("`", !0, "${") : e += this._read_string_recursive(t), this.has_char_escapes && this._options.unescape_strings && (e = ui(e)), this._input.peek() === t && (e += this._input.next()), e = e.replace(k.allLineBreaks, `
`), this._create_token(u.STRING, e);
        }
        return null;
    };
    E.prototype._allow_regexp_or_xml = function(t) {
        return t.type === u.RESERVED && Tt(t.text, [
            "return",
            "case",
            "throw",
            "else",
            "do",
            "typeof",
            "yield"
        ]) || t.type === u.END_EXPR && t.text === ")" && t.opened.previous.type === u.RESERVED && Tt(t.opened.previous.text, [
            "if",
            "while",
            "for"
        ]) || Tt(t.type, [
            u.COMMENT,
            u.START_EXPR,
            u.START_BLOCK,
            u.START,
            u.END_BLOCK,
            u.OPERATOR,
            u.EQUALS,
            u.EOF,
            u.SEMICOLON,
            u.COMMA
        ]);
    };
    E.prototype._read_regexp = function(t, e) {
        if (t === "/" && this._allow_regexp_or_xml(e)) {
            for(var i = this._input.next(), s = !1, _ = !1; this._input.hasNext() && (s || _ || this._input.peek() !== t) && !this._input.testChar(k.newline);)i += this._input.peek(), s ? s = !1 : (s = this._input.peek() === "\\", this._input.peek() === "[" ? _ = !0 : this._input.peek() === "]" && (_ = !1)), this._input.next();
            return this._input.peek() === t && (i += this._input.next(), i += this._input.read(k.identifier)), this._create_token(u.STRING, i);
        }
        return null;
    };
    E.prototype._read_xml = function(t, e) {
        if (this._options.e4x && t === "<" && this._allow_regexp_or_xml(e)) {
            var i = "", s = this.__patterns.xml.read_match();
            if (s) {
                for(var _ = s[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), a = _.indexOf("{") === 0, r = 0; s;){
                    var f = !!s[1], l = s[2], m = !!s[s.length - 1] || l.slice(0, 8) === "![CDATA[";
                    if (!m && (l === _ || a && l.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (f ? --r : ++r), i += s[0], r <= 0) break;
                    s = this.__patterns.xml.read_match();
                }
                return s || (i += this._input.match(/[\s\S]*/g)[0]), i = i.replace(k.allLineBreaks, `
`), this._create_token(u.STRING, i);
            }
        }
        return null;
    };
    function ui(t) {
        for(var e = "", i = 0, s = new Ye(t), _ = null; s.hasNext();)if (_ = s.match(/([\s]|[^\\]|\\\\)+/g), _ && (e += _[0]), s.peek() === "\\") {
            if (s.next(), s.peek() === "x") _ = s.match(/x([0-9A-Fa-f]{2})/g);
            else if (s.peek() === "u") _ = s.match(/u([0-9A-Fa-f]{4})/g);
            else {
                e += "\\", s.hasNext() && (e += s.next());
                continue;
            }
            if (!_ || (i = parseInt(_[1], 16), i > 126 && i <= 255 && _[0].indexOf("x") === 0)) return t;
            if (i >= 0 && i < 32) {
                e += "\\" + _[0];
                continue;
            } else i === 34 || i === 39 || i === 92 ? e += "\\" + String.fromCharCode(i) : e += String.fromCharCode(i);
        }
        return e;
    }
    E.prototype._read_string_recursive = function(t, e, i) {
        var s, _;
        t === "'" ? _ = this.__patterns.single_quote : t === '"' ? _ = this.__patterns.double_quote : t === "`" ? _ = this.__patterns.template_text : t === "}" && (_ = this.__patterns.template_expression);
        for(var a = _.read(), r = ""; this._input.hasNext();){
            if (r = this._input.next(), r === t || !e && k.newline.test(r)) {
                this._input.back();
                break;
            } else r === "\\" && this._input.hasNext() ? (s = this._input.peek(), s === "x" || s === "u" ? this.has_char_escapes = !0 : s === "\r" && this._input.peek(1) === `
` && this._input.next(), r += this._input.next()) : i && (i === "${" && r === "$" && this._input.peek() === "{" && (r += this._input.next()), i === r && (t === "`" ? r += this._read_string_recursive("}", e, "`") : r += this._read_string_recursive("`", e, "${"), this._input.hasNext() && (r += this._input.next())));
            r += _.read(), a += r;
        }
        return a;
    };
    F.exports.Tokenizer = E;
    F.exports.TOKEN = u;
    F.exports.positionable_operators = _i.slice();
    F.exports.line_starters = ae.slice();
});
var he1 = g4((ls, oe)=>{
    "use strict";
    var oi = it1().Output, hi = ct1().Token, ut = gt1(), li = mt().Options, pi = $2().Tokenizer, H = $2().line_starters, Q = $2().positionable_operators, n = $2().TOKEN;
    function h(t, e) {
        return e.indexOf(t) !== -1;
    }
    function fi(t) {
        return t.replace(/^\s+/g, "");
    }
    function ci(t) {
        for(var e = {}, i = 0; i < t.length; i++)e[t[i].replace(/-/g, "_")] = t[i];
        return e;
    }
    function R(t, e) {
        return t && t.type === n.RESERVED && t.text === e;
    }
    function d(t, e) {
        return t && t.type === n.RESERVED && h(t.text, e);
    }
    var ot = [
        "case",
        "return",
        "do",
        "if",
        "throw",
        "else",
        "await",
        "break",
        "continue",
        "async"
    ], di = [
        "before-newline",
        "after-newline",
        "preserve-newline"
    ], Z = ci(di), re = [
        Z.before_newline,
        Z.preserve_newline
    ], o = {
        BlockStatement: "BlockStatement",
        Statement: "Statement",
        ObjectLiteral: "ObjectLiteral",
        ArrayLiteral: "ArrayLiteral",
        ForInitializer: "ForInitializer",
        Conditional: "Conditional",
        Expression: "Expression"
    };
    function ue(t, e) {
        e.multiline_frame || e.mode === o.ForInitializer || e.mode === o.Conditional || t.remove_indent(e.start_line_index);
    }
    function gi(t) {
        t = t.replace(ut.allLineBreaks, `
`);
        for(var e = [], i = t.indexOf(`
`); i !== -1;)e.push(t.substring(0, i)), t = t.substring(i + 1), i = t.indexOf(`
`);
        return t.length && e.push(t), e;
    }
    function I(t) {
        return t === o.ArrayLiteral;
    }
    function Y(t) {
        return h(t, [
            o.Expression,
            o.ForInitializer,
            o.Conditional
        ]);
    }
    function mi(t, e) {
        for(var i = 0; i < t.length; i++){
            var s = t[i].trim();
            if (s.charAt(0) !== e) return !1;
        }
        return !0;
    }
    function bi(t, e) {
        for(var i = 0, s = t.length, _; i < s; i++)if (_ = t[i], _ && _.indexOf(e) !== 0) return !1;
        return !0;
    }
    function p(t, e) {
        e = e || {}, this._source_text = t || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new li(e);
    }
    p.prototype.create_flags = function(t, e) {
        var i = 0;
        t && (i = t.indentation_level, !this._output.just_added_newline() && t.line_indent_level > i && (i = t.line_indent_level));
        var s = {
            mode: e,
            parent: t,
            last_token: t ? t.last_token : new hi(n.START_BLOCK, ""),
            last_word: t ? t.last_word : "",
            declaration_statement: !1,
            declaration_assignment: !1,
            multiline_frame: !1,
            inline_frame: !1,
            if_block: !1,
            else_block: !1,
            do_block: !1,
            do_while: !1,
            import_block: !1,
            in_case_statement: !1,
            in_case: !1,
            case_body: !1,
            indentation_level: i,
            alignment: 0,
            line_indent_level: t ? t.line_indent_level : i,
            start_line_index: this._output.get_line_number(),
            ternary_depth: 0
        };
        return s;
    };
    p.prototype._reset = function(t) {
        var e = t.match(/^[\t ]*/)[0];
        this._last_last_text = "", this._output = new oi(this._options, e), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(o.BlockStatement);
        var i = new pi(t, this._options);
        return this._tokens = i.tokenize(), t;
    };
    p.prototype.beautify = function() {
        if (this._options.disabled) return this._source_text;
        var t, e = this._reset(this._source_text), i = this._options.eol;
        this._options.eol === "auto" && (i = `
`, e && ut.lineBreak.test(e || "") && (i = e.match(ut.lineBreak)[0]));
        for(var s = this._tokens.next(); s;)this.handle_token(s), this._last_last_text = this._flags.last_token.text, this._flags.last_token = s, s = this._tokens.next();
        return t = this._output.get_code(i), t;
    };
    p.prototype.handle_token = function(t, e) {
        t.type === n.START_EXPR ? this.handle_start_expr(t) : t.type === n.END_EXPR ? this.handle_end_expr(t) : t.type === n.START_BLOCK ? this.handle_start_block(t) : t.type === n.END_BLOCK ? this.handle_end_block(t) : t.type === n.WORD ? this.handle_word(t) : t.type === n.RESERVED ? this.handle_word(t) : t.type === n.SEMICOLON ? this.handle_semicolon(t) : t.type === n.STRING ? this.handle_string(t) : t.type === n.EQUALS ? this.handle_equals(t) : t.type === n.OPERATOR ? this.handle_operator(t) : t.type === n.COMMA ? this.handle_comma(t) : t.type === n.BLOCK_COMMENT ? this.handle_block_comment(t, e) : t.type === n.COMMENT ? this.handle_comment(t, e) : t.type === n.DOT ? this.handle_dot(t) : t.type === n.EOF ? this.handle_eof(t) : t.type === n.UNKNOWN ? this.handle_unknown(t, e) : this.handle_unknown(t, e);
    };
    p.prototype.handle_whitespace_and_comments = function(t, e) {
        var i = t.newlines, s = this._options.keep_array_indentation && I(this._flags.mode);
        if (t.comments_before) for(var _ = t.comments_before.next(); _;)this.handle_whitespace_and_comments(_, e), this.handle_token(_, e), _ = t.comments_before.next();
        if (s) for(var a = 0; a < i; a += 1)this.print_newline(a > 0, e);
        else if (this._options.max_preserve_newlines && i > this._options.max_preserve_newlines && (i = this._options.max_preserve_newlines), this._options.preserve_newlines && i > 1) {
            this.print_newline(!1, e);
            for(var r = 1; r < i; r += 1)this.print_newline(!0, e);
        }
    };
    var kt = [
        "async",
        "break",
        "continue",
        "return",
        "throw",
        "yield"
    ];
    p.prototype.allow_wrap_or_preserved_newline = function(t, e) {
        if (e = e === void 0 ? !1 : e, !this._output.just_added_newline()) {
            var i = this._options.preserve_newlines && t.newlines || e, s = h(this._flags.last_token.text, Q) || h(t.text, Q);
            if (s) {
                var _ = h(this._flags.last_token.text, Q) && h(this._options.operator_position, re) || h(t.text, Q);
                i = i && _;
            }
            if (i) this.print_newline(!1, !0);
            else if (this._options.wrap_line_length) {
                if (d(this._flags.last_token, kt)) return;
                this._output.set_wrap_point();
            }
        }
    };
    p.prototype.print_newline = function(t, e) {
        if (!e && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== n.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) for(var i = this._tokens.peek(); this._flags.mode === o.Statement && !(this._flags.if_block && R(i, "else")) && !this._flags.do_block;)this.restore_mode();
        this._output.add_new_line(t) && (this._flags.multiline_frame = !0);
    };
    p.prototype.print_token_line_indentation = function(t) {
        this._output.just_added_newline() && (this._options.keep_array_indentation && t.newlines && (t.text === "[" || I(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(t.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
    };
    p.prototype.print_token = function(t) {
        if (this._output.raw) {
            this._output.add_raw_token(t);
            return;
        }
        if (this._options.comma_first && t.previous && t.previous.type === n.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
            var e = this._output.previous_line.pop();
            this._output.previous_line.is_empty() && (this._output.previous_line.push(e), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(t), this._output.add_token(","), this._output.space_before_token = !0;
        }
        this.print_token_line_indentation(t), this._output.non_breaking_space = !0, this._output.add_token(t.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
    };
    p.prototype.indent = function() {
        this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    };
    p.prototype.deindent = function() {
        this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
    };
    p.prototype.set_mode = function(t) {
        this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, t), this._flags = this.create_flags(this._previous_flags, t), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    };
    p.prototype.restore_mode = function() {
        this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === o.Statement && ue(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
    };
    p.prototype.start_of_object_property = function() {
        return this._flags.parent.mode === o.ObjectLiteral && this._flags.mode === o.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || d(this._flags.last_token, [
            "get",
            "set"
        ]));
    };
    p.prototype.start_of_statement = function(t) {
        var e = !1;
        return e = e || d(this._flags.last_token, [
            "var",
            "let",
            "const"
        ]) && t.type === n.WORD, e = e || R(this._flags.last_token, "do"), e = e || !(this._flags.parent.mode === o.ObjectLiteral && this._flags.mode === o.Statement) && d(this._flags.last_token, kt) && !t.newlines, e = e || R(this._flags.last_token, "else") && !(R(t, "if") && !t.comments_before), e = e || this._flags.last_token.type === n.END_EXPR && (this._previous_flags.mode === o.ForInitializer || this._previous_flags.mode === o.Conditional), e = e || this._flags.last_token.type === n.WORD && this._flags.mode === o.BlockStatement && !this._flags.in_case && !(t.text === "--" || t.text === "++") && this._last_last_text !== "function" && t.type !== n.WORD && t.type !== n.RESERVED, e = e || this._flags.mode === o.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || d(this._flags.last_token, [
            "get",
            "set"
        ])), e ? (this.set_mode(o.Statement), this.indent(), this.handle_whitespace_and_comments(t, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t, d(t, [
            "do",
            "for",
            "if",
            "while"
        ])), !0) : !1;
    };
    p.prototype.handle_start_expr = function(t) {
        this.start_of_statement(t) || this.handle_whitespace_and_comments(t);
        var e = o.Expression;
        if (t.text === "[") {
            if (this._flags.last_token.type === n.WORD || this._flags.last_token.text === ")") {
                d(this._flags.last_token, H) && (this._output.space_before_token = !0), this.print_token(t), this.set_mode(e), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
                return;
            }
            e = o.ArrayLiteral, I(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), h(this._flags.last_token.type, [
                n.START_EXPR,
                n.END_EXPR,
                n.WORD,
                n.OPERATOR,
                n.DOT
            ]) || (this._output.space_before_token = !0);
        } else {
            if (this._flags.last_token.type === n.RESERVED) this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, e = o.ForInitializer) : h(this._flags.last_token.text, [
                "if",
                "while",
                "switch"
            ]) ? (this._output.space_before_token = this._options.space_before_conditional, e = o.Conditional) : h(this._flags.last_word, [
                "await",
                "async"
            ]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && t.whitespace_before === "" ? this._output.space_before_token = !1 : (h(this._flags.last_token.text, H) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
            else if (this._flags.last_token.type === n.EQUALS || this._flags.last_token.type === n.OPERATOR) this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t);
            else if (this._flags.last_token.type === n.WORD) {
                this._output.space_before_token = !1;
                var i = this._tokens.peek(-3);
                if (this._options.space_after_named_function && i) {
                    var s = this._tokens.peek(-4);
                    d(i, [
                        "async",
                        "function"
                    ]) || i.text === "*" && d(s, [
                        "async",
                        "function"
                    ]) ? this._output.space_before_token = !0 : this._flags.mode === o.ObjectLiteral && (i.text === "{" || i.text === "," || i.text === "*" && (s.text === "{" || s.text === ",")) && (this._output.space_before_token = !0);
                }
            } else this.allow_wrap_or_preserved_newline(t);
            (this._flags.last_token.type === n.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (h(this._last_last_text, [
                "function",
                "yield"
            ]) || this._flags.mode === o.ObjectLiteral && h(this._last_last_text, [
                "{",
                ","
            ]))) && (this._output.space_before_token = this._options.space_after_anon_function);
        }
        this._flags.last_token.text === ";" || this._flags.last_token.type === n.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === n.END_EXPR || this._flags.last_token.type === n.START_EXPR || this._flags.last_token.type === n.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === n.COMMA) && this.allow_wrap_or_preserved_newline(t, t.newlines), this.print_token(t), this.set_mode(e), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
    };
    p.prototype.handle_end_expr = function(t) {
        for(; this._flags.mode === o.Statement;)this.restore_mode();
        this.handle_whitespace_and_comments(t), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(t, t.text === "]" && I(this._flags.mode) && !this._options.keep_array_indentation), this._options.space_in_paren && (this._flags.last_token.type === n.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(t), this.restore_mode(), ue(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === o.Conditional && (this._previous_flags.mode = o.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
    };
    p.prototype.handle_start_block = function(t) {
        this.handle_whitespace_and_comments(t);
        var e = this._tokens.peek(), i = this._tokens.peek(1);
        this._flags.last_word === "switch" && this._flags.last_token.type === n.END_EXPR ? (this.set_mode(o.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(o.BlockStatement) : i && (h(i.text, [
            ":",
            ","
        ]) && h(e.type, [
            n.STRING,
            n.WORD,
            n.RESERVED
        ]) || h(e.text, [
            "get",
            "set",
            "..."
        ]) && h(i.type, [
            n.WORD,
            n.RESERVED
        ])) ? h(this._last_last_text, [
            "class",
            "interface"
        ]) ? this.set_mode(o.BlockStatement) : this.set_mode(o.ObjectLiteral) : this._flags.last_token.type === n.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(o.BlockStatement) : h(this._flags.last_token.type, [
            n.EQUALS,
            n.START_EXPR,
            n.COMMA,
            n.OPERATOR
        ]) || d(this._flags.last_token, [
            "return",
            "throw",
            "import",
            "default"
        ]) ? this.set_mode(o.ObjectLiteral) : this.set_mode(o.BlockStatement);
        var s = !e.comments_before && e.text === "}", _ = s && this._flags.last_word === "function" && this._flags.last_token.type === n.END_EXPR;
        if (this._options.brace_preserve_inline) {
            var a = 0, r = null;
            this._flags.inline_frame = !0;
            do if (a += 1, r = this._tokens.peek(a - 1), r.newlines) {
                this._flags.inline_frame = !1;
                break;
            }
            while (r.type !== n.EOF && !(r.type === n.END_BLOCK && r.opened === t))
        }
        (this._options.brace_style === "expand" || this._options.brace_style === "none" && t.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== n.OPERATOR && (_ || this._flags.last_token.type === n.EQUALS || d(this._flags.last_token, ot) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (I(this._previous_flags.mode) && (this._flags.last_token.type === n.START_EXPR || this._flags.last_token.type === n.COMMA) && ((this._flags.last_token.type === n.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === n.COMMA || this._flags.last_token.type === n.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(t), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== n.OPERATOR && this._flags.last_token.type !== n.START_EXPR && (this._flags.last_token.type === n.START_BLOCK && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(t), this.indent(), !s && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
    };
    p.prototype.handle_end_block = function(t) {
        for(this.handle_whitespace_and_comments(t); this._flags.mode === o.Statement;)this.restore_mode();
        var e = this._flags.last_token.type === n.START_BLOCK;
        this._flags.inline_frame && !e ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? e || this.print_newline() : e || (I(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(t);
    };
    p.prototype.handle_word = function(t) {
        if (t.type === n.RESERVED) {
            if (h(t.text, [
                "set",
                "get"
            ]) && this._flags.mode !== o.ObjectLiteral) t.type = n.WORD;
            else if (t.text === "import" && this._tokens.peek().text === "(") t.type = n.WORD;
            else if (h(t.text, [
                "as",
                "from"
            ]) && !this._flags.import_block) t.type = n.WORD;
            else if (this._flags.mode === o.ObjectLiteral) {
                var e = this._tokens.peek();
                e.text === ":" && (t.type = n.WORD);
            }
        }
        if (this.start_of_statement(t) ? d(this._flags.last_token, [
            "var",
            "let",
            "const"
        ]) && t.type === n.WORD && (this._flags.declaration_statement = !0) : t.newlines && !Y(this._flags.mode) && (this._flags.last_token.type !== n.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== n.EQUALS && (this._options.preserve_newlines || !d(this._flags.last_token, [
            "var",
            "let",
            "const",
            "set",
            "get"
        ])) ? (this.handle_whitespace_and_comments(t), this.print_newline()) : this.handle_whitespace_and_comments(t), this._flags.do_block && !this._flags.do_while) if (R(t, "while")) {
            this._output.space_before_token = !0, this.print_token(t), this._output.space_before_token = !0, this._flags.do_while = !0;
            return;
        } else this.print_newline(), this._flags.do_block = !1;
        if (this._flags.if_block) if (!this._flags.else_block && R(t, "else")) this._flags.else_block = !0;
        else {
            for(; this._flags.mode === o.Statement;)this.restore_mode();
            this._flags.if_block = !1, this._flags.else_block = !1;
        }
        if (this._flags.in_case_statement && d(t, [
            "case",
            "default"
        ])) {
            this.print_newline(), this._flags.last_token.type !== n.END_BLOCK && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(t), this._flags.in_case = !0;
            return;
        }
        if ((this._flags.last_token.type === n.COMMA || this._flags.last_token.type === n.START_EXPR || this._flags.last_token.type === n.EQUALS || this._flags.last_token.type === n.OPERATOR) && (this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t)), R(t, "function")) {
            (h(this._flags.last_token.text, [
                "}",
                ";"
            ]) || this._output.just_added_newline() && !(h(this._flags.last_token.text, [
                "(",
                "[",
                "{",
                ":",
                "=",
                ","
            ]) || this._flags.last_token.type === n.OPERATOR)) && !this._output.just_added_blankline() && !t.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === n.RESERVED || this._flags.last_token.type === n.WORD ? d(this._flags.last_token, [
                "get",
                "set",
                "new",
                "export"
            ]) || d(this._flags.last_token, kt) ? this._output.space_before_token = !0 : R(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === n.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (Y(this._flags.mode) || I(this._flags.mode)) || this.print_newline(), this.print_token(t), this._flags.last_word = t.text;
            return;
        }
        var i = "NONE";
        if (this._flags.last_token.type === n.END_BLOCK ? this._previous_flags.inline_frame ? i = "SPACE" : d(t, [
            "else",
            "catch",
            "finally",
            "from"
        ]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && t.newlines ? i = "NEWLINE" : (i = "SPACE", this._output.space_before_token = !0) : i = "NEWLINE" : this._flags.last_token.type === n.SEMICOLON && this._flags.mode === o.BlockStatement ? i = "NEWLINE" : this._flags.last_token.type === n.SEMICOLON && Y(this._flags.mode) ? i = "SPACE" : this._flags.last_token.type === n.STRING ? i = "NEWLINE" : this._flags.last_token.type === n.RESERVED || this._flags.last_token.type === n.WORD || this._flags.last_token.text === "*" && (h(this._last_last_text, [
            "function",
            "yield"
        ]) || this._flags.mode === o.ObjectLiteral && h(this._last_last_text, [
            "{",
            ","
        ])) ? i = "SPACE" : this._flags.last_token.type === n.START_BLOCK ? this._flags.inline_frame ? i = "SPACE" : i = "NEWLINE" : this._flags.last_token.type === n.END_EXPR && (this._output.space_before_token = !0, i = "NEWLINE"), d(t, H) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? i = "SPACE" : i = "NEWLINE"), d(t, [
            "else",
            "catch",
            "finally"
        ])) if ((!(this._flags.last_token.type === n.END_BLOCK && this._previous_flags.mode === o.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && t.newlines) && !this._flags.inline_frame) this.print_newline();
        else {
            this._output.trim(!0);
            var s = this._output.current_line;
            s.last() !== "}" && this.print_newline(), this._output.space_before_token = !0;
        }
        else i === "NEWLINE" ? d(this._flags.last_token, ot) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && d(t, [
            "var",
            "let",
            "const"
        ]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== n.END_EXPR ? (this._flags.last_token.type !== n.START_EXPR || !d(t, [
            "var",
            "let",
            "const"
        ])) && this._flags.last_token.text !== ":" && (R(t, "if") && R(t.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : d(t, H) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && I(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : i === "SPACE" && (this._output.space_before_token = !0);
        t.previous && (t.previous.type === n.WORD || t.previous.type === n.RESERVED) && (this._output.space_before_token = !0), this.print_token(t), this._flags.last_word = t.text, t.type === n.RESERVED && (t.text === "do" ? this._flags.do_block = !0 : t.text === "if" ? this._flags.if_block = !0 : t.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && R(t, "from") && (this._flags.import_block = !1));
    };
    p.prototype.handle_semicolon = function(t) {
        this.start_of_statement(t) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(t);
        for(var e = this._tokens.peek(); this._flags.mode === o.Statement && !(this._flags.if_block && R(e, "else")) && !this._flags.do_block;)this.restore_mode();
        this._flags.import_block && (this._flags.import_block = !1), this.print_token(t);
    };
    p.prototype.handle_string = function(t) {
        t.text.startsWith("`") && t.newlines === 0 && t.whitespace_before === "" && (t.previous.text === ")" || this._flags.last_token.type === n.WORD) || (this.start_of_statement(t) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(t), this._flags.last_token.type === n.RESERVED || this._flags.last_token.type === n.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === n.COMMA || this._flags.last_token.type === n.START_EXPR || this._flags.last_token.type === n.EQUALS || this._flags.last_token.type === n.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t) : t.text.startsWith("`") && this._flags.last_token.type === n.END_EXPR && (t.previous.text === "]" || t.previous.text === ")") && t.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(t);
    };
    p.prototype.handle_equals = function(t) {
        this.start_of_statement(t) || this.handle_whitespace_and_comments(t), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(t), this._output.space_before_token = !0;
    };
    p.prototype.handle_comma = function(t) {
        this.handle_whitespace_and_comments(t, !0), this.print_token(t), this._output.space_before_token = !0, this._flags.declaration_statement ? (Y(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(t)) : this._flags.mode === o.ObjectLiteral || this._flags.mode === o.Statement && this._flags.parent.mode === o.ObjectLiteral ? (this._flags.mode === o.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(t);
    };
    p.prototype.handle_operator = function(t) {
        var e = t.text === "*" && (d(this._flags.last_token, [
            "function",
            "yield"
        ]) || h(this._flags.last_token.type, [
            n.START_BLOCK,
            n.COMMA,
            n.END_BLOCK,
            n.SEMICOLON
        ])), i = h(t.text, [
            "-",
            "+"
        ]) && (h(this._flags.last_token.type, [
            n.START_BLOCK,
            n.START_EXPR,
            n.EQUALS,
            n.OPERATOR
        ]) || h(this._flags.last_token.text, H) || this._flags.last_token.text === ",");
        if (!this.start_of_statement(t)) {
            var s = !e;
            this.handle_whitespace_and_comments(t, s);
        }
        if (d(this._flags.last_token, ot)) {
            this._output.space_before_token = !0, this.print_token(t);
            return;
        }
        if (t.text === "*" && this._flags.last_token.type === n.DOT) {
            this.print_token(t);
            return;
        }
        if (t.text === "::") {
            this.print_token(t);
            return;
        }
        if (this._flags.last_token.type === n.OPERATOR && h(this._options.operator_position, re) && this.allow_wrap_or_preserved_newline(t), t.text === ":" && this._flags.in_case) {
            this.print_token(t), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type !== n.START_BLOCK ? (this.indent(), this.print_newline()) : this._output.space_before_token = !0;
            return;
        }
        var _ = !0, a = !0, r = !1;
        if (t.text === ":" ? this._flags.ternary_depth === 0 ? _ = !1 : (this._flags.ternary_depth -= 1, r = !0) : t.text === "?" && (this._flags.ternary_depth += 1), !i && !e && this._options.preserve_newlines && h(t.text, Q)) {
            var f = t.text === ":", l = f && r, m = f && !r;
            switch(this._options.operator_position){
                case Z.before_newline:
                    this._output.space_before_token = !m, this.print_token(t), (!f || l) && this.allow_wrap_or_preserved_newline(t), this._output.space_before_token = !0;
                    return;
                case Z.after_newline:
                    this._output.space_before_token = !0, !f || l ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(t) : this._output.space_before_token = !1, this.print_token(t), this._output.space_before_token = !0;
                    return;
                case Z.preserve_newline:
                    m || this.allow_wrap_or_preserved_newline(t), _ = !(this._output.just_added_newline() || m), this._output.space_before_token = _, this.print_token(t), this._output.space_before_token = !0;
                    return;
            }
        }
        if (e) {
            this.allow_wrap_or_preserved_newline(t), _ = !1;
            var w = this._tokens.peek();
            a = w && h(w.type, [
                n.WORD,
                n.RESERVED
            ]);
        } else t.text === "..." ? (this.allow_wrap_or_preserved_newline(t), _ = this._flags.last_token.type === n.START_BLOCK, a = !1) : (h(t.text, [
            "--",
            "++",
            "!",
            "~"
        ]) || i) && ((this._flags.last_token.type === n.COMMA || this._flags.last_token.type === n.START_EXPR) && this.allow_wrap_or_preserved_newline(t), _ = !1, a = !1, t.newlines && (t.text === "--" || t.text === "++") && this.print_newline(!1, !0), this._flags.last_token.text === ";" && Y(this._flags.mode) && (_ = !0), this._flags.last_token.type === n.RESERVED ? _ = !0 : this._flags.last_token.type === n.END_EXPR ? _ = !(this._flags.last_token.text === "]" && (t.text === "--" || t.text === "++")) : this._flags.last_token.type === n.OPERATOR && (_ = h(t.text, [
            "--",
            "-",
            "++",
            "+"
        ]) && h(this._flags.last_token.text, [
            "--",
            "-",
            "++",
            "+"
        ]), h(t.text, [
            "+",
            "-"
        ]) && h(this._flags.last_token.text, [
            "--",
            "++"
        ]) && (a = !0)), (this._flags.mode === o.BlockStatement && !this._flags.inline_frame || this._flags.mode === o.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline());
        this._output.space_before_token = this._output.space_before_token || _, this.print_token(t), this._output.space_before_token = a;
    };
    p.prototype.handle_block_comment = function(t, e) {
        if (this._output.raw) {
            this._output.add_raw_token(t), t.directives && t.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
            return;
        }
        if (t.directives) {
            this.print_newline(!1, e), this.print_token(t), t.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
            return;
        }
        if (!ut.newline.test(t.text) && !t.newlines) {
            this._output.space_before_token = !0, this.print_token(t), this._output.space_before_token = !0;
            return;
        } else this.print_block_commment(t, e);
    };
    p.prototype.print_block_commment = function(t, e) {
        var i = gi(t.text), s, _ = !1, a = !1, r = t.whitespace_before, f = r.length;
        if (this.print_newline(!1, e), this.print_token_line_indentation(t), this._output.add_token(i[0]), this.print_newline(!1, e), i.length > 1) {
            for(i = i.slice(1), _ = mi(i, "*"), a = bi(i, r), _ && (this._flags.alignment = 1), s = 0; s < i.length; s++)_ ? (this.print_token_line_indentation(t), this._output.add_token(fi(i[s]))) : a && i[s] ? (this.print_token_line_indentation(t), this._output.add_token(i[s].substring(f))) : (this._output.current_line.set_indent(-1), this._output.add_token(i[s])), this.print_newline(!1, e);
            this._flags.alignment = 0;
        }
    };
    p.prototype.handle_comment = function(t, e) {
        t.newlines ? this.print_newline(!1, e) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(t), this.print_newline(!1, e);
    };
    p.prototype.handle_dot = function(t) {
        this.start_of_statement(t) || this.handle_whitespace_and_comments(t, !0), d(this._flags.last_token, ot) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(t, this._flags.last_token.text === ")" && this._options.break_chained_methods), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(t);
    };
    p.prototype.handle_unknown = function(t, e) {
        this.print_token(t), t.text[t.text.length - 1] === `
` && this.print_newline(!1, e);
    };
    p.prototype.handle_eof = function(t) {
        for(; this._flags.mode === o.Statement;)this.restore_mode();
        this.handle_whitespace_and_comments(t);
    };
    oe.exports.Beautifier = p;
});
var le1 = g4((ps, Rt)=>{
    "use strict";
    var yi = he1().Beautifier, vi = mt().Options;
    function wi(t, e) {
        var i = new yi(t, e);
        return i.beautify();
    }
    Rt.exports = wi;
    Rt.exports.defaultOptions = function() {
        return new vi;
    };
});
var At1 = g4((fs, ce)=>{
    "use strict";
    var pe = _t().Options;
    function fe(t) {
        pe.call(this, t, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
        var e = this._get_boolean("space_around_selector_separator");
        this.space_around_combinator = this._get_boolean("space_around_combinator") || e;
        var i = this._get_selection_list("brace_style", [
            "collapse",
            "expand",
            "end-expand",
            "none",
            "preserve-inline"
        ]);
        this.brace_style = "collapse";
        for(var s = 0; s < i.length; s++)i[s] !== "expand" ? this.brace_style = "collapse" : this.brace_style = i[s];
    }
    fe.prototype = new pe;
    ce.exports.Options = fe;
});
var be = g4((cs, me)=>{
    "use strict";
    var xi = At1().Options, Ei = it1().Output, Oi = nt().InputScanner, Ti = at2().Directives, de = new Ti(/\/\*/, /\*\//), ge = /\r\n|[\r\n]/, ki = /\r\n|[\r\n]/g, ht = /\s/, Ri = /(?:\s|\n)+/g, Ai = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, Si = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
    function B(t, e) {
        this._source_text = t || "", this._options = new xi(e), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
            "@page": !0,
            "@font-face": !0,
            "@keyframes": !0,
            "@media": !0,
            "@supports": !0,
            "@document": !0
        }, this.CONDITIONAL_GROUP_RULE = {
            "@media": !0,
            "@supports": !0,
            "@document": !0
        };
    }
    B.prototype.eatString = function(t) {
        var e = "";
        for(this._ch = this._input.next(); this._ch;){
            if (e += this._ch, this._ch === "\\") e += this._input.next();
            else if (t.indexOf(this._ch) !== -1 || this._ch === `
`) break;
            this._ch = this._input.next();
        }
        return e;
    };
    B.prototype.eatWhitespace = function(t) {
        for(var e = ht.test(this._input.peek()), i = 0; ht.test(this._input.peek());)this._ch = this._input.next(), t && this._ch === `
` && (i === 0 || i < this._options.max_preserve_newlines) && (i++, this._output.add_new_line(!0));
        return e;
    };
    B.prototype.foundNestedPseudoClass = function() {
        for(var t = 0, e = 1, i = this._input.peek(e); i;){
            if (i === "{") return !0;
            if (i === "(") t += 1;
            else if (i === ")") {
                if (t === 0) return !1;
                t -= 1;
            } else if (i === ";" || i === "}") return !1;
            e++, i = this._input.peek(e);
        }
        return !1;
    };
    B.prototype.print_string = function(t) {
        this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(t);
    };
    B.prototype.preserveSingleSpace = function(t) {
        t && (this._output.space_before_token = !0);
    };
    B.prototype.indent = function() {
        this._indentLevel++;
    };
    B.prototype.outdent = function() {
        this._indentLevel > 0 && this._indentLevel--;
    };
    B.prototype.beautify = function() {
        if (this._options.disabled) return this._source_text;
        var t = this._source_text, e = this._options.eol;
        e === "auto" && (e = `
`, t && ge.test(t || "") && (e = t.match(ge)[0])), t = t.replace(ki, `
`);
        var i = t.match(/^[\t ]*/)[0];
        this._output = new Ei(this._options, i), this._input = new Oi(t), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
        for(var s = 0, _ = !1, a = !1, r = !1, f = !1, l = !1, m = this._ch, w, L, tt; w = this._input.read(Ri), L = w !== "", tt = m, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), m = this._ch, this._ch;)if (this._ch === "/" && this._input.peek() === "*") {
            this._output.add_new_line(), this._input.back();
            var z = this._input.read(Ai), et = de.get_directives(z);
            et && et.ignore === "start" && (z += de.readIgnored(this._input)), this.print_string(z), this.eatWhitespace(!0), this._output.add_new_line();
        } else if (this._ch === "/" && this._input.peek() === "/") this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(Si)), this.eatWhitespace(!0);
        else if (this._ch === "@") if (this.preserveSingleSpace(L), this._input.peek() === "{") this.print_string(this._ch + this.eatString("}"));
        else {
            this.print_string(this._ch);
            var T = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
            T.match(/[ :]$/) && (T = this.eatString(": ").replace(/\s$/, ""), this.print_string(T), this._output.space_before_token = !0), T = T.replace(/\s$/, ""), T === "extend" ? f = !0 : T === "import" && (l = !0), T in this.NESTED_AT_RULE ? (this._nestedLevel += 1, T in this.CONDITIONAL_GROUP_RULE && (r = !0)) : !_ && s === 0 && T.indexOf(":") !== -1 && (a = !0, this.indent());
        }
        else this._ch === "#" && this._input.peek() === "{" ? (this.preserveSingleSpace(L), this.print_string(this._ch + this.eatString("}"))) : this._ch === "{" ? (a && (a = !1, this.outdent()), r ? (r = !1, _ = this._indentLevel >= this._nestedLevel) : _ = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && _ && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line()) : this._ch === "}" ? (this.outdent(), this._output.add_new_line(), tt === "{" && this._output.trim(!0), l = !1, f = !1, a && (this.outdent(), a = !1), this.print_string(this._ch), _ = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0)) : this._ch === ":" ? (_ || r) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !f && s === 0 ? (this.print_string(":"), a || (a = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":")) : this._ch === '"' || this._ch === "'" ? (this.preserveSingleSpace(L), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0)) : this._ch === ";" ? s === 0 ? (a && (this.outdent(), a = !1), f = !1, l = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0) : this._ch === "(" ? this._input.lookBack("url") ? (this.print_string(this._ch), this.eatWhitespace(), s++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), s && (s--, this.outdent()))) : (this.preserveSingleSpace(L), this.print_string(this._ch), this.eatWhitespace(), s++, this.indent()) : this._ch === ")" ? (s && (s--, this.outdent()), this.print_string(this._ch)) : this._ch === "," ? (this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && !a && s === 0 && !l && !f ? this._output.add_new_line() : this._output.space_before_token = !0) : (this._ch === ">" || this._ch === "+" || this._ch === "~") && !a && s === 0 ? this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && ht.test(this._ch) && (this._ch = "")) : this._ch === "]" ? this.print_string(this._ch) : this._ch === "[" ? (this.preserveSingleSpace(L), this.print_string(this._ch)) : this._ch === "=" ? (this.eatWhitespace(), this.print_string("="), ht.test(this._ch) && (this._ch = "")) : this._ch === "!" && !this._input.lookBack("\\") ? (this.print_string(" "), this.print_string(this._ch)) : (this.preserveSingleSpace(L), this.print_string(this._ch));
        var pt = this._output.get_code(e);
        return pt;
    };
    me.exports.Beautifier = B;
});
var ye = g4((ds, St)=>{
    "use strict";
    var Ni = be().Beautifier, Li = At1().Options;
    function Ci(t, e) {
        var i = new Ni(t, e);
        return i.beautify();
    }
    St.exports = Ci;
    St.exports.defaultOptions = function() {
        return new Li;
    };
});
var Nt1 = g4((gs, xe)=>{
    "use strict";
    var ve = _t().Options;
    function we(t) {
        ve.call(this, t, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = [
            "django",
            "erb",
            "handlebars",
            "php"
        ]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection("wrap_attributes", [
            "auto",
            "force",
            "force-aligned",
            "force-expand-multiline",
            "aligned-multiple",
            "preserve",
            "preserve-aligned"
        ]), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", [
            "head",
            "body",
            "/html"
        ]), this.inline = this._get_array("inline", [
            "a",
            "abbr",
            "area",
            "audio",
            "b",
            "bdi",
            "bdo",
            "br",
            "button",
            "canvas",
            "cite",
            "code",
            "data",
            "datalist",
            "del",
            "dfn",
            "em",
            "embed",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "map",
            "mark",
            "math",
            "meter",
            "noscript",
            "object",
            "output",
            "progress",
            "q",
            "ruby",
            "s",
            "samp",
            "select",
            "small",
            "span",
            "strong",
            "sub",
            "sup",
            "svg",
            "template",
            "textarea",
            "time",
            "u",
            "var",
            "video",
            "wbr",
            "text",
            "acronym",
            "big",
            "strike",
            "tt"
        ]), this.void_elements = this._get_array("void_elements", [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "keygen",
            "link",
            "menuitem",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
            "!doctype",
            "?xml",
            "basefont",
            "isindex"
        ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
            "pre",
            "textarea"
        ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", [
            "normal",
            "keep",
            "separate"
        ]);
    }
    we.prototype = new ve;
    xe.exports.Options = we;
});
var Pt = g4((ms, Ct)=>{
    "use strict";
    var Oe = G3().Tokenizer, Lt = G3().TOKEN, Pi = at2().Directives, Di = Et1().TemplatablePattern, Bi = X2().Pattern, b = {
        TAG_OPEN: "TK_TAG_OPEN",
        TAG_CLOSE: "TK_TAG_CLOSE",
        ATTRIBUTE: "TK_ATTRIBUTE",
        EQUALS: "TK_EQUALS",
        VALUE: "TK_VALUE",
        COMMENT: "TK_COMMENT",
        TEXT: "TK_TEXT",
        UNKNOWN: "TK_UNKNOWN",
        START: Lt.START,
        RAW: Lt.RAW,
        EOF: Lt.EOF
    }, Ee = new Pi(/<\!--/, /-->/), O = function(t, e) {
        Oe.call(this, t, e), this._current_tag_name = "";
        var i = new Di(this._input).read_options(this._options), s = new Bi(this._input);
        if (this.__patterns = {
            word: i.until(/[\n\r\t <]/),
            single_quote: i.until_after(/'/),
            double_quote: i.until_after(/"/),
            attribute: i.until(/[\n\r\t =>]|\/>/),
            element_name: i.until(/[\n\r\t >\/]/),
            handlebars_comment: s.starting_with(/{{!--/).until_after(/--}}/),
            handlebars: s.starting_with(/{{/).until_after(/}}/),
            handlebars_open: s.until(/[\n\r\t }]/),
            handlebars_raw_close: s.until(/}}/),
            comment: s.starting_with(/<!--/).until_after(/-->/),
            cdata: s.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
            conditional_comment: s.starting_with(/<!\[/).until_after(/]>/),
            processing: s.starting_with(/<\?/).until_after(/\?>/)
        }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
            var _ = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
            this.__patterns.unformatted_content_delimiter = s.matching(_).until_after(_);
        }
    };
    O.prototype = new Oe;
    O.prototype._is_comment = function(t) {
        return !1;
    };
    O.prototype._is_opening = function(t) {
        return t.type === b.TAG_OPEN;
    };
    O.prototype._is_closing = function(t, e) {
        return t.type === b.TAG_CLOSE && e && ((t.text === ">" || t.text === "/>") && e.text[0] === "<" || t.text === "}}" && e.text[0] === "{" && e.text[1] === "{");
    };
    O.prototype._reset = function() {
        this._current_tag_name = "";
    };
    O.prototype._get_next_token = function(t, e) {
        var i = null;
        this._readWhitespace();
        var s = this._input.peek();
        return s === null ? this._create_token(b.EOF, "") : (i = i || this._read_open_handlebars(s, e), i = i || this._read_attribute(s, t, e), i = i || this._read_close(s, e), i = i || this._read_raw_content(s, t, e), i = i || this._read_content_word(s), i = i || this._read_comment_or_cdata(s), i = i || this._read_processing(s), i = i || this._read_open(s, e), i = i || this._create_token(b.UNKNOWN, this._input.next()), i);
    };
    O.prototype._read_comment_or_cdata = function(t) {
        var e = null, i = null, s = null;
        if (t === "<") {
            var _ = this._input.peek(1);
            _ === "!" && (i = this.__patterns.comment.read(), i ? (s = Ee.get_directives(i), s && s.ignore === "start" && (i += Ee.readIgnored(this._input))) : i = this.__patterns.cdata.read()), i && (e = this._create_token(b.COMMENT, i), e.directives = s);
        }
        return e;
    };
    O.prototype._read_processing = function(t) {
        var e = null, i = null, s = null;
        if (t === "<") {
            var _ = this._input.peek(1);
            (_ === "!" || _ === "?") && (i = this.__patterns.conditional_comment.read(), i = i || this.__patterns.processing.read()), i && (e = this._create_token(b.COMMENT, i), e.directives = s);
        }
        return e;
    };
    O.prototype._read_open = function(t, e) {
        var i = null, s = null;
        return e || t === "<" && (i = this._input.next(), this._input.peek() === "/" && (i += this._input.next()), i += this.__patterns.element_name.read(), s = this._create_token(b.TAG_OPEN, i)), s;
    };
    O.prototype._read_open_handlebars = function(t, e) {
        var i = null, s = null;
        return e || this._options.indent_handlebars && t === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (i = this.__patterns.handlebars_comment.read(), i = i || this.__patterns.handlebars.read(), s = this._create_token(b.COMMENT, i)) : (i = this.__patterns.handlebars_open.read(), s = this._create_token(b.TAG_OPEN, i))), s;
    };
    O.prototype._read_close = function(t, e) {
        var i = null, s = null;
        return e && (e.text[0] === "<" && (t === ">" || t === "/" && this._input.peek(1) === ">") ? (i = this._input.next(), t === "/" && (i += this._input.next()), s = this._create_token(b.TAG_CLOSE, i)) : e.text[0] === "{" && t === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), s = this._create_token(b.TAG_CLOSE, "}}"))), s;
    };
    O.prototype._read_attribute = function(t, e, i) {
        var s = null, _ = "";
        if (i && i.text[0] === "<") if (t === "=") s = this._create_token(b.EQUALS, this._input.next());
        else if (t === '"' || t === "'") {
            var a = this._input.next();
            t === '"' ? a += this.__patterns.double_quote.read() : a += this.__patterns.single_quote.read(), s = this._create_token(b.VALUE, a);
        } else _ = this.__patterns.attribute.read(), _ && (e.type === b.EQUALS ? s = this._create_token(b.VALUE, _) : s = this._create_token(b.ATTRIBUTE, _));
        return s;
    };
    O.prototype._is_content_unformatted = function(t) {
        return this._options.void_elements.indexOf(t) === -1 && (this._options.content_unformatted.indexOf(t) !== -1 || this._options.unformatted.indexOf(t) !== -1);
    };
    O.prototype._read_raw_content = function(t, e, i) {
        var s = "";
        if (i && i.text[0] === "{") s = this.__patterns.handlebars_raw_close.read();
        else if (e.type === b.TAG_CLOSE && e.opened.text[0] === "<" && e.text[0] !== "/") {
            var _ = e.opened.text.substr(1).toLowerCase();
            if (_ === "script" || _ === "style") {
                var a = this._read_comment_or_cdata(t);
                if (a) return a.type = b.TEXT, a;
                s = this._input.readUntil(new RegExp("</" + _ + "[\\n\\r\\t ]*?>", "ig"));
            } else this._is_content_unformatted(_) && (s = this._input.readUntil(new RegExp("</" + _ + "[\\n\\r\\t ]*?>", "ig")));
        }
        return s ? this._create_token(b.TEXT, s) : null;
    };
    O.prototype._read_content_word = function(t) {
        var e = "";
        if (this._options.unformatted_content_delimiter && t === this._options.unformatted_content_delimiter[0] && (e = this.__patterns.unformatted_content_delimiter.read()), e || (e = this.__patterns.word.read()), e) return this._create_token(b.TEXT, e);
    };
    Ct.exports.Tokenizer = O;
    Ct.exports.TOKEN = b;
});
var Ae1 = g4((bs, Re)=>{
    "use strict";
    var ji = Nt1().Options, Ki = it1().Output, Ii = Pt().Tokenizer, c = Pt().TOKEN, Te = /\r\n|[\r\n]/, Mi = /\r\n|[\r\n]/g, S = function(t, e) {
        this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = t.max_preserve_newlines, this.preserve_newlines = t.preserve_newlines, this._output = new Ki(t, e);
    };
    S.prototype.current_line_has_match = function(t) {
        return this._output.current_line.has_match(t);
    };
    S.prototype.set_space_before_token = function(t, e) {
        this._output.space_before_token = t, this._output.non_breaking_space = e;
    };
    S.prototype.set_wrap_point = function() {
        this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
    };
    S.prototype.add_raw_token = function(t) {
        this._output.add_raw_token(t);
    };
    S.prototype.print_preserved_newlines = function(t) {
        var e = 0;
        t.type !== c.TEXT && t.previous.type !== c.TEXT && (e = t.newlines ? 1 : 0), this.preserve_newlines && (e = t.newlines < this.max_preserve_newlines + 1 ? t.newlines : this.max_preserve_newlines + 1);
        for(var i = 0; i < e; i++)this.print_newline(i > 0);
        return e !== 0;
    };
    S.prototype.traverse_whitespace = function(t) {
        return t.whitespace_before || t.newlines ? (this.print_preserved_newlines(t) || (this._output.space_before_token = !0), !0) : !1;
    };
    S.prototype.previous_token_wrapped = function() {
        return this._output.previous_token_wrapped;
    };
    S.prototype.print_newline = function(t) {
        this._output.add_new_line(t);
    };
    S.prototype.print_token = function(t) {
        t.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(t.text));
    };
    S.prototype.indent = function() {
        this.indent_level++;
    };
    S.prototype.get_full_indent = function(t) {
        return t = this.indent_level + (t || 0), t < 1 ? "" : this._output.get_indent_string(t);
    };
    var Wi = function(t) {
        for(var e = null, i = t.next; i.type !== c.EOF && t.closed !== i;){
            if (i.type === c.ATTRIBUTE && i.text === "type") {
                i.next && i.next.type === c.EQUALS && i.next.next && i.next.next.type === c.VALUE && (e = i.next.next.text);
                break;
            }
            i = i.next;
        }
        return e;
    }, Ui = function(t, e) {
        var i = null, s = null;
        return e.closed ? (t === "script" ? i = "text/javascript" : t === "style" && (i = "text/css"), i = Wi(e) || i, i.search("text/css") > -1 ? s = "css" : i.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? s = "javascript" : i.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? s = "html" : i.search(/test\/null/) > -1 && (s = "null"), s) : null;
    };
    function J(t, e) {
        return e.indexOf(t) !== -1;
    }
    function zi(t, e, i) {
        this.parent = t || null, this.tag = e ? e.tag_name : "", this.indent_level = i || 0, this.parser_token = e || null;
    }
    function U(t) {
        this._printer = t, this._current_frame = null;
    }
    U.prototype.get_parser_token = function() {
        return this._current_frame ? this._current_frame.parser_token : null;
    };
    U.prototype.record_tag = function(t) {
        var e = new zi(this._current_frame, t, this._printer.indent_level);
        this._current_frame = e;
    };
    U.prototype._try_pop_frame = function(t) {
        var e = null;
        return t && (e = t.parser_token, this._printer.indent_level = t.indent_level, this._current_frame = t.parent), e;
    };
    U.prototype._get_frame = function(t, e) {
        for(var i = this._current_frame; i && t.indexOf(i.tag) === -1;){
            if (e && e.indexOf(i.tag) !== -1) {
                i = null;
                break;
            }
            i = i.parent;
        }
        return i;
    };
    U.prototype.try_pop = function(t, e) {
        var i = this._get_frame([
            t
        ], e);
        return this._try_pop_frame(i);
    };
    U.prototype.indent_to_tag = function(t) {
        var e = this._get_frame(t);
        e && (this._printer.indent_level = e.indent_level);
    };
    function A(t, e, i, s) {
        this._source_text = t || "", e = e || {}, this._js_beautify = i, this._css_beautify = s, this._tag_stack = null;
        var _ = new ji(e, "html");
        this._options = _, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, "force".length) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, "preserve".length) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
    }
    A.prototype.beautify = function() {
        if (this._options.disabled) return this._source_text;
        var t = this._source_text, e = this._options.eol;
        this._options.eol === "auto" && (e = `
`, t && Te.test(t) && (e = t.match(Te)[0])), t = t.replace(Mi, `
`);
        var i = t.match(/^[\t ]*/)[0], s = {
            text: "",
            type: ""
        }, _ = new ke, a = new S(this._options, i), r = new Ii(t, this._options).tokenize();
        this._tag_stack = new U(a);
        for(var f = null, l = r.next(); l.type !== c.EOF;)l.type === c.TAG_OPEN || l.type === c.COMMENT ? (f = this._handle_tag_open(a, l, _, s), _ = f) : l.type === c.ATTRIBUTE || l.type === c.EQUALS || l.type === c.VALUE || l.type === c.TEXT && !_.tag_complete ? f = this._handle_inside_tag(a, l, _, r) : l.type === c.TAG_CLOSE ? f = this._handle_tag_close(a, l, _) : l.type === c.TEXT ? f = this._handle_text(a, l, _) : a.add_raw_token(l), s = f, l = r.next();
        var m = a._output.get_code(e);
        return m;
    };
    A.prototype._handle_tag_close = function(t, e, i) {
        var s = {
            text: e.text,
            type: e.type
        };
        return t.alignment_size = 0, i.tag_complete = !0, t.set_space_before_token(e.newlines || e.whitespace_before !== "", !0), i.is_unformatted ? t.add_raw_token(e) : (i.tag_start_char === "<" && (t.set_space_before_token(e.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && i.has_wrapped_attrs && t.print_newline(!1)), t.print_token(e)), i.indent_content && !(i.is_unformatted || i.is_content_unformatted) && (t.indent(), i.indent_content = !1), !i.is_inline_element && !(i.is_unformatted || i.is_content_unformatted) && t.set_wrap_point(), s;
    };
    A.prototype._handle_inside_tag = function(t, e, i, s) {
        var _ = i.has_wrapped_attrs, a = {
            text: e.text,
            type: e.type
        };
        if (t.set_space_before_token(e.newlines || e.whitespace_before !== "", !0), i.is_unformatted) t.add_raw_token(e);
        else if (i.tag_start_char === "{" && e.type === c.TEXT) t.print_preserved_newlines(e) ? (e.newlines = 0, t.add_raw_token(e)) : t.print_token(e);
        else {
            if (e.type === c.ATTRIBUTE ? (t.set_space_before_token(!0), i.attr_count += 1) : (e.type === c.EQUALS || e.type === c.VALUE && e.previous.type === c.EQUALS) && t.set_space_before_token(!1), e.type === c.ATTRIBUTE && i.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (t.traverse_whitespace(e), _ = _ || e.newlines !== 0), this._is_wrap_attributes_force)) {
                var r = i.attr_count > 1;
                if (this._is_wrap_attributes_force_expand_multiline && i.attr_count === 1) {
                    var f = !0, l = 0, m;
                    do {
                        if (m = s.peek(l), m.type === c.ATTRIBUTE) {
                            f = !1;
                            break;
                        }
                        l += 1;
                    }while (l < 4 && m.type !== c.EOF && m.type !== c.TAG_CLOSE)
                    r = !f;
                }
                r && (t.print_newline(!1), _ = !0);
            }
            t.print_token(e), _ = _ || t.previous_token_wrapped(), i.has_wrapped_attrs = _;
        }
        return a;
    };
    A.prototype._handle_text = function(t, e, i) {
        var s = {
            text: e.text,
            type: "TK_CONTENT"
        };
        return i.custom_beautifier_name ? this._print_custom_beatifier_text(t, e, i) : i.is_unformatted || i.is_content_unformatted ? t.add_raw_token(e) : (t.traverse_whitespace(e), t.print_token(e)), s;
    };
    A.prototype._print_custom_beatifier_text = function(t, e, i) {
        var s = this;
        if (e.text !== "") {
            var _ = e.text, a, r = 1, f = "", l = "";
            i.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? a = this._js_beautify : i.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? a = this._css_beautify : i.custom_beautifier_name === "html" && (a = function(et, T) {
                var pt = new A(et, T, s._js_beautify, s._css_beautify);
                return pt.beautify();
            }), this._options.indent_scripts === "keep" ? r = 0 : this._options.indent_scripts === "separate" && (r = -t.indent_level);
            var m = t.get_full_indent(r);
            if (_ = _.replace(/\n[ \t]*$/, ""), i.custom_beautifier_name !== "html" && _[0] === "<" && _.match(/^(<!--|<!\[CDATA\[)/)) {
                var w = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(_);
                if (!w) {
                    t.add_raw_token(e);
                    return;
                }
                f = m + w[1] + `
`, _ = w[4], w[5] && (l = m + w[5]), _ = _.replace(/\n[ \t]*$/, ""), (w[2] || w[3].indexOf(`
`) !== -1) && (w = w[3].match(/[ \t]+$/), w && (e.whitespace_before = w[0]));
            }
            if (_) if (a) {
                var L = function() {
                    this.eol = `
`;
                };
                L.prototype = this._options.raw_options;
                var tt = new L;
                _ = a(m + _, tt);
            } else {
                var z = e.whitespace_before;
                z && (_ = _.replace(new RegExp(`
(` + z + ")?", "g"), `
`)), _ = m + _.replace(/\n/g, `
` + m);
            }
            f && (_ ? _ = f + _ + `
` + l : _ = f + l), t.print_newline(!1), _ && (e.text = _, e.whitespace_before = "", e.newlines = 0, t.add_raw_token(e), t.print_newline(!0));
        }
    };
    A.prototype._handle_tag_open = function(t, e, i, s) {
        var _ = this._get_tag_open_token(e);
        return (i.is_unformatted || i.is_content_unformatted) && !i.is_empty_element && e.type === c.TAG_OPEN && e.text.indexOf("</") === 0 ? (t.add_raw_token(e), _.start_tag_token = this._tag_stack.try_pop(_.tag_name)) : (t.traverse_whitespace(e), this._set_tag_position(t, e, _, i, s), _.is_inline_element || t.set_wrap_point(), t.print_token(e)), (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (_.alignment_size = e.text.length + 1), !_.tag_complete && !_.is_unformatted && (t.alignment_size = _.alignment_size), _;
    };
    var ke = function(t, e) {
        if (this.parent = t || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !e) this.tag_complete = !0;
        else {
            var i;
            this.tag_start_char = e.text[0], this.text = e.text, this.tag_start_char === "<" ? (i = e.text.match(/^<([^\s>]*)/), this.tag_check = i ? i[1] : "") : (i = e.text.match(/^{{(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = i ? i[1] : "", e.text === "{{#>" && this.tag_check === ">" && e.next !== null && (this.tag_check = e.next.text)), this.tag_check = this.tag_check.toLowerCase(), e.type === c.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || e.closed && e.closed.text === "/>", this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(2)));
        }
    };
    A.prototype._get_tag_open_token = function(t) {
        var e = new ke(this._tag_stack.get_parser_token(), t);
        return e.alignment_size = this._options.wrap_attributes_indent_size, e.is_end_tag = e.is_end_tag || J(e.tag_check, this._options.void_elements), e.is_empty_element = e.tag_complete || e.is_start_tag && e.is_end_tag, e.is_unformatted = !e.tag_complete && J(e.tag_check, this._options.unformatted), e.is_content_unformatted = !e.is_empty_element && J(e.tag_check, this._options.content_unformatted), e.is_inline_element = J(e.tag_name, this._options.inline) || e.tag_start_char === "{", e;
    };
    A.prototype._set_tag_position = function(t, e, i, s, _) {
        if (i.is_empty_element || (i.is_end_tag ? i.start_tag_token = this._tag_stack.try_pop(i.tag_name) : (this._do_optional_end_element(i) && (i.is_inline_element || t.print_newline(!1)), this._tag_stack.record_tag(i), (i.tag_name === "script" || i.tag_name === "style") && !(i.is_unformatted || i.is_content_unformatted) && (i.custom_beautifier_name = Ui(i.tag_check, e)))), J(i.tag_check, this._options.extra_liners) && (t.print_newline(!1), t._output.just_added_blankline() || t.print_newline(!0)), i.is_empty_element) {
            if (i.tag_start_char === "{" && i.tag_check === "else") {
                this._tag_stack.indent_to_tag([
                    "if",
                    "unless",
                    "each"
                ]), i.indent_content = !0;
                var a = t.current_line_has_match(/{{#if/);
                a || t.print_newline(!1);
            }
            i.tag_name === "!--" && _.type === c.TAG_CLOSE && s.is_end_tag && i.text.indexOf(`
`) === -1 || (i.is_inline_element || i.is_unformatted || t.print_newline(!1), this._calcluate_parent_multiline(t, i));
        } else if (i.is_end_tag) {
            var r = !1;
            r = i.start_tag_token && i.start_tag_token.multiline_content, r = r || !i.is_inline_element && !(s.is_inline_element || s.is_unformatted) && !(_.type === c.TAG_CLOSE && i.start_tag_token === s) && _.type !== "TK_CONTENT", (i.is_content_unformatted || i.is_unformatted) && (r = !1), r && t.print_newline(!1);
        } else i.indent_content = !i.custom_beautifier_name, i.tag_start_char === "<" && (i.tag_name === "html" ? i.indent_content = this._options.indent_inner_html : i.tag_name === "head" ? i.indent_content = this._options.indent_head_inner_html : i.tag_name === "body" && (i.indent_content = this._options.indent_body_inner_html)), !(i.is_inline_element || i.is_unformatted) && (_.type !== "TK_CONTENT" || i.is_content_unformatted) && t.print_newline(!1), this._calcluate_parent_multiline(t, i);
    };
    A.prototype._calcluate_parent_multiline = function(t, e) {
        e.parent && t._output.just_added_newline() && !((e.is_inline_element || e.is_unformatted) && e.parent.is_inline_element) && (e.parent.multiline_content = !0);
    };
    var qi = [
        "address",
        "article",
        "aside",
        "blockquote",
        "details",
        "div",
        "dl",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hr",
        "main",
        "nav",
        "ol",
        "p",
        "pre",
        "section",
        "table",
        "ul"
    ], Xi = [
        "a",
        "audio",
        "del",
        "ins",
        "map",
        "noscript",
        "video"
    ];
    A.prototype._do_optional_end_element = function(t) {
        var e = null;
        if (!(t.is_empty_element || !t.is_start_tag || !t.parent)) {
            if (t.tag_name === "body") e = e || this._tag_stack.try_pop("head");
            else if (t.tag_name === "li") e = e || this._tag_stack.try_pop("li", [
                "ol",
                "ul"
            ]);
            else if (t.tag_name === "dd" || t.tag_name === "dt") e = e || this._tag_stack.try_pop("dt", [
                "dl"
            ]), e = e || this._tag_stack.try_pop("dd", [
                "dl"
            ]);
            else if (t.parent.tag_name === "p" && qi.indexOf(t.tag_name) !== -1) {
                var i = t.parent.parent;
                (!i || Xi.indexOf(i.tag_name) === -1) && (e = e || this._tag_stack.try_pop("p"));
            } else t.tag_name === "rp" || t.tag_name === "rt" ? (e = e || this._tag_stack.try_pop("rt", [
                "ruby",
                "rtc"
            ]), e = e || this._tag_stack.try_pop("rp", [
                "ruby",
                "rtc"
            ])) : t.tag_name === "optgroup" ? e = e || this._tag_stack.try_pop("optgroup", [
                "select"
            ]) : t.tag_name === "option" ? e = e || this._tag_stack.try_pop("option", [
                "select",
                "datalist",
                "optgroup"
            ]) : t.tag_name === "colgroup" ? e = e || this._tag_stack.try_pop("caption", [
                "table"
            ]) : t.tag_name === "thead" ? (e = e || this._tag_stack.try_pop("caption", [
                "table"
            ]), e = e || this._tag_stack.try_pop("colgroup", [
                "table"
            ])) : t.tag_name === "tbody" || t.tag_name === "tfoot" ? (e = e || this._tag_stack.try_pop("caption", [
                "table"
            ]), e = e || this._tag_stack.try_pop("colgroup", [
                "table"
            ]), e = e || this._tag_stack.try_pop("thead", [
                "table"
            ]), e = e || this._tag_stack.try_pop("tbody", [
                "table"
            ])) : t.tag_name === "tr" ? (e = e || this._tag_stack.try_pop("caption", [
                "table"
            ]), e = e || this._tag_stack.try_pop("colgroup", [
                "table"
            ]), e = e || this._tag_stack.try_pop("tr", [
                "table",
                "thead",
                "tbody",
                "tfoot"
            ])) : (t.tag_name === "th" || t.tag_name === "td") && (e = e || this._tag_stack.try_pop("td", [
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr"
            ]), e = e || this._tag_stack.try_pop("th", [
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr"
            ]));
            return t.parent = this._tag_stack.get_parser_token(), e;
        }
    };
    Re.exports.Beautifier = A;
});
var Se1 = g4((ys, Dt)=>{
    "use strict";
    var Vi = Ae1().Beautifier, Gi = Nt1().Options;
    function Fi(t, e, i, s) {
        var _ = new Vi(t, e, i, s);
        return _.beautify();
    }
    Dt.exports = Fi;
    Dt.exports.defaultOptions = function() {
        return new Gi;
    };
});
var De1 = g4((vs, lt)=>{
    "use strict";
    var Ne = le1(), Le = ye(), Ce = Se1();
    function Pe(t, e, i, s) {
        return i = i || Ne, s = s || Le, Ce(t, e, i, s);
    }
    Pe.defaultOptions = Ce.defaultOptions;
    lt.exports.js = Ne;
    lt.exports.css = Le;
    lt.exports.html = Pe;
});
var Bt = g4((ws, je)=>{
    "use strict";
    function Be(t, e, i) {
        var s = function(_, a) {
            return t.js_beautify(_, a);
        };
        return s.js = t.js_beautify, s.css = e.css_beautify, s.html = i.html_beautify, s.js_beautify = t.js_beautify, s.css_beautify = e.css_beautify, s.html_beautify = i.html_beautify, s;
    }
    typeof define == "function" && define.amd ? define([
        "./lib/beautify",
        "./lib/beautify-css",
        "./lib/beautify-html"
    ], function(t, e, i) {
        return Be(t, e, i);
    }) : function(t) {
        var e = De1();
        e.js_beautify = e.js, e.css_beautify = e.css, e.html_beautify = e.html, t.exports = Be(e, e, e);
    }(je);
});
var Ke1 = jt1(Bt()), $i = jt1(Bt()), { default: Qi , ...Zi } = $i, xs = Ke1.default ?? Qi ?? Zi;
function query_html(query, html_data, whitespace = true) {
    if (_is_dot(query)) return xs.html(html_data);
    let html = cr(html_data);
    for (const expression of _commands(query)){
        _run(expression, html);
        html = cr(html?.toString());
    }
    return _html(html, whitespace);
}
function _html(html, whitespace) {
    return whitespace ? xs.html(html.removeWhitespace().toString()) : html.removeWhitespace().toString();
}
function _run(expression, html) {
    const [program, ...params] = expression.split(" ");
    for (const param of params){
        if (program == "we") {
            const [selector, tagToInsert] = param.split(",");
            html.querySelectorAll(selector).forEach(function(node) {
                const child = node.clone();
                const wrapper = new fr(tagToInsert, {}, "", null, [
                    0,
                    0
                ]);
                wrapper.appendChild(child);
                node.replaceWith(wrapper);
            });
            html.set_content(html?.toString());
        } else if (program == "iab") {
            const [selector1, tagToInsert1, nodeValueOrExpression] = param.split(",");
            const [_placeholder, attribute] = nodeValueOrExpression?.split(".") ?? [];
            html.querySelectorAll(selector1).forEach(function(node) {
                const elementToInsert = new fr(tagToInsert1, {}, "", null, [
                    0,
                    0
                ]);
                const value = attribute ? node.getAttribute(attribute) : nodeValueOrExpression;
                elementToInsert.appendChild(new ar(value, elementToInsert));
                node.insertAdjacentHTML("afterbegin", elementToInsert.outerHTML);
            });
            html.set_content(html?.toString());
        } else if (program == "wp") {
            _wrap_program(param, html);
        } else if (program == "img") {
            _img_program(param, html);
        } else if (program == "rm") {
            _rm_program(html, param);
        } else {
            _tag_program(html, param, program);
        }
    }
}
function _tag_program(html, param, program) {
    html.querySelectorAll(param).forEach(function(node) {
        node.tagName = program;
    });
    html.set_content(html?.toString());
}
function _rm_program(html, param) {
    html.querySelectorAll(param).forEach(function(node) {
        node.remove();
    });
    html.set_content(html?.toString());
}
function _img_program(param, html) {
    let [query, height = "", width = ""] = param.split(",");
    height = height !== "" ? height : "auto";
    width = width !== "" ? width : "auto";
    html.querySelectorAll(query).forEach(function(node) {
        const src = node.textContent;
        const id = node.id;
        node.replaceWith(_img_element(id, height, width, src));
    });
}
function _img_element(id, height, width, src) {
    return new fr("img", {
        id
    }, `height="${height}" width="${width}" src="${src}" alt="image"`, null, [
        0,
        0
    ]);
}
function _wrap_program(param, html) {
    const [tagName, ...attributes] = param.split(",");
    const [attrName, attrValue] = attributes;
    const rawAttributes = attributes.length > 0 ? `${attrName}="${attrValue}"` : "";
    const wrapper = new fr(tagName, {}, rawAttributes, null, [
        0,
        0
    ]);
    wrapper.appendChild(html);
    html.set_content(wrapper.toString());
}
function _is_dot(query) {
    return query.match(/^.$/g)?.length;
}
function _commands(query) {
    const [_cat, ...commands] = query.split("|").map((match)=>match.trim());
    return commands;
}
export { query_html as query_html };

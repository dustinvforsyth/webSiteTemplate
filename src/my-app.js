var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../bower_components/polymer2-ts/polymer.d.ts" />
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sections = [
            'feature',
            'latest',
            'fashion',
            'furniture',
            'beauty',
            'food',
            'travel'
        ];
        return _this;
    }
    MyApp.prototype.attached = function () {
        this.$.async(function () {
            if (!this.route.path) {
                this.set('route.path', 'feature');
            }
        });
    };
    // observers: [
    //     '_hashDidChange(route.path, items, featuredItems)'
    // ]
    // @computed('sections, sectionData.section')
    MyApp.prototype._computeSelectedTab = function (sections, section) {
        return sections.indexOf(section);
    };
    MyApp.prototype._getItemsCopy = function (items) {
        return items ? items.slice() : [];
    };
    MyApp.prototype._getFeaturedItem = function (featuredItems, section) {
        if (featuredItems && section) {
            return featuredItems.filter(function (item) {
                return item.category.toLowerCase() === section;
            }).pop();
        }
        return '';
    };
    MyApp.prototype._getDetailItem = function (items, id) {
        if (items) {
            return items[id];
        }
    };
    // @computed('onDetailPage')
    MyApp.prototype._computePage = function (onDetailPage) {
        return onDetailPage ? 'detail' : 'list';
    };
    MyApp.prototype._hashDidChange = function () {
        Polymer.AppLayout.scroll({ top: 0, behavior: 'silent' });
        this.$.headerLayout.resetLayout();
        this.$.drawer.close();
    };
    MyApp.prototype._equal = function (a, b) {
        return a === b;
    };
    MyApp.prototype._getSectionClass = function (index, selectedTab) {
        return index === selectedTab ? 'active' : '';
    };
    MyApp.prototype._shouldShowTabs = function (onDetailPage, smallScreen) {
        return !onDetailPage && !smallScreen;
    };
    __decorate([
        property()
    ], MyApp.prototype, "sections", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "selectedTab", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "items", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "featuredItems", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "page", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "route", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "subRoute", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "sectionData", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "idData", void 0);
    __decorate([
        property()
    ], MyApp.prototype, "onDetailPage", void 0);
    __decorate([
        observe('route.path, items, featuredItems')
    ], MyApp.prototype, "_hashDidChange", null);
    return MyApp;
}(Polymer.Element));
//# sourceMappingURL=my-app.js.map
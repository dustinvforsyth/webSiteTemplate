var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MyApp = class MyApp extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.sections = [
            'feature',
            'latest',
            'fashion',
            'furniture',
            'beauty',
            'food',
            'travel'
        ];
        this.section = 'feature';
    }
    connectedCallback() {
        super.connectedCallback();
        let self = this;
        if (!self.route.path) {
            self.set('route.path', 'feature');
            this.section = 'feature';
        }
    }
    _computeSelectedTab(sections, section) {
        return sections.indexOf(section);
    }
    _getItemsCopy(items) {
        return items ? items.slice() : [];
    }
    _getFeaturedItem(featuredItems, section) {
        if (featuredItems && section) {
            return featuredItems.filter(function (item) {
                return item.category.toLowerCase() === section;
            }).pop();
        }
        return '';
    }
    _getDetailItem(items, id) {
        if (items) {
            return items[id];
        }
    }
    _computePage(onDetailPage) {
        return onDetailPage ? 'detail' : 'list';
    }
    _hashDidChange() {
        Polymer.AppLayout.scroll({ top: 0, behavior: 'silent' });
        this.$.headerLayout.resetLayout();
        this.$.drawer.close();
    }
    _equal(a, b) {
        return a === b;
    }
    _getSectionClass(index, selectedTab) {
        return index === selectedTab ? 'active' : '';
    }
    _shouldShowTabs(onDetailPage, smallScreen) {
        return !onDetailPage && !smallScreen;
    }
};
__decorate([
    property({ notify: true }),
    __metadata("design:type", Array)
], MyApp.prototype, "sections", void 0);
__decorate([
    property(),
    __metadata("design:type", Number)
], MyApp.prototype, "selectedTab", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], MyApp.prototype, "section", void 0);
__decorate([
    property(),
    __metadata("design:type", Array)
], MyApp.prototype, "items", void 0);
__decorate([
    property(),
    __metadata("design:type", Array)
], MyApp.prototype, "featuredItems", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], MyApp.prototype, "page", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], MyApp.prototype, "route", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], MyApp.prototype, "subRoute", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], MyApp.prototype, "sectionData", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], MyApp.prototype, "idData", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], MyApp.prototype, "onDetailPage", void 0);
__decorate([
    computed('selectedTab'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MyApp.prototype, "_computeSelectedTab", null);
__decorate([
    computed('page'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyApp.prototype, "_computePage", null);
__decorate([
    observe('route.path, items, featuredItems'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyApp.prototype, "_hashDidChange", null);
MyApp = __decorate([
    customElement('my-app')
], MyApp);
//# sourceMappingURL=my-app.js.map
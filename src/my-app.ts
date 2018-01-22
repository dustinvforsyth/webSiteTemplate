@customElement('my-app')
class MyApp extends Polymer.Element {

    @property({ notify: true })
    sections: string[] = [
        'feature',
        'latest',
        'fashion',
        'furniture',
        'beauty',
        'food',
        'travel'
    ];

    @property()
    selectedTab: number;

    @property()
    section: string = 'feature';

    @property()
    items: any[];

    @property()
    featuredItems: any[];

    @property()
    page: string;

    @property()
    route: any;

    @property()
    subRoute: object;

    @property()
    sectionData: object;

    @property()
    idData: object;

    @property()
    onDetailPage: boolean;

    connectedCallback() {
        super.connectedCallback();
        let self = this;
        if (!self.route.path) {
            self.set('route.path', 'feature');
            this.section = 'feature';
        }
    }

    // @computed('selectedTab')
    // _computeSelectedTab(sections: any, section: any) {
    //     // return sections.indexOf(section);
    // }

    _getItemsCopy(items: any) {
        return items ? items.slice() : [];
    }

    _getFeaturedItem(featuredItems: any, section: any) {
        if (featuredItems && section) {
            return featuredItems.filter(function (item: any) {
                return item.category.toLowerCase() === section;
            }).pop();
        }
        return '';
    }

    _getDetailItem(items: any, id: any) {
        if (items) {
            return items[id];
        }
    }

    @observe('onDetailPage')
    _setPage(onDetailPage: any) {
        this.page = onDetailPage ? 'detail' : 'list';
    }

    // @computed('page')
    // _computePage(onDetailPage: any) {
    //     return onDetailPage ? 'detail' : 'list';
    // }

    @observe('route.path, items, featuredItems')
    _hashDidChange() {
        Polymer.AppLayout.scroll({ top: 0, behavior: 'silent' });
        this.$.headerLayout.resetLayout();
        this.$.drawer.close();
    }

    _equal(a: any, b: any) {
        return a === b;
    }

    _getSectionClass(index: any, selectedTab: any) {
        return index === selectedTab ? 'active' : '';
    }

    _shouldShowTabs(onDetailPage: any, smallScreen: any) {
        return !onDetailPage && !smallScreen;
    }
}

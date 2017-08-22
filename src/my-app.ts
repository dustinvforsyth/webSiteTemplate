/// <reference path="../bower_components/polymer2-ts/polymer.d.ts" />
class MyApp extends Polymer.Element {
    requestInstance: (key: string) => any;

    @property()
    sections: any[] = [
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
    items: any[];

    @property()
    featuredItems: any[];

    @property()
    page: string;

    @property()
    route: Object;

    @property()
    subRoute: object;

    @property()
    sectionData: object;

    @property()
    idData: object;

    @property()
    onDetailPage: boolean;

    attached() {
        this.$.async(function () {
            if (!this.route.path) {
                this.set('route.path', 'feature');
            }
        });
    }

    // observers: [
    //     '_hashDidChange(route.path, items, featuredItems)'
    // ]

    // @computed('sections, sectionData.section')
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

    // @computed('onDetailPage')
    _computePage(onDetailPage) {
        return onDetailPage ? 'detail' : 'list';
    }

    @observe('route.path, items, featuredItems')
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
}

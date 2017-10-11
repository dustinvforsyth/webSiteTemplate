@customElement('shrine-list')
class ShrineList extends Polymer.Element {
    @property()
    items: any[];

    @property()
    featuredItem: object;

    @property()
    section: string;

    _sortItems() {
        return Math.round(Math.random() * 3) - 1;
    }
}
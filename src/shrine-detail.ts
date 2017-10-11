@customElement('shrine-detail')
class ShrineDetail extends Polymer.Element {
    @property({ notify: true })
    item: Object;
    // {
    //     type: Object,
    //     observer: '_itemChanged'
    // },

    @property()
    section: string;

    @property()
    relatedItems: any[];

    @observe('item')
    _itemChanged(item: any) {
        this.$.img.src = '';
        this.$.img.src = item.imageUrl;
    }
}
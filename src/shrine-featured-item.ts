@customElement('shrine-featured-item')
class ShrineFeaturedItem extends Polymer.Element {
    @property()
    item: Object;

    @observe('item')
    _itemChanged(item: any) {
        this.style.visibility = item && item.title ? 'visible' : 'hidden';
        this.$.img.src = '';
        this.$.img.src = item ? item.imageUrl : '';
    }
}
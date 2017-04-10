/**
 * @file TouchRipple
 * @author leon <ludafa@outlook.com>
 */

import san from 'san';
import Ripple from './Ripple';

export default san.defineComponent({

    components: {
        'san-ripple': Ripple
    },

    template: `
        <div
            class="sm-touch-ripple"
            on-click="click($event)">
            <san-ripple
                san-for="ripple, index in ripples"
                left="{{ripple.x}}"
                top="{{ripple.y}}"
                width="{{ripple.width}}"
                height="{{ripple.height}}"
                on-animate-end="onRippleAnimateEnd(index)" />
        </div>
    `,

    initData() {
        return {
            ripples: []
        };
    },

    click(e) {
        let {pageX, pageY} = e;
        let {top, left, width, height} = this.el.getBoundingClientRect();
        this.data.push('ripples', {
            x: pageX - left,
            y: pageY - top,
            width,
            height
        });
    },

    onRippleAnimateEnd(rippleIndex) {
        this.data.removeAt('ripples', rippleIndex);
    }

});

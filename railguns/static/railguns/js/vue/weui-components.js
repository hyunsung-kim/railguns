'use strict';

// 💙 组件
Vue.component('app', {
    template: '<div class="container"><div class="topBar">\u8FD9\u4E2A\u5730\u65B9\u5728\u6E32\u67D3\u540E\u4E0D\u4F1A\u88AB\u5360\u7528</div><slot></slot></div>'
});
Vue.component('app-header', {
    template: '<div class="header" slot="header">this is header</div>'
});
Vue.component('app-content', {
    template: '<div class="content">this is content</div>'
});
Vue.component('app-footer', {
    template: '\n        <!--<div class="weui-footer weui-footer_fixed-bottom">-->\n        <div class="weui-footer">\n            <br>\n            <br>\n            <p class="weui-footer__links">\n                <!--<a href="javascript:home();" class="weui-footer__link">\u9996\u9875</a>-->\n            </p>\n            <p class="weui-footer__text">Copyright &copy; 2018 www.wowxjp.com</p>\n        </div>'
});

// 菜单
Vue.component('menu-item', {
    props: ['icon', 'title', 'link'],
    template: '<a :href="link" class="material-icons mdc-top-app-bar__action-item" :aria-label="title" :alt="title">{{ icon }}</a>'
});

// 基本模版
var icon = '<div v-if="icon" class="weui-cell__hd"><img style="width: 40px;border-radius: 50%;margin-right: 15px;display: block" alt="" :src="icon"></div>';

var icon1 = '<div v-if="icon" class="weui-cell__hd" :style="style"><i :class="\'fas fa-fw fa-\' + icon" style="margin-right: 15px;display: block;"></i></div>';

var accessory = '<div v-if="link" class="weui-cell__ft"></div>';

var list_item_default = '\n    ' + icon1 + '\n    <div class="weui-cell__bd">\n        <span v-if="badges" style="vertical-align: middle">{{ title }}</span>\n        <p v-else>{{ title }}</p>\n        <span v-for="badge in badges" class="weui-badge" style="margin-left: 5px;">{{ badge }}</span>\n    </div>\n    <div class="weui-cell__ft"></div>';

var list_item_subtitle = '\n    ' + icon + '\n    <div class="weui-cell__bd">\n        <span v-if="badges" style="vertical-align: middle">{{ title }}</span>\n        <p v-else>{{ title }}</p>\n        <span v-for="badge in badges" class="weui-badge" style="margin-left: 5px;">{{ badge }}</span>\n        <p style="font-size: 13px;color: #888888;">{{ subtitle }}</p>\n    </div>\n    <div class="weui-cell__ft"></div>';

// SO: https://stackoverflow.com/questions/8122042/text-overflow-ellipsis-on-one-of-two-spans-inside-a-wrapper?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
var list_item_value1 = '\n    ' + icon + '\n    <div class="weui-cell__bd">\n        <span v-if="badges" style="vertical-align: middle">{{ title }}</span>\n        <p v-else>{{ title }}</p>\n        <span v-for="badge in badges" class="weui-badge" style="margin-left: 5px;">{{ badge }}</span>\n    </div>\n    <div class="weui-cell__ft">{{ subtitle }}</div>';

// 列表 List
// - 网格列表
Vue.component('collection-list', {
    template: '\n        <div class="weui-grids">\n            <slot name="item"></slot>\n        </div>'
});

// - 普通列表
Vue.component('table-list', {
    template: '\n        <div>\n            <slot name="section">Table List</slot>\n        </div>'
});

// - 普通列表区块
Vue.component('table-list-section', {
    props: {
        grouped: {
            type: Boolean,
            default: true
        }
    },
    template: '\n        <div v-if="grouped" class="weui-cells">\n            <slot name="item"></slot>\n        </div>\n        <div v-else class="weui-cells" style="margin: 0">\n            <slot name="item">\n                <div class="weui-loadmore weui-loadmore_line">\n                    <span class="weui-loadmore__tips">\u6682\u65E0\u6570\u636E</span>\n                </div>\n            </slot>\n        </div>'
});

// 列表 : 区域头
Vue.component('list-section-header', {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    template: '\n        <div class="weui-cells__title">{{ title }}</div>'
});

// 列表 : 项 List Item
// - 默认
Vue.component('list-item-default', {
    props: ['icon', 'title', 'accessory', 'badges', 'link', 'datavalue', 'icon_color'],
    template: '\n        <a v-if="link" :href="link" class="weui-cell weui-cell_access" :datavalue="datavalue">\n            ' + list_item_default + '\n        </a>\n        <div v-else class="weui-cell" :datavalue="datavalue">\n            ' + list_item_default + '\n        </div>',
    computed: {
        // SO: https://stackoverflow.com/a/42872117
        style: function style() {
            return 'color: ' + this.icon_color;
        }
    }
});

// - 副标题
Vue.component('list-item-subtitle', {
    props: ['icon', 'title', 'subtitle', 'accessory', 'badges', 'link'],
    template: '\n        <a v-if="link" :href="link" class="weui-cell weui-cell_access">\n            ' + list_item_subtitle + '\n        </a>\n        <div v-else class="weui-cell">\n            ' + list_item_subtitle + '\n        </div>'
});

// - 左右
Vue.component('list-item-value1', {
    props: ['icon', 'title', 'subtitle', 'accessory', 'badges', 'link', 'datavalue'],
    template: '\n        <a v-if="link" :href="link" class="weui-cell weui-cell_access" :datavalue="datavalue">\n            ' + list_item_value1 + '\n        </a>\n        <div v-else class="weui-cell" :datavalue="datavalue">\n            ' + list_item_value1 + '\n        </div>'
});

// 面板
Vue.component('panel', {
    props: ['icon', 'title', 'subtitle', 'badges', 'link'],
    template: '\n        <a :href="link" class="weui-media-box weui-media-box_appmsg">\n            <div class="weui-media-box__hd">\n                <img class="weui-media-box__thumb" :src="icon" style="border-radius: 50%">\n            </div>\n            <div class="weui-media-box__bd">\n                <h4 class="weui-media-box__title">{{ title }}</h4>\n                <p class="weui-media-box__desc">{{ subtitle }}</p>\n            </div>\n        </a>'
});

// - 卡片
Vue.component('small-card', {
    props: ['icon', 'title', 'subtitle', 'accessory', 'badges', 'meta', 'time', 'extra', 'link'],
    template: '\n        <a :href="link" class="weui-media-box weui-media-box_appmsg">\n            <div v-if="icon" class="weui-media-box__hd">\n                <img class="weui-media-box__thumb" alt="" :src="icon">\n            </div>\n            <div class="weui-media-box__bd">\n                <h4 class="weui-media-box__title">{{ title }}</h4>\n                <p class="weui-media-box__desc">{{ subtitle }}</p>\n                <ul class="weui-media-box__info">\n                    <li class="weui-media-box__info__meta">{{ meta }}</li>\n                    <li class="weui-media-box__info__meta">{{ time }}</li>\n                    <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{ extra }}</li>\n                </ul>\n            </div>\n        </a>'
});

// Grid Item
Vue.component('grid-item', {
    props: ['icon', 'title', 'subtitle', 'badges', 'link', 'icon_color'],
    template: '\n        <a :href="link" class="weui-grid">\n            <div v-if="icon" class="weui-grid__icon">\n                <img :src="icon" :style="style" alt="">\n            </div>\n            <p class="weui-grid__label">{{ subtitle }}</p>\n            <p class="weui-grid__label">{{ title }}</p>\n        </a>',
    computed: {
        style: function style() {
            return 'color: ' + this.icon_color;
        }
    }
});

// 表单
// required 待优化 required pattern=".{1,}"
Vue.component('text-field', {
    props: ['name', 'helper_text', 'value'],
    template: '\n        <div class="weui-cell">\n            <div class="weui-cell__hd">\n                <label class="weui-label">{{ name }}</label>\n            </div>\n            <div class="weui-cell__bd">\n                <input type="text" \n                    v-bind:value="value"\n                    v-on:input="updateValue($event.target.value)">\n            </div>\n        </div>',
    methods: {
        updateValue: function updateValue(value) {
            this.$emit('input', value);
        }
    }
});

// 💙 过滤器
Vue.filter('dateFormat', function (dateStr) {
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

    return moment(dateStr).format(pattern);
});
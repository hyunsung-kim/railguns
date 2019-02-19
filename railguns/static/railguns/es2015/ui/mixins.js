const base = {
    mounted() {
        this.onPrepare()
        this.refresh()
    },
    methods: {
        onPrepare() {
            this.endpoint = this.$el.dataset.endpoint || '' // 从页面获取 Endpoint
        },
        onLoadSuccess(code, data) {
            console.warn('请覆写 onLoadSuccess')
        },
        onLoadFailure(code, message) {
            showAlert(code, message)
        },
        // 💛 Action
        refresh(params) {
            if (this.endpoint.trim()) {
                this.isLoading = true
                httpUtilenqueue('GET', this.endpoint, params, (code, data) => {
                    this.onLoadSuccess(code, data)
                }, (code, message) => {
                    this.onLoadFailure(code, message)
                })
            }
        }
    }
}

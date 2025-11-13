Page({
  onLoad() {},
  data: {
    visible: false,
  },
  handleOnTap() {
    this.setData({ visible: true });
  },
  handleClosePopup() {
    this.setData({ visible: false });
  },
});

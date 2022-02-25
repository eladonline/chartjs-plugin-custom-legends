
const plugin = {
  id: "legendHover",
  beforeInit: (chart, legend, options) => {
    chart.options.plugins.legend.onHover = function (e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      const isVisible = ci.isDatasetVisible(index);
      const nextImage =
        ci.getDatasetMeta(index)._dataset[isVisible ? "primaryHoverImage" : "selectedHoverImage"];
      ci.getDatasetMeta(index)._dataset.pointStyle = nextImage;
      ci.update();
    };
    chart.options.plugins.legend.onLeave = function (e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      const nextImage = ci.getDatasetMeta(index)._dataset["lastImage"];
      ci.getDatasetMeta(index)._dataset.pointStyle = nextImage;
      ci.update();
    };
  },
};

module.exports = plugin;

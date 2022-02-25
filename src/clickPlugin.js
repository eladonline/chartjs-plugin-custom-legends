
const plugin = {
  id: "legendClick",
  beforeInit: (chart, legend, options) => {
    chart.options.plugins.legend.onClick = function onClick(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      const isVisible = ci.isDatasetVisible(index);
      ci.setDatasetVisibility(index, !isVisible);
      const nextImage =
        ci.getDatasetMeta(index)._dataset[isVisible ? "selectedImage" : "primaryImage"];
      ci.getDatasetMeta(index)._dataset.pointStyle = nextImage;
      ci.getDatasetMeta(index)._dataset["lastImage"] = nextImage;
      ci.update();
    };
  },
};

module.exports = plugin
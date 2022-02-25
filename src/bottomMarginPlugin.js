/*
 * ******************************************************************************
 *  * Copyright © 2019-2022, Radware Ltd., all rights reserved.
 *  * The programs and information contained herein are licensed only and not sold.
 *  * The applicable license terms are posted at https://www.radware.com/Resources/eula.html and they are also available directly from Radware Ltd.
 *  *****************************************************************************
 */

function plugin(addHeight) {
  return {
    id: "legendMargin",
    beforeInit: function (chart) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        return (this.height += addHeight);
      };
    }
  };
}

module.exports = plugin;

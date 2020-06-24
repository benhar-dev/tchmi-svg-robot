// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var myModel = function (ContainerId) {

        var self = {

            containerId: ContainerId,

            __X: 0,
            __Y: 0,
            __Z: 0,

            svgHtml: '<svg' +
                '  version="1.1"' +
                '  xmlns="http://www.w3.org/2000/svg"' +
                '  xmlns:xlink="http://www.w3.org/1999/xlink"' +
                '  preserveAspectRatio="xMidYMid meet"' +
                '  viewBox="0 0 640 640"' +
                '  width="640"' +
                '  height="640"' +
                '>' +
                '  <defs>' +
                '    <path' +
                '      d="M15.02 210.5L295.02 210.5L295.02 220.5L15.02 220.5L15.02 210.5Z"' +
                '      id="c1rWsqBMFL"' +
                '    ></path>' +
                '    <path' +
                '      d="M295.02 210.5L285.02 200.5L5.02 200.5L15.02 210.5L295.02 210.5Z"' +
                '      id="b6f4Wv0SqC"' +
                '    ></path>' +
                '    <path' +
                '      d="M15.02 210.5L15.02 220.5L5.02 210.5L5.02 200.5L15.02 210.5Z"' +
                '      id="aymoPTovl"' +
                '    ></path>' +
                '    <path' +
                '      d="M216.61 350.5L216.61 360.5L56.61 200.5L56.61 190.5L216.61 350.5Z"' +
                '      id="ffSInVf8h"' +
                '    ></path>' +
                '    <path' +
                '      d="M216.61 350.5L226.61 350.5L226.61 360.5L216.61 360.5L216.61 350.5Z"' +
                '      id="bvNdJToD9"' +
                '    ></path>' +
                '    <path' +
                '      d="M216.61 350.5L226.61 350.5L66.61 190.5L56.61 190.5L216.61 350.5Z"' +
                '      id="dWwzuXAy0"' +
                '    ></path>' +
                '    <path' +
                '      d="M25 191.5L65 191.5L85 211.5L95 211.5L65 181.5L15 181.5L25 191.5Z"' +
                '      id="c8S64cgdJy"' +
                '    ></path>' +
                '    <path' +
                '      d="M25 191.5L35 201.5L65 201.5L65 191.5L25 191.5Z"' +
                '      id="fkcuNznJq"' +
                '    ></path>' +
                '    <path' +
                '      d="M85 221.5L95 221.5L95 211.5L85 211.5L85 221.5Z"' +
                '      id="b4sB7gUvM"' +
                '    ></path>' +
                '    <path d="M65 201.5L75 201.5L65 191.5L65 201.5Z" id="c48VfmdDp"></path>' +
                '    <path' +
                '      d="M44.11 10L54.11 10L54.11 200L44.11 200L44.11 10Z"' +
                '      id="f3d3c1H2DR"' +
                '    ></path>' +
                '    <path d="" id="brypHP0n"></path>' +
                '    <path' +
                '      d="M39.11 195L44.11 200L44.11 10L39.11 5L39.11 195Z"' +
                '      id="aAx2JihHX"' +
                '    ></path>' +
                '    <path' +
                '      d="M44.11 10L54.11 10L49.11 5L39.11 5L44.11 10Z"' +
                '      id="g2zgYfGxqO"' +
                '    ></path>' +
                '    <path' +
                '      d="M165.02 360.5L445.02 360.5L445.02 370.5L165.02 370.5L165.02 360.5Z"' +
                '      id="dAh7EGbzI"' +
                '    ></path>' +
                '    <path' +
                '      d="M445.02 360.5L435.02 350.5L155.02 350.5L165.02 360.5L445.02 360.5Z"' +
                '      id="dk5GqAd98"' +
                '    ></path>' +
                '    <path' +
                '      d="M165.02 360.5L165.02 370.5L155.02 360.5L155.02 350.5L165.02 360.5Z"' +
                '      id="a1ihSwHiLZ"' +
                '    ></path>' +
                '    <path' +
                '      d="M165.4 350.5L165.4 360.5L5.4 200.5L5.4 190.5L165.4 350.5Z"' +
                '      id="fiHuWPSq3"' +
                '    ></path>' +
                '    <path' +
                '      d="M165.4 350.5L175.4 350.5L175.4 360.5L165.4 360.5L165.4 350.5Z"' +
                '      id="cxBsxpK5b"' +
                '    ></path>' +
                '    <path' +
                '      d="M165.4 350.5L175.4 350.5L15.4 190.5L5.4 190.5L165.4 350.5Z"' +
                '      id="bdW7fX4gD"' +
                '    ></path>' +
                '    <path' +
                '      d="M35 211.5L35 221.5L5 191.5L5 181.5L35 211.5Z"' +
                '      id="feH93McNh"' +
                '    ></path>' +
                '    <path' +
                '      d="M5 181.5L35 211.5L85 211.5L75 201.5L35 201.5L15 181.5L5 181.5Z"' +
                '      id="a5I1AOVp"' +
                '    ></path>' +
                '    <path' +
                '      d="M35 211.5L85 211.5L85 221.5L35 221.5L35 211.5Z"' +
                '      id="fabLxdagN"' +
                '    ></path>' +
                '    <path' +
                '      d="M216.35 349.99L216.35 359.77C212.35 355.95 209.49 353.22 207.78 351.58C206.06 349.94 205.48 349.39 206.05 349.93"' +
                '      id="b46xvFkC1R"' +
                '    ></path>' +
                '    <path' +
                '      d="M216.25 350.28L226.25 350.28L226.25 360.28L216.25 360.28L216.25 350.28Z"' +
                '      id="axtMVLW9e"' +
                '    ></path>' +
                '  </defs>' +
                '  <g>' +
                '    <!--Back x rail-->' +
                '    <g class="Base">' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#c1rWsqBMFL"' +
                '          opacity="1"' +
                '          fill="#666666"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#c1rWsqBMFL"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#b6f4Wv0SqC"' +
                '          opacity="1"' +
                '          fill="#666666"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#b6f4Wv0SqC"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#aymoPTovl"' +
                '          opacity="1"' +
                '          fill="#666666"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#aymoPTovl"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '    </g>' +
                '    <!--Right y rail-->' +
                '    <g class="XAxis">' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#ffSInVf8h"' +
                '          opacity="1"' +
                '          fill="#aeb3b8"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#ffSInVf8h"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#27190d"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#bvNdJToD9"' +
                '          opacity="1"' +
                '          fill="#aeb3b8"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#bvNdJToD9"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#dWwzuXAy0"' +
                '          opacity="1"' +
                '          fill="#aeb3b8"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#dWwzuXAy0"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#2f251c"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '    </g>' +
                '    <!--Rear z plate-->' +
                '    <g class="XYAxis">' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#c8S64cgdJy"' +
                '          opacity="1"' +
                '          fill="#ef0000"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#c8S64cgdJy"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#fkcuNznJq"' +
                '          opacity="1"' +
                '          fill="#ef0000"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#fkcuNznJq"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#b4sB7gUvM"' +
                '          opacity="1"' +
                '          fill="#ef0000"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#b4sB7gUvM"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#c48VfmdDp"' +
                '          opacity="1"' +
                '          fill="#ef0000"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#c48VfmdDp"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '    </g>' +
                '    <!--Z rail-->' +
                '    <g class="XYZAxis">' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#f3d3c1H2DR"' +
                '          opacity="1"' +
                '          fill="#6671d7"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#f3d3c1H2DR"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#brypHP0n"' +
                '          opacity="1"' +
                '          fill="#6671d7"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#brypHP0n"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#aAx2JihHX"' +
                '          opacity="1"' +
                '          fill="#6671d7"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#aAx2JihHX"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#g2zgYfGxqO"' +
                '          opacity="1"' +
                '          fill="#6671d7"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#g2zgYfGxqO"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '    </g>' +
                '    <!--Front x rail-->' +
                '    <g class="Base">' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#dAh7EGbzI"' +
                '          opacity="1"' +
                '          fill="#666666"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#dAh7EGbzI"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#dk5GqAd98"' +
                '          opacity="1"' +
                '          fill="#666666"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#dk5GqAd98"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#a1ihSwHiLZ"' +
                '          opacity="1"' +
                '          fill="#666666"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#a1ihSwHiLZ"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '    </g>' +
                '    <!--Left y rail-->' +
                '    <g class="XAxis">' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#fiHuWPSq3"' +
                '          opacity="1"' +
                '          fill="#aeb3b8"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#fiHuWPSq3"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#27190d"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#cxBsxpK5b"' +
                '          opacity="1"' +
                '          fill="#aeb3b8"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#cxBsxpK5b"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#bdW7fX4gD"' +
                '          opacity="1"' +
                '          fill="#aeb3b8"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#bdW7fX4gD"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#2f251c"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '    </g>' +
                '    <!--Front z plate-->' +
                '    <g class="XYAxis">' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#feH93McNh"' +
                '          opacity="1"' +
                '          fill="#ef0000"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#feH93McNh"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#a5I1AOVp"' +
                '          opacity="1"' +
                '          fill="#ef0000"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#a5I1AOVp"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#000000"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#fabLxdagN"' +
                '          opacity="1"' +
                '          fill="#ef0000"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#fabLxdagN"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#090909"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '    </g>' +
                '    <!--Right y rail correction-->' +
                '    <g class="XAxis">' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#b46xvFkC1R"' +
                '          opacity="1"' +
                '          fill="#aeb3b8"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#b46xvFkC1R"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#151313"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '      <g>' +
                '        <use' +
                '          xlink:href="#axtMVLW9e"' +
                '          opacity="1"' +
                '          fill="#aeb3b8"' +
                '          fill-opacity="1"' +
                '        ></use>' +
                '        <g>' +
                '          <use' +
                '            xlink:href="#axtMVLW9e"' +
                '            opacity="1"' +
                '            fill-opacity="0"' +
                '            stroke="#151313"' +
                '            stroke-width="1"' +
                '            stroke-opacity="1"' +
                '          ></use>' +
                '        </g>' +
                '      </g>' +
                '    </g>' +
                '  </g>' +
                '</svg>',

            // Initialise
            // -----------------------------------------------------------------------------------------
            // setup binding to the user symbols and render the first position
            // example: 
            //     <script>
            //          if (TcHmi.Server.isWebsocketReady()) {
            //              var modelFunction = TcHmi.Functions.getFunction("myModel");
            //              var robotModel = modelFunction('myRobot');
            //              robotModel.initialize('PLC1.MAIN.x', 'PLC1.MAIN.y', 'PLC1.MAIN.z');
            //          }
            //      </script>
            initialize: function (xSymbol, ySymbol, zSymbol) {
                self.bindVariable(xSymbol, self.xChanged);
                self.bindVariable(ySymbol, self.yChanged);
                self.bindVariable(zSymbol, self.zChanged);
                self.render();
            },

            render: function () {
                $("#" + self.containerId).html(self.svgHtml);
                
            },

            bindVariable(symbolName, callback) {
                if (TcHmi.Server.isWebsocketReady()) {
                    var commands = [
                        {
                            'symbol': symbolName
                        }];

                    var requestId = TcHmi.Server.subscribe(commands, 100, function (data) {
                        if (data.error !== TcHmi.Errors.NONE) {console.log(data); return;}

                        var response = data.response;
                        if (response.error !== undefined) {console.log(data); return;}

                        var commands = response.commands;
                        if (commands === undefined) {console.log(data); return;}

                        var command = response.commands[0];
                        if (command === undefined) { console.log(data); return;}
                        if (command.error !== undefined) {console.log(data); return;}
                        // Handle result...
                        callback(command.readValue);
                    });

                    var destroyDetachedEvent = TcHmi.EventProvider.register(
                        self.containerId + '.onDetached',
                        function (evt, data) {
                            TcHmi.Server.unsubscribe(requestId);
                            destroyDetachedEvent();
                        }
                    );
                }
            },

            xChanged(value) {
                console.log("x " + value);
                self.__X = value;
                self.update()             

            },

            yChanged(value) {
                console.log("y " + value);
                self.__Y = value;
                self.update()   
            },

            zChanged(value) {
                console.log("z " + value);
                self.__Z = value;
                self.update()   
            },

            update() {
      
                var xCalc = self.__X + (self.__Y * Math.cos(0 * Math.PI / 180));
                var zCalc = self.__Y + self.__Z;

                $("#" + self.containerId).find(".XAxis").css("transform", "translate(" + self.__X.toFixed(0).toString() + "px, 0px)");
                $("#" + self.containerId).find(".XYAxis").css("transform", "translate(" + xCalc.toString() + "px, " + self.__Y.toString() + "px)");
                $("#" + self.containerId).find(".XYZAxis").css("transform", "translate(" + xCalc.toString() + "px, " + zCalc.toString() + "px)");
            }
        };

        return self;

    };
    
    TcHmi.Functions.registerFunction('myModel', myModel);
})(TcHmi);
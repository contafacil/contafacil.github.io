angular.module('templates-common', ['utils/transactionCreationForm.tpl.html']);

angular.module("utils/transactionCreationForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("utils/transactionCreationForm.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <a ng-click=\"$close()\" class=\"close\">&times;</a>\n" +
    "  <h4 class=\"modal-title\">Factura</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form id=\"invoice-form\" class=\"form-horizontal\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 hidden-xs\" style=\"color: #999; line-height: 1.6em;\">\n" +
    "        <div class=\"well\" style=\"position: relative;\">\n" +
    "          <div class=\"account-data\">\n" +
    "            Startup Weekend<br>\n" +
    "            48395199958-4<br>\n" +
    "            Calle 28 #14A - 20<br>\n" +
    "            12345678<br>\n" +
    "            Bogotá\n" +
    "          </div>\n" +
    "          <span class=\"glyphicon glyphicon-cog show-data\" style=\"font-size: 16px; position: absolute; bottom: 10px; top: initial; right: 10px;\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edita los datos de tu empresa que aparecerán en la factura\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"col-xs-12 col-sm-6\">\n" +
    "        <div id=\"number-div\" class=\"form-group\">\n" +
    "          <label for=\"number\" class=\"control-label col-xs-7 col-sm-4\">Número:</label>\n" +
    "          <div class=\"col-xs-5 col-sm-8\">\n" +
    "            <input id=\"number\" type=\"text\" class=\"form-control text-right\" value=\"1\" placeholder=\"Calculando ...\">\n" +
    "            <span class=\"error\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div id=\"date-div\" class=\"form-group has-date\">\n" +
    "          <label for=\"date\" class=\"control-label col-xs-7 col-sm-4\">Fecha:</label>\n" +
    "          <div class=\"col-xs-5 col-sm-8\">\n" +
    "            <input id=\"date\" type=\"text\" class=\"date-pick form-control text-right\" readonly=\"true\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div id=\"due-date-div\" class=\"form-group has_date\">\n" +
    "          <label for=\"due-date\" class=\"control-label col-xs-7 col-sm-4\">Vence:</label>\n" +
    "          <div class=\"col-xs-5 col-sm-8\">\n" +
    "            <input id=\"due-date\" type=\"text\" class=\"date-pick form-control text-right\" readonly=\"true\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"row hr-separator\" style=\"background: white; color: #ccc; font-size: 12px; padding: 5px; margin-left: 10px\"><span>DATOS DEL CLIENTE</span><hr></div>\n" +
    "\n" +
    "       <div class=\"form-group row customer-group\">\n" +
    "        <div class=\"col-xs-7 col-sm-8 has-feedback\">\n" +
    "          <input id=\"customer-name\" type=\"text\" class=\"form-control\" placeholder=\"Razón Social o Nombre\" value=\"\">\n" +
    "          <span class=\"glyphicon glyphicon-remove form-control-feedback clean-customer\" style=\"display:none;\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Deseleccionar y limpiar campos del cliente\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-5 col-sm-4\">\n" +
    "          <input id=\"customer-id\" type=\"text\" class=\"form-control\" placeholder=\"Nit o Cédula\" value=\"\">\n" +
    "          <span class=\"error\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    <div class=\"form-group row\">\n" +
    "      <div class=\"col-md-12\">\n" +
    "        <input id=\"customer-address\" type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Dirección\" value=\"\">\n" +
    "        <span class=\"error\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "        <div class=\"row hr-separator\" style=\"background: white; color: #ccc; font-size: 12px; padding: 5px; margin-left: 10px\"><span>DETALLE</span><hr></div>\n" +
    "\n" +
    "    <div id=\"items\">\n" +
    "      <div class=\"form-group row item\">\n" +
    "        <div class=\"form-goup has-feedback col-xs-7 col-sm-8\">\n" +
    "          <input type=\"text\" class=\"item-description form-control\" placeholder=\"Descripción\" value=\"\">\n" +
    "          <span class=\"glyphicon glyphicon-remove form-control-feedback remove-item\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Remover item\"></span>\n" +
    "          <span class=\"error\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-5 col-sm-4\">\n" +
    "          <input type=\"text\" class=\"item-amount form-control text-right\" placeholder=\"$ 0.00\" value=\"\">\n" +
    "          <span class=\"error\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"row\" style=\"margin-top: -5px; margin-bottom: 15px;\">\n" +
    "      <div class=\"col-md-12 text-right\">\n" +
    "        <a href=\"#\" class=\"new-line\">Agregar nueva línea</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "      <div class=\"col-sm-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"subtotal\" class=\"control-label col-xs-7 col-sm-8\">Subtotal:</label>\n" +
    "          <div class=\"col-xs-5 col-sm-4\">\n" +
    "            <input id=\"subtotal\" type=\"text\" class=\"form-control text-right\" placeholder=\"$ 0.00\" readonly=\"true\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"tax\" class=\"control-label col-xs-7 col-sm-8\">Impuestos <span class=\"tax-percentage\" style=\"color: #269ebf; cursor: pointer;\">16%</span>:</label>\n" +
    "          <div class=\"col-xs-5 col-sm-4\">\n" +
    "            <input id=\"tax\" type=\"text\" class=\"form-control text-right\" placeholder=\"$ 0.00\" value=\"\" readonly=\"true\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"total\" class=\"control-label col-xs-7 col-sm-8\">Total:</label>\n" +
    "          <div class=\"col-xs-5 col-sm-4\">\n" +
    "            <input id=\"total\" type=\"text\" class=\"form-control text-right\" placeholder=\"$ 0.00\" readonly=\"true\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\"><hr></div>\n" +
    "    <div class=\"form-group row\">\n" +
    "      <div class=\"col-md-12\">\n" +
    "        <textarea id=\"additional_info\" class=\"form-control\" maxlength=\"255\" placeholder=\"Nota para el cliente ...\" rows=\"1\"></textarea>\n" +
    "        <span class=\"error\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-4\">\n" +
    "        <div id=\"paid-div\" class=\"checkbox\" style=\"padding-top: 0 !important;\">\n" +
    "          <label for=\"paid\" style=\"padding-top: 0 !important; margin-bottom: 15px;\">\n" +
    "            <input id=\"paid\" type=\"checkbox\"> Pagada\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-8 text-right\" style=\"margin-top: -5px; margin-bottom: 10px;\">\n" +
    "        <a href=\"#\" class=\"show-settings\"><span class=\"glyphicon glyphicon-cog\" style=\"padding-top: 6px;\"></span> Info de Pago y Nota Legal</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 text-right\">\n" +
    "        <button ng-click=\"createTransaction()\" class=\"btn btn-default btn-info ng-scope\" ng-click=\"openAccountForm()\"><i class=\"fa fa-plus\"></i>\n" +
    "        Agregar cuenta\n" +
    "      </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!--\n" +
    "\n" +
    "\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <a class=\"btn btn-default delete\" tabindex=\"-1\" style=\"display: none;\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Guardar</button>\n" +
    "    <a href=\"#\" target=\"_blank\" class=\"btn btn-default generate-pdf\" style=\"display: none;\"><span class=\"glyphicon glyphicon-file\"></span> PDF</a>\n" +
    "    <button type=\"button\" class=\"btn btn-default show-send-email\" style=\"display: none;\"><span class=\"glyphicon glyphicon-send\"></span> Email</button>\n" +
    "  </div>\n" +
    "\n" +
    "-->");
}]);

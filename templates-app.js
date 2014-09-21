angular.module('templates-app', ['dashboard/accountRecordsCreationForm.tpl.html', 'dashboard/dashboard.tpl.html', 'landing/landing.tpl.html', 'pymeDashboard/pymeDashboard.tpl.html', 'signup/accountCreationForm.tpl.html', 'signup/initialBalance.tpl.html', 'signup/signup.tpl.html']);

angular.module("dashboard/accountRecordsCreationForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/accountRecordsCreationForm.tpl.html",
    "<div class=\"modal-header info\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"$close()\">\n" +
    "    <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n" +
    "  </button>\n" +
    "  <h4 class=\"modal-title\" id=\"myModalLabel\">Clasificar - {{transaction.description}}</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <table class=\"table\">\n" +
    "          <thead>\n" +
    "              <th>Concepto</th>\n" +
    "              <th>Valor</th>\n" +
    "              <th>Cuenta</th>\n" +
    "              <th>Fecha</th>\n" +
    "              <th></th>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr ng-repeat=\"record in accountsRecords\">\n" +
    "              <td>\n" +
    "                <input type=\"text\" name=\"description\" ng-model=\"record.description\">\n" +
    "              </td>\n" +
    "              <td><input type=\"number\" ng-model=\"record.amount\"></td>\n" +
    "              <td>\n" +
    "                <div class=\"dropdown\">\n" +
    "                  <select name=\"account\" id=\"\" class=\"form-control\" ng-model=\"record.account\">\n" +
    "                    <option ng-repeat=\"account in accounts\" value=\"account.id\">{{account.pucId}}-{{account.name}}</option>\n" +
    "                  </select>\n" +
    "                </div>\n" +
    "              </td>\n" +
    "              <td>\n" +
    "                <input type=\"date\" class=\"form-control\" ng-model=\"record.date\">\n" +
    "              </td>\n" +
    "              <td>\n" +
    "                <button class=\"btn btn-danger\" ng-click=\"removeAccountRecord($index)\">\n" +
    "                  <i class=\"fa fa-minus danger\"></i>\n" +
    "                </button>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\" col-xs-12\">\n" +
    "      <button type=\"button\" class=\"btn btn-primary\" ng-click=\"addAccountRecord()\">\n" +
    "        <i class=\"fa fa-plus\"></i>\n" +
    "        Registro Contable\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-default\" ng-click=\"$close()\">Cerrar</button>\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveAccountsRecords()\">Guardar</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<div class=\"wrapper\" style=\"background-image: url('/assets/images/home.png');\n" +
    "background-size: cover;\n" +
    "background-repeat: no-repeat;height:800px;\">\n" +
    "<nav class=\"navbar\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\">\n" +
    "            <img src=\"/assets/images/logo-transparante.png\" alt=\"\" class=\"img-responsive pull-left\" style=\"width: 60px;\">\n" +
    "              <h4 class=\"brand\">\n" +
    "              Conta<strong>fácil</strong>\n" +
    "              <h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 text-right\">\n" +
    "              <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                  <a cf-create-transaction class=\"navbar-link\"><i class=\"fa fa-plus\"></i> Transacción</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"/#/pyme-dashboard\" class=\"navbar-link\">Pymes</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a class=\"navbar-link active\" style=\"border-radius: 10px;\n" +
    "border-style: solid;\n" +
    "border-color: white;\">Registros Contables</a>\n" +
    "                </li>\n" +
    "\n" +
    "                <li>\n" +
    "                  <a class=\"navbar-link\">Reportes</a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\" ng-controller=\"DashboardCtrl\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <form id=\"buscar\" method=\"get\">\n" +
    "          <span class=\"fieldwrap\">\n" +
    "            <input id=\"search-concept\" name=\"q\" type=\"text\" class=\"form-control\" placeholder=\"Buscar Concepto ...\">\n" +
    "          </span>\n" +
    "      </form>\n" +
    "      <div class=\"filter-box\" cf-filter filter-name=\"pending\" list-to-filter=\"transactions\" filters=\"['pending','done']\">\n" +
    "        <h3 style=\"color:white;\">Estado transacción</h3>\n" +
    "        <p style=\"color:whitesmoke;\">Selecciona para filtrar</p>\n" +
    "        <ul class=\"list-group\">\n" +
    "          <li cf-filter-item class=\"list-group-item\" cf-filter-item filter-name=\"done\" filter-parent=\"pending\">\n" +
    "            Hecho\n" +
    "          </li>\n" +
    "          <li cf-filter-item class=\"list-group-item\" cf-filter-item filter-name=\"pending\" filter-parent=\"pending\">\n" +
    "            Pendiente\n" +
    "          </li>\n" +
    "\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "      <table class=\"table table-hover\">\n" +
    "        <tbody>\n" +
    "          <tr style=\"background-color:white;\" ng-repeat=\"tx in transactions\" cf-transaction=\"tx\" class=\"ar-table\" style=\"cursor:pointer;\">\n" +
    "            <td class=\"date\">\n" +
    "              <span class=\"month\">{{tx.date | date:'MMM'}}</span>\n" +
    "              <span class=\"day\">{{tx.date | date:'dd'}}</span>\n" +
    "            </td>\n" +
    "            <td class=\"info\">\n" +
    "                <div class=\"info-top clearfix\">{{tx.transactionType}}<span ng-class=\"{'cf-done':!tx.pending,'cf-pending':tx.pending}\">{{tx.pending?'Pendiente':'Hecho'}}</span><span class=\"value\"><i class=\"cf-minus\"></i>{{tx.amount | currency:'$COP '}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"info-bottom\">\n" +
    "                  <span class=\"concept\">{{tx.description}}</span>\n" +
    "                </div>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("landing/landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/landing.tpl.html",
    "<div class=\"main\" ng-controller=\"LandingCtrl\">\n" +
    "    <header>\n" +
    "      <nav class=\"navbar\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\">\n" +
    "            <img src=\"/assets/images/logo-transparante.png\" alt=\"\" class=\"img-responsive pull-left\" style=\"width: 60px;\">\n" +
    "              <h4 class=\"brand\">\n" +
    "              Conta<strong>fácil</strong>\n" +
    "              <h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 text-right\">\n" +
    "              <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                  <a href=\"#que-es\" class=\"navbar-link\">¿Qué es?</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"#beneficios\" class=\"navbar-link\">Beneficios</a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "    </header>\n" +
    "    <main>\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row row-centered\">\n" +
    "          <div class=\"col-xs-12 col-centered\">\n" +
    "            <h1 class=\"header\">Contabilidad fácil para pymes</h1>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-12\">\n" +
    "            <h2 class=\"sub-header\">Dedícate a tus negocios, nosotros nos encargamos de la contabilidad.</h2>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-12 signup-form-container\">\n" +
    "            <form id=\"signup-form\" role=\"form\">\n" +
    "              <div class=\"row-centered\">\n" +
    "                <div class=\"form-group col-xs-6 form-col\">\n" +
    "                  <input id=\"name\" class=\"signup-input form-control pull-right\" placeholder=\"Nombre*\"/>\n" +
    "                  <span id=\"name-error\" class=\"label label-danger\" style=\"display:none;\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group col-xs-6 form-col\">\n" +
    "                  <input id=\"email\" class=\"signup-input form-control  pull-left\" placeholder=\"Email*\"/>\n" +
    "                  <span id=\"email-error\" class=\"label label-danger\" style=\"display:none;\"></span>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"row row-centered\">\n" +
    "                <div class=\"form-group col-centered\">\n" +
    "                  <button ng-click=\"signup()\" class=\"btn btn-success form-control signup-submit\">Prueba gratis por 30 días</button>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </main>\n" +
    "  </div>\n" +
    "  <!-- Modal -->\n" +
    "  <div class=\"modal fade\">\n" +
    "    <div class=\"modal-dialog modal-sm\">\n" +
    "      <div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\" style=\"background-color:#419641;\">\n" +
    "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n" +
    "          X\n" +
    "          </button>\n" +
    "          <h3 class=\"modal-title text-center\">Gracias por registrarte</h3>\n" +
    "        </div>\n" +
    "        <div class=\"modal-body\">\n" +
    "          <p>Muy pronto te contacteremos para contarte más sobre Conta<strong>fácil</strong></P>\n" +
    "        </div>\n" +
    "        <!-- TODO: add FB share btn\n" +
    "          <div class=\"modal-footer\">\n" +
    "                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n" +
    "          </div>\n" +
    "          -->\n" +
    "      </div>\n" +
    "      <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "  </div>\n" +
    "  <!-- /.modal -->\n" +
    "  <section class=\"what-is-container\">\n" +
    "    <div id=\"que-es\" class=\"container\">\n" +
    "      <div class=\"row row-centered\">\n" +
    "        <div class=\"col-xs-12 col-centered page-header\">\n" +
    "          <h2 class=\"text-center\">\n" +
    "          ¿Qué es Contafácil?\n" +
    "          <h2>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row row-centered\">\n" +
    "        <p class=\"col-xs-10 col-xs-offset-1 que-es\">\n" +
    "          Conta<strong>fácil</strong> es una herramienta de contabilidad online que está especialmente diseñada para que las pequeñas empresas puedan llevar su contabilidad de una manera <strong>fácil</strong>. Se acabaron los tiempos en los que tenías que acudir a costosos y complicados sistemas contables.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!-- Benefits details -->\n" +
    "  <section class=\"benefits-container\">\n" +
    "    <div id=\"beneficios\" class=\"container\">\n" +
    "      <div class=\"row row-centered\">\n" +
    "        <div class=\"col-xs-12 col-centered page-header\">\n" +
    "          <h2 class=\"text-center\">\n" +
    "          Beneficios\n" +
    "          <h2>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 col-md-4\">\n" +
    "          <h3 class=\"text-center\"><span class=\"glyphicon glyphicon-usd\"/> Bajo costo</h3>\n" +
    "          <p>\n" +
    "            Conta<strong>fácil</strong> se adapta a tus necesidades así que únicamente <strong>pagas por lo que usas</strong>. No más módulos que ni siquiera el contador entiende.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 col-md-4\">\n" +
    "          <div class=\"row\">\n" +
    "            <h3 class=\"text-center\"><span class=\"glyphicon glyphicon-ok\"/> Fácil de usar</h3>\n" +
    "          </div>\n" +
    "          <p>\n" +
    "            El objetivo número uno de nuestro equipo es hacer que Contafácil pueda ser usado por cualquier persona.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 col-md-4\">\n" +
    "          <h3 class=\"text-center\"><span class=\"glyphicon glyphicon-phone\"/> Accesibilidad</h3>\n" +
    "          <p>\n" +
    "            Contafácil te permite ingresar tu información contable desde cualquier lugar y dispositivo.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "\n" +
    "  <!-- Invoicing container -->\n" +
    "  <section class=\"invoice-container clearfix\">\n" +
    "    <div class=\"container feature-box\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <h2>Facturación al instante</h2>\n" +
    "          <p>La facturación no tiene que ser complicada. Con contafácil crea facturas de manera rápida y sencilla. </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pymeDashboard/pymeDashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pymeDashboard/pymeDashboard.tpl.html",
    "<div class=\"wrapper\" style=\"background-image: url('/assets/images/home.png');\n" +
    "background-size: cover;\n" +
    "background-repeat: no-repeat;height:800px;\">\n" +
    "<header style=\"height:110px;\">\n" +
    "<nav class=\"navbar\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\">\n" +
    "            <img src=\"/assets/images/logo-transparante.png\" alt=\"\" class=\"img-responsive pull-left\" style=\"width: 60px;\">\n" +
    "              <h4 class=\"brand\">\n" +
    "              Conta<strong>fácil</strong>\n" +
    "              <h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 text-right\">\n" +
    "              <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                  <a cf-create-transaction class=\"navbar-link\"><i class=\"fa fa-plus\"></i> Transacción</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a class=\"navbar-link active\" style=\"border-radius: 10px;\n" +
    "border-style: solid;\n" +
    "border-color: white;\">Pymes</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"/#/dashboard\" class=\"navbar-link\">Registros Contables</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a class=\"navbar-link\">Reportes</a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "        <div class=\"col-md-8\">\n" +
    "          <img src=\"/assets/images/reportemensual.png\" class=\"img-responsive\" alt=\"\" style=\"margin-top: -40px; margin-bottom: 50px\">\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <img src=\"/assets/images/sidebar.png\" class=\"img-responsive\" alt=\"\" style=\"margin-top: -40px;\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("signup/accountCreationForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signup/accountCreationForm.tpl.html",
    "  <div ng-controller=\"AccountCreationCtrl\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <h2>Creación de cuenta</h2>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "      <form>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"account-name\">Nombre</label>\n" +
    "          <input id=\"account-name\" type=\"text\" ng-model=\"account.name\" class=\"form-control\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"account-puc-id\">Código PUC</label>\n" +
    "          <input id=\"account-puc-id\" type=\"number\" ng-model=\"account.pucId\" class=\"form-control\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"account-type\">Tipo de cuenta</label>\n" +
    "          <select id=\"account-type\" class=\"form-control\" ng-model=\"account.accountType\">\n" +
    "            <option value=\"ASSETS\">1- Activos</option>\n" +
    "            <option value=\"LIABILITIES\">2 - Pasivos</option>\n" +
    "            <option value=\"EQUITY\">3 - Patrimonio</option>\n" +
    "            <option value=\"Revenue\">4 - Ingresos</option>\n" +
    "            <option value=\"EXPENSES\">5 - Gastos</option>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"account-initial-balance\">Saldo inicial</label>\n" +
    "          <input class=\"form-control\" type=\"number\" id=\"account-initial-balance\" ng-model=\"account.initialBalance\">\n" +
    "        </div>\n" +
    "        <div class=\"text-center\">\n" +
    "          <button class=\"btn btn-success btn-lg\" ng-click=\"addAccount()\">Agregar cuenta</button>\n" +
    "        </div>\n" +
    "\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("signup/initialBalance.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signup/initialBalance.tpl.html",
    "<div class=\"wrapper\" style=\"background-image: url('/assets/images/home.png');\n" +
    "background-size: cover;\n" +
    "background-repeat: no-repeat; height:800px;\">\n" +
    "<nav class=\"navbar\" role=\"navigation\" style=\"margin-bottom:0px;\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\">\n" +
    "            <img src=\"/assets/images/logo-transparante.png\" alt=\"\" class=\"img-responsive pull-left\" style=\"width: 60px;\">\n" +
    "              <h4 class=\"brand\">\n" +
    "              Conta<strong>fácil</strong>\n" +
    "              <h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 text-right\">\n" +
    "              <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                  <a href=\"#que-es\" class=\"navbar-link\">¿Qué es?</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"#beneficios\" class=\"navbar-link\">Beneficios</a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "\n" +
    "<div class=\"container\" ng-controller=\"InitialBalanceCtrl\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row row-centered registry-step-header\">\n" +
    "      <div class=\"col-xs-12 text-left col-centered\">\n" +
    "        <h2 class=\"registry-title\" style=\"color:white;\">\n" +
    "          Paso 2 de 2: Crea tus cuentas\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- END registry-step-header -->\n" +
    "    <div class=\"row row-centered\" style=\"background-color:white;border-radius:5px;padding-top:10px;padding-bottom:10px;\">\n" +
    "      <div class=\"col-xs-12 col-centered\">\n" +
    "        <tabset id=\"accounts-registry-tab-content\" class=\"tab-content\">\n" +
    "          <button class=\"btn btn-default btn-info\" ng-click=\"openAccountForm()\"><i class=\"fa fa-plus\"></i>\n" +
    "            Agregar cuenta\n" +
    "          </button>\n" +
    "          <tab heading=\"Todas\">\n" +
    "            <table class=\"table\" style=\"margin-top: 30px;\">\n" +
    "              <thead>\n" +
    "                <tr>\n" +
    "                  <th class=\"col-xs-1\">Código</th>\n" +
    "                  <th class=\"col-xs-2\">Tipo</th>\n" +
    "                  <th class=\"col-xs-6\">Nombre</th>\n" +
    "                  <th class=\"col-xs-3\">Saldo inicial</th>\n" +
    "                </tr>\n" +
    "              </thead>\n" +
    "              <tbody>\n" +
    "                <tr ng-repeat=\"account in accounts\" id=\"{{account.id}}\">\n" +
    "                  <td>{{account.pucId}}</td>\n" +
    "                  <td>\n" +
    "                    <i ng-class=\"{\n" +
    "                      'fa fa-home': account.accountType == 'EQUITY',\n" +
    "                      'fa fa-minus': account.accountType == 'LIABILITIES',\n" +
    "                      'fa fa-plus': account.accountType == 'ASSETS'\n" +
    "                    }\"></i>\n" +
    "                    {{toEs(account.accountType)}}\n" +
    "                  </td>\n" +
    "                  <td>{{account.name}}</td>\n" +
    "                  <td>\n" +
    "                    $ <input ui-event=\"{ change : 'updateTotals()' }\" type=\"text\" ng-model=\"account.initialBalance\" money precision=\"2\">\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "              </tbody>\n" +
    "            </table>\n" +
    "            <h4 class=\"text-right\" style=\"margin-right: 210px;\" ng-class=\"{'text-danger':totalAssets-totalLiabilites-totalEquity !== 0.0 && totalAssets-totalLiabilites-totalEquity !== 0 && totalAssets-totalLiabilites-totalEquity !== '0.0'}\">Balance <span ng-class=\"{'text-danger':totalAssets-totalLiabilites-totalEquity !== 0.0 && totalAssets-totalLiabilites-totalEquity !== 0 && totalAssets-totalLiabilites-totalEquity !== '0.0'}\" style=\"font-size: 24px; margin-left: 5px;\">{{totalAssets-totalLiabilities-totalEquity | currency:'$ '}}</span></h4>\n" +
    "            <button ng-click=\"submitInitialBalance()\" class=\"registry-next-step-btn btn btn-default btn-success\" style=\"font-weight: bold;\">Siguiente Paso</button>\n" +
    "          </tab>\n" +
    "          <tab\n" +
    "          ng-repeat=\"accountType in accountsTypes\"\n" +
    "          heading=\"{{accountType.es}}\">\n" +
    "            <table class=\"table\">\n" +
    "              <thead>\n" +
    "                <tr>\n" +
    "                  <th class=\"col-xs-2\">Código</th>\n" +
    "                  <th class=\"col-xs-7\">Nombre</th>\n" +
    "                  <th class=\"col-xs-3\">Saldo inicial</th>\n" +
    "                </tr>\n" +
    "              </thead>\n" +
    "              <tbody>\n" +
    "                <tr ng-repeat=\"account in accounts | filter:{accountType:accountType.name}\" id=\"{{account.id}}\">\n" +
    "                  <td>{{account.pucId}}</td>\n" +
    "                  <td>{{account.name}}</td>\n" +
    "                  <td>$ <input ui-event=\"{ change : 'updateTotals()' }\" type=\"text\" ng-model=\"account.initialBalance\" money precision=\"2\"></td>\n" +
    "                </tr>\n" +
    "              </tbody>\n" +
    "            </table>\n" +
    "            <button ng-click=\"submitInitialBalance()\" class=\"registry-next-step-btn btn btn-default btn-success\" style=\"font-weight: bold;\">Siguiente Paso</button>\n" +
    "          </tab>\n" +
    "        </tabset>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("signup/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signup/signup.tpl.html",
    "<div class=\"wrapper\" style=\"background-image: url('/assets/images/home.png');\n" +
    "background-size: cover;\n" +
    "background-repeat: no-repeat;\">\n" +
    "<nav class=\"navbar\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\">\n" +
    "            <img src=\"/assets/images/logo-transparante.png\" alt=\"\" class=\"img-responsive pull-left\" style=\"width: 60px;\">\n" +
    "              <h4 class=\"brand\">\n" +
    "              Conta<strong>fácil</strong>\n" +
    "              <h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 text-right\">\n" +
    "              <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                  <a href=\"#que-es\" class=\"navbar-link\">¿Qué es?</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"#beneficios\" class=\"navbar-link\">Beneficios</a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "<div>\n" +
    "<div class=\"container\" ng-controller=\"SignupCtrl\">\n" +
    "  <div class=\"row row-centered registry-step-header\">\n" +
    "    <div class=\"col-xs-8 text-left\">\n" +
    "      <h2 class=\"registry-title\" style=\"color:white;\">\n" +
    "        Paso 1 de 2: Registra tu empresa\n" +
    "      </h2>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!-- END registry-step-header -->\n" +
    "  <div class=\"row row-centered\">\n" +
    "    <div class=\"col-md-6 text-left\">\n" +
    "      <form class=\"\" name=\"form\" novalidate>\n" +
    "        <div class=\"registry-form\">\n" +
    "          <h3>Datos del usuario</h3>\n" +
    "          <div cf-required class=\"form-group\">\n" +
    "            <label for=\"user-name\">Nombre</label>\n" +
    "            <input name=\"userName\" id=\"user-name\" type=\"text\" class=\"form-control\" ng-model=\"user.name\" required>\n" +
    "            <span class=\"help-block\" ng-show=\"(form.$dirty && form.userName.$error.required)\">Campo requerido</span>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\" ng-class=\"{'has-error':(form.$dirty && form.userEmail.$error.required)}\">\n" +
    "            <label for=\"user-email\">Email</label>\n" +
    "            <input name=\"userEmail\" id=\"user-email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required>\n" +
    "            <span class=\"help-block\" ng-show=\"(form.$dirty && form.userEmail.$error.required)\">Campo requerido</span>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"user-password\">Contraseña</label>\n" +
    "            <input id=\"user-password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"user-pasword-confirm\">Confirmación de contraseña</label>\n" +
    "            <input id=\"user-pasword-confirm\" type=\"password\" class=\"form-control\" ng-model=\"user.passwordConfirm\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6 text-left\">\n" +
    "        <div class=\"registry-form\">\n" +
    "          <h3>Datos de la empresa</h3>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"company-name\">Nombre de la empresa</label>\n" +
    "            <input id=\"company-name\" type=\"text\" class=\"form-control\" ng-model=\"company.name\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"company-nit\">NIT</label>\n" +
    "            <input id=\"company-nit\" type=\"text\" class=\"form-control\" ng-model=\"company.nit\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"company-phone\">Teléfono</label>\n" +
    "            <input id=\"company-phone\" type=\"text\" class=\"form-control\" ng-model=\"company.phone\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"company-address\">Dirección</label>\n" +
    "            <input id=\"company-address\" type=\"text\" class=\"form-control\" ng-model=\"company.address\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "          <div class=\"row row-centered\">\n" +
    "            <div class=\"text-center\">\n" +
    "              <!--ng-disabled=\"form.$invalid\"-->\n" +
    "              <button\n" +
    "                ng-click=\"submitSignupForm()\"\n" +
    "                class=\"registry-next-step-btn btn btn-default\"\n" +
    "                style=\"background-color: #8DCD08; color: white;\">\n" +
    "                Siguiente Paso\n" +
    "              </button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "</div>");
}]);

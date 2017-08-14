angular.module('insight').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de_DE', {"404 Page not found :(":"404 Seite nicht gefunden :(","About":"Über insight","Address":"Adresse","Application Status":"Programmstatus","Block":"Block","Block Reward":"Belohnung","Blocks":"Blöcke","Can't connect to insight server. Attempting to reconnect...":"Keine Verbindung zum insight-Server möglich. Es wird versucht die Verbindung neu aufzubauen...","Can't connect to internet. Please, check your connection.":"Keine Verbindung zum Internet möglich, bitte Zugangsdaten prüfen.","Can't connect to quantumd to get live updates from the p2p network. (Tried connecting to quantumd at {{host}}:{{port}} and failed.)":"Es ist nicht möglich mit Quantumd zu verbinden um live Aktualisierungen vom P2P Netzwerk zu erhalten. (Verbindungsversuch zu quantumd an {{host}}:{{port}} ist fehlgeschlagen.)","Complete":"Vollständig","Confirmations":"Bestätigungen","Current Sync Status":"Aktueller Status","Details":"Details","Difficulty":"Schwierigkeit","Double spent attempt detected. From tx:":"Es wurde ein \"double Spend\" Versuch erkannt.Von tx:","Error!":"Fehler!","Fee":"Gebühr","Final Balance":"Schlussbilanz","Height":"Höhe","Included in Block":"Eingefügt in Block","Incoherence in levelDB detected:":"Es wurde eine Zusammenhangslosigkeit in der LevelDB festgestellt:","Info Errors":"Fehlerbeschreibung","Initial Block Chain Height":"Ursprüngliche Blockchain Höhe","Input unconfirmed":"Eingabe unbestätigt","Insight is an <a href=\"https://insight.is/\" target=\"_blank\">open-source Quantum blockchain explorer</a> with complete REST and websocket APIs that can be used for writing web wallets and other apps that need more advanced blockchain queries than provided by quantumd RPC. Check out the <a href=\"https://github.com/bitpay/insight-ui\" target=\"_blank\" class=\"ng-scope\">source code</a>.":"Insight ist ein <a href=\"https://insight.is/\" target=\"_blank\">Open Source Quantum Blockchain Explorer</a> tmit vollständigen REST und Websocket APIs um eigene Wallets oder Applikationen zu implementieren. Hierbei werden fortschrittlichere Abfragen der Blockchain ermöglicht, bei denen die RPC des Quantumd nicht mehr ausreichen. Der aktuelle <a href=\"https://github.com/bitpay/insight-ui\" target=\"_blank\" class=\"ng-scope\">Quellcode </a>tist auf Github zu finden.","Insight is still in development, so be sure to report any bugs and provide feedback for improvement at our <a href=\"https://github.com/bitpay/insight-ui/issues\" target=\"_blank\" class=\"ng-scope\">github issue tracker</a>.":"Insight befindet sich aktuell noch in der Entwicklung. Bitte sende alle gefundenen Fehler (Bugs) und Feedback zur weiteren Verbesserung an unseren <a href=\"https://github.com/bitpay/insight-ui/issues\" target=\"_blank\" class=\"ng-scope\">Github Issue Tracker </a>.","Loading Transaction Details":"Lade Transaktionsdetails","Loading...":"Lade...","mined":"gefunden","Mined by":"Gefunden von","Mined Time":"Block gefunden (Mining)","Mining Difficulty":"Schwierigkeitgrad","No blocks yet.":"Keine Blöcke bisher.","No Inputs (Newly Generated Coins)":"Keine Eingänge (Neu generierte Coins)","No matching records found!":"Keine passenden Einträge gefunden!","Number Of Transactions":"Anzahl der Transaktionen","Powered  by:":"Powered by:","Previous Block":"Letzter Block","Received Time":"Eingangszeitpunkt","Redirecting...":"Umleitung...","Search for block, transaction or address":"Suche Block, Transaktion oder Adresse","See all blocks":"Alle Blöcke anzeigen","Size":"Größe","Size (bytes)":"Größe (bytes)","Start Date":"Startdatum","Stats":"Stats","Status":"Status","Summary":"Zusammenfassung","Sync Progress":"Fortschritt","Sync Status":"Syncronisation","Sync Type":"Art der Syncronisation","Synced Blocks":"Syncronisierte Blöcke","There are no transactions involving this address.":"Es gibt keine Transaktionen zu dieser Adressse","Time Offset":"Zeitoffset zu UTC","Timestamp":"Zeitstempel","Total Received":"Insgesamt empfangen","Total Sent":"Insgesamt gesendet","Transaction":"Transaktion","Transactions":"Transaktionen","Type":"Typ","Unconfirmed Transaction!":"Unbestätigte Transaktion!","Value Out:":"Wert:","Version":"Version","github issue tracker":"Github Issue Tracker","Insight is an":"Insight ist ein","open-source Quantum blockchain explorer":"Open Source Quantum Blockchain Explorer","source code":" ist auf Github zu finden","Age":"Alter","Bytes Serialized":"Serialisierte Bytes","Conn":"Verbindungen","Current Blockchain Tip (insight)":"Aktueller Blockchain Tip (insight)","Finish Date":"Fertigstellung","Hash Serialized":"Hash Serialisiert","Input":"Eingänge","Last Block Hash (Quantumd)":"Letzter Hash (Quantumd)","Loading Address Information":"Lade Adressinformationen","Loading Block Information":"Lade Blockinformation","Loading Selected Date...":"Lade gewähltes Datum...","Loading Transactions...":"Lade Transaktionen...","Next Block":"Nächster Block","Output":"Ausgänge","Show input":"Zeige Eingänge","Show less":"Weniger anzeigen","Show more":"Mehr anzeigen","Skipped Blocks (previously synced)":"Verworfene Blöcke (bereits syncronisiert)","Summary <small>confirmed</small>":"Zusammenfassung <small>bestätigt</small>","Testnet":"Testnet aktiv","Today":"Heute","Total Amount":"Gesamtsumme","Transaction Output Set Information":"Transaktions Abgänge","Transaction Outputs":"Abgänge","Unconfirmed Txs Balance":"Unbestätigtes Guthaben","Waiting for blocks...":"Warte auf Blöcke...","Waiting for transactions...":"Warte auf Transaktionen...","by date.":"nach Datum.","first seen at":"zuerst gesehen am","mined on:":"vom:","Waiting for blocks":"Warte auf Blöcke"});
    gettextCatalog.setStrings('es', {"404 Page not found :(":"404 Página no encontrada :(","About":"Acerca de","Address":"Dirección","Application Status":"Estado de la Aplicación","Block":"Bloque","Block Reward":"Bloque Recompensa","Blocks":"Bloques","Can't connect to insight server. Attempting to reconnect...":"No se pudo conectar al servidor insight. Intentando re-conectar...","Can't connect to internet. Please, check your connection.":"No se pudo conectar a Internet. Por favor, verifique su conexión.","Can't connect to quantumd to get live updates from the p2p network. (Tried connecting to quantumd at {{host}}:{{port}} and failed.)":"No se pudo conectar a quantumd para obtener actualizaciones en vivo de la red p2p. (Se intentó conectar a quantumd de {{host}}:{{port}} y falló.)","Complete":"Completado","Confirmations":"Confirmaciones","Copied":"CopiedTest","Current Sync Status":"Actual Estado de Sincronización","Details":"Detalles","Difficulty":"Dificultad","Double spent attempt detected. From tx:":"Intento de doble gasto detectado. De la transacción:","Error!":"¡Error!","Fee":"Tasa","Final Balance":"Balance Final","Height":"Altura","Included in Block":"Incluido en el Bloque","Incoherence in levelDB detected:":"Detectada una incoherencia en levelDB:","Info Errors":"Errores de Información","Initial Block Chain Height":"Altura de la Cadena en Bloque Inicial","Input unconfirmed":"Entrada sin confirmar","Insight is an <a href=\"https://insight.is/\" target=\"_blank\">open-source Quantum blockchain explorer</a> with complete REST and websocket APIs that can be used for writing web wallets and other apps that need more advanced blockchain queries than provided by quantumd RPC. Check out the <a href=\"https://github.com/bitpay/insight-ui\" target=\"_blank\" class=\"ng-scope\">source code</a>.":"Insight  es un <a href=\"https://insight.is/\" target=\"_blank\">explorador de bloques de Quantum open-source </a>con un complete conjunto de REST y APIs de websockets que pueden ser usadas para escribir monederos de Quantums y otras aplicaciones que requieran consultar in explorador de bloques.  Obtén el código en <a href=\"https://github.com/bitpay/insight-ui\" target=\"_blank\" class=\"ng-scope\">el repositorio abierto de Github</a>.","Insight is still in development, so be sure to report any bugs and provide feedback for improvement at our <a href=\"https://github.com/bitpay/insight-ui/issues\" target=\"_blank\" class=\"ng-scope\">github issue tracker</a>.":"Insight esta en desarrollo aún, por ello agradecemos que nos reporten errores o sugerencias para mejorar el software. <a href=\"https://github.com/bitpay/insight-ui/issues\" target=\"_blank\" class=\"ng-scope\">Github issue tracker</a>.","Loading Transaction Details":"Cargando Detalles de la Transacción","Loading...":"Cargando...","mined":"minado","Mined by":"Minado por","Mined Time":"Hora de Minado","Mining Difficulty":"Dificultad de Minado","No blocks yet.":"No hay bloques aún.","No Inputs (Newly Generated Coins)":"Sin Entradas (Monedas Recién Generadas)","No matching records found!":"¡No se encontraron registros coincidentes!","Number Of Transactions":"Número de Transacciones","Powered  by:":"Funciona con:","Previous Block":"Bloque Anterior","Received Time":"Hora de Recibido","Redirecting...":"Redireccionando...","Search for block, transaction or address":"Buscar bloques, transacciones o direcciones","See all blocks":"Ver todos los bloques","Size":"Tamaño","Size (bytes)":"Tamaño (bytes)","Start Date":"Fecha de Inicio","Status":"Estado","Summary":"Resumen","Sync Progress":"Proceso de Sincronización","Sync Status":"Estado de Sincronización","Sync Type":"Tipo de Sincronización","Synced Blocks":"Bloques Sincornizados","There are no transactions involving this address.":"No hay transacciones para esta dirección.","Time Offset":"Desplazamiento de hora","Timestamp":"Fecha y hora","Total Received":"Total Recibido","Total Sent":"Total Enviado","Transaction":"Transacción","Transactions":"Transacciones","Type":"Tipo","Unconfirmed Transaction!":"¡Transacción sin confirmar!","Value Out:":"Valor de Salida:","Version":"Versión","github issue tracker":"Github issue tracker","Insight is an":"Insight  es un","open-source Quantum blockchain explorer":"explorador de bloques de Quantum open-source","source code":"el repositorio abierto de Github","Age":"Edad","Bytes Serialized":"Bytes Serializados","Conn":"Con","Current Blockchain Tip (insight)":"Actual Blockchain Tip (insight)","Finish Date":"Fecha Final","Hash Serialized":"Hash Serializado","Input":"Entrada","Last Block Hash (Quantumd)":"Último Bloque Hash (Quantumd)","Loading Address Information":"Cargando Información de la Dirección","Loading Block Information":"Cargando Información del Bloque","Loading Selected Date...":"Cargando Fecha Seleccionada...","Loading Transactions...":"Cargando Transacciones...","Next Block":"Próximo Bloque","Output":"Salida","Show input":"Mostrar entrada","Show less":"Ver menos","Show more":"Ver más","Skipped Blocks (previously synced)":"Bloques Saltados (previamente sincronizado)","Summary <small>confirmed</small>":"Resumen <small>confirmados</small>","Testnet":"Red de prueba","Today":"Hoy","Total Amount":"Cantidad Total","Transaction Output Set Information":"Información del Conjunto de Salida de la Transacción","Transaction Outputs":"Salidas de la Transacción","Unconfirmed Txs Balance":"Balance sin confirmar","Waiting for blocks...":"Esperando bloques...","Waiting for transactions...":"Esperando transacciones...","by date.":"por fecha.","first seen at":"Visto a","mined on:":"minado el:","Waiting for blocks":"Esperando bloques"});
    gettextCatalog.setStrings('ja', {"404 Page not found :(":"404 ページがみつかりません (´・ω・`)","About":"はじめに","Address":"アドレス","An error occured in the verification process.":"検証過程でエラーが発生しました。","An error occured:<br>{{error}}":"エラーが発生しました:<br>{{error}}","Application Status":"アプリケーションの状態","Bits":"Bits","Block":"ブロック","Block Reward":"ブロック報酬","BlockHash":"ブロックのハッシュ値","Blocks":"ブロック","Broadcast Raw Transaction":"生のトランザクションを配信","Can't connect to insight server. Attempting to reconnect...":"insight サーバに接続できません。再接続しています...","Can't connect to internet. Please, check your connection.":"インターネットに接続できません。コネクションを確認してください。","Can't connect to quantumd to get live updates from the p2p network. (Tried connecting to quantumd at {{host}}:{{port}} and failed.)":"P2Pネットワークからライブ情報を取得するためにquantumdへ接続することができませんでした。({{host}}:{{port}} への接続を試みましたが、失敗しました。)","Coinbase":"コインベース","Complete":"完了","Confirmations":"検証数","Current Sync Status":"現在の同期状況","Details":"詳細","Difficulty":"難易度","Double spent attempt detected. From tx:":"二重支払い攻撃をこのトランザクションから検知しました：","Error message:":"エラーメッセージ:","Error!":"エラー！","Fee":"手数料","Final Balance":"最終残高","Hash":"ハッシュ値","Height":"ブロック高","Included in Block":"取り込まれたブロック","Incoherence in levelDB detected:":"levelDBの破損を検知しました:","Info Errors":"エラー情報","Initial Block Chain Height":"起動時のブロック高","Input unconfirmed":"入力は未検証です","Insight is an <a href=\"https://insight.is/\" target=\"_blank\">open-source Quantum blockchain explorer</a> with complete REST and websocket APIs that can be used for writing web wallets and other apps that need more advanced blockchain queries than provided by quantumd RPC. Check out the <a href=\"https://github.com/bitpay/insight-ui\" target=\"_blank\" class=\"ng-scope\">source code</a>.":"Insight は、quantumd RPCの提供するものよりも詳細なブロックチェインへの問い合わせを必要とするウェブウォレットやその他のアプリを書くのに使える、完全なRESTおよびwebsocket APIを備えた <a href=\"http://live.insight.is/\" target=\"_blank\">オープンソースのビットコインブロックエクスプローラ</a> です。<a href=\"https://github.com/bitpay/insight-ui\" target=\"_blank\"> ソースコード</a> を確認.","Insight is still in development, so be sure to report any bugs and provide feedback for improvement at our <a href=\"https://github.com/bitpay/insight-ui/issues\" target=\"_blank\" class=\"ng-scope\">github issue tracker</a>.":"Insight は現在開発中です。 <a href=\"https://github.com/bitpay/insight/issues\" target=\"_blank\">githubのissueトラッカ </a>にてバグの報告や改善案の提案をお願いします。.","Loading Transaction Details":"トランザクションの詳細を読み込んでいます","Loading...":"ロード中...","Merkle Root":"Merkleルート","Message":"メッセージ","mined":"採掘された","Mined by":"採掘者","Mined Time":"採掘時刻","Mining Difficulty":"採掘難易度","No blocks yet.":"ブロックはありません。","No Inputs (Newly Generated Coins)":"入力なし (新しく生成されたコイン)","No matching records found!":"一致するレコードはありません！","Nonce":"Nonce","Number Of Transactions":"トランザクション数","Ooops!":"おぉっと！","Powered  by:":"Powered by:","Previous Block":"前のブロック","Quantum comes with a way of signing arbitrary messages.":"Quantumには任意のメッセージを署名する昨日が備わっています。","Raw transaction data":"トランザクションの生データ","Raw transaction data must be a valid hexadecimal string.":"生のトランザクションデータは有効な16進数でなければいけません。","Received Time":"受信時刻","Redirecting...":"リダイレクトしています...","scriptSig":"scriptSig","Search for block, transaction or address":"ブロック、トランザクション、アドレスを検索","See all blocks":"すべてのブロックをみる","Send transaction":"トランザクションを送信","Signature":"署名","Size":"サイズ","Size (bytes)":"サイズ (バイト)","Start Date":"開始日時","Status":"ステータス","Summary":"概要","Sync Progress":"同期の進捗状況","Sync Status":"同期ステータス","Sync Type":"同期タイプ","Synced Blocks":"同期されたブロック数","The message failed to verify.":"メッセージの検証に失敗しました。","The message is verifiably from {{verification.address}}.":"メッセージは{{verification.address}}により検証されました。","There are no transactions involving this address.":"このアドレスに対するトランザクションはありません。","This form can be used to verify that a message comes from\r\n        a specific Quantum address.":"このフォームでは、メッセージが特定のQuantumアドレスから来たかどうかを検証することができます。","Time Offset":"時間オフセット","Timestamp":"タイムスタンプ","Total Received":"総入金額","Total Sent":"総送金額","Transaction":"トランザクション","Transaction succesfully broadcast.<br>Transaction id: {{txid}}":"トランザクションの配信に成功しました。<br>トランザクションID: {{txid}}","Transactions":"トランザクション","Type":"タイプ","Unconfirmed Transaction!":"未検証のトランザクションです!","Value Out:":"出力値:","Verify":"検証","Verify signed message":"署名済みメッセージを検証","Version":"バージョン","Age":"生成後経過時間","Bytes Serialized":"シリアライズ後の容量 (バイト)","Conn":"接続数","Current Blockchain Tip (insight)":"現在のブロックチェインのTip (insight)","Finish Date":"終了日時","Hash Serialized":"シリアライズデータのハッシュ値","Input":"入力","Last Block Hash (Quantumd)":"直前のブロックのハッシュ値 (Quantumd)","Loading Address Information":"アドレス情報を読み込んでいます","Loading Block Information":"ブロック情報を読み込んでいます","Loading Selected Date...":"選択されたデータを読み込んでいます...","Loading Transactions...":"トランザクションを読み込んでいます...","Next Block":"次のブロック","Output":"出力","Show Transaction Output data":"トランザクションの出力データをみる","Show input":"入力を表示","Show less":"隠す","Show more":"表示する","Skipped Blocks (previously synced)":"スキップされたブロック (同期済み)","Summary <small>confirmed</small>":"サマリ <small>検証済み</small>","Testnet":"テストネット","Today":"今日","Total Amount":"Quantum総量","Transaction Output Set Information":"トランザクションの出力セット情報","Transaction Outputs":"トランザクションの出力","Unconfirmed Txs Balance":"未検証トランザクションの残高","Waiting for blocks...":"ブロックを待っています...","Waiting for transactions...":"トランザクションを待っています...","by date.":"日毎。","first seen at":"最初に発見された日時","mined on:":"採掘日時:","(Mainchain)":"(メインチェーン)","(Orphaned)":"(孤立したブロック)","Block #{{block.height}}":"ブロック #{{block.height}}","LockTime":"ロック時間","Output is spent":"出力は使用済みです","Output is unspent":"出力は未使用です","Scan":"スキャン","Show/Hide items details":"アイテムの詳細を表示または隠す","Waiting for blocks":"ブロックを待っています","by date. {{detail}} {{before}}":"日時順 {{detail}} {{before}}","{{tx.confirmations}} Confirmations":"{{tx.confirmations}} 検証","<span class=\"glyphicon glyphicon-warning-sign\"></span> (Orphaned)":"<span class=\"glyphicon glyphicon-warning-sign\"></span> (孤立したブロック)","<span class=\"glyphicon glyphicon-warning-sign\"></span> Incoherence in levelDB detected: {{vin.dbError}}":"<span class=\"glyphicon glyphicon-warning-sign\"></span> Incoherence in levelDB detected: {{vin.dbError}}","Waiting for blocks <span class=\"loader-gif\"></span>":"ブロックを待っています <span class=\"loader-gif\"></span>"});
/* jshint +W100 */
}]);
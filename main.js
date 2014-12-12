var start;
            var stop;
                        var TEN_SECOND = 10 * 1000;

                                    function start0() {
                                                    // start時刻を取得
                                                    start = new Date().getTime();
                                                    console.log(start);
                                                }

            function stop0() {
                            // stop時刻を取得
                            stop = new Date().getTime();
                            console.log(stop);

                            // 差を算出して、10秒とどうだ？
                            var diff = TEN_SECOND - (stop - start);

                            // 結果を表示
                            var e = document.getElementById('result');
                            if (diff == 0) {
                                                e.innerHTML = 'ぴったし！すごい！';
                                            } else if (diff > 0) {
                                                                e.innerHTML = (diff / 1000) + '秒、速い！';
                                                            } else {
                                                                                e.innerHTML = (diff / 1000) + '秒、遅い！';
                                                                            }

                        }
function reset() {
    document.getElementById('result').innerHTML = 'retry';

}

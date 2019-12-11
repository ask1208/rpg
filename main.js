"use strict";

const	FONT	= "48px monospace";	//	使用フォント

let		gFrame = 0;					//	内部カウンタ
let		gImgMap;					//	画像、マップ

//	タイマーイベント発生処理
function WmTimer()
{
	gFrame++;						//	内部カウンタを加算

	const	ca = document.getElementById( "main" );	//	mainキャンバス要素を取得
	const	g = ca.getContext( "2d" );				//	22D描写テキストを取得

	for( let y = 0; y < 16; y++ ){
		for( let x = 0; x < 16; x++ ){
			g.drawImage( gImgMap, x * 32, y * 32 );
		}
	}

	g.font = FONT;									//	文字フォントを設定
	g.fillText( "Hello World" + gFrame, gFrame / 10, 64 );
}


//	�u���E�U�N���C�x���g
window.onload = function()
{
	gImgMap = new Image();	gImgMap.src = "img/map.png";		//	マップ画像を読み込み
  setInterval( function(){ WmTimer() }, 33 );		//	33ms間隔でWmTimer()を呼び出す指示（30.3fps)
}



const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../framework//zokou");

    var coms = {};

    var mode = "public";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }





    



    cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

```~┏━━━━━━━━━━━━━━━━
♞ Creator:$
♞ Ping: $$$$
♞ Time:$$$$$ 
♞ Date: $$$$$$

I'M ABOUT TO $$$$$✫  

┏━✿ Owner Menu
┃♘ .Public
┃♘ .Self
┃♘ .Setbio
┃♘ .Vision
┃♘ .Del
┃♘ .Join
┃♘ .Leave
┃♘ .Getip
┃♘ .Unblock
┃♘ .Block
┃♘ .Setsudo
┃♘ .Delsudo
┃♘ .Getsudo
┃♘ .Listblock
┗━━━━━━━━━━━━━━━━━

┏━✿ Download Menu
┃♘ .Play <query>
┃♘ .igdl <link>
┃♘ .aio <link>
┃♘ .Fb <link>
┃♘ .Tiktok <link>
┃♘ .Tiktok2 <link>
┃♘ .Ttdl3 <link>
┃♘ .Mediafire <link>
┃♘ .Gitclone <link>
┃♘ .Ytmp4 <link>
┃♘ .Ytmp3 <link>
┃♘ .Yts <query>
┃♘ .Tiktokvid <query>
┃♘ .Xvideodl <link>
┗━━━━━━━━━━━━━━━━━

┏━✿ Arch Menu
┃♘ .Ping
┃♘ .Runtime
┃♘ .Bot
┃♘ .Ai
┃♘ .Chatgpt
┃♘ .Arch
┗━━━━━━━━━━━━━━━━━

┏━✿ Group Menu
┃♘ .Hidetag
┃♘ .Tagall
┃♘ .Tagadmin
┃♘ .Grouplink
┃♘ .Revoke
┃♘ .Add
┃♘ .Kick
┃♘ .Promote
┃♘ .Demote
┃♘ .Mute
┃♘ .Invite
┃♘ .Antilink
┃♘ .Unmute
┃♘ .Closetime
┃♘ .Opentime
┃♘ .Welcome
┗━━━━━━━━━━━━━━━━━

┏━✿ Convert Menu
┃♘ .sticker
┃♘ .toimg
┃♘ .tomp3
┃♘ .tovn
┃♘ .tovv
┃♘ .Write
┃♘ .tourl
┗━━━━━━━━━━━━━━━━━

┏━✿ search Menu
┃♘ .stickersearch <query>
┃♘ .xnxxsearch <query>
┃♘ .xvideosearch <query>
┃♘ .npmsearch <query>
┃♘ .githubsearch <query>
┗━━━━━━━━━━━━━━━━━

┏━✿ Logo Menu
┃♘ .writetext
┃♘ .advancedglow
┃♘ .typographytext
┃♘ .pixelglitch
┃♘ .neonglitch
┃♘ .flagtext
┃♘ .flag3dtext
┃♘ .deletingtext
┃♘ .blackpinkstyle
┃♘ .glowingtext
┃♘ .underwatertext
┃♘ .logomaker
┃♘ .cartoonstyle
┃♘ .papercutstyle
┃♘ .watercolortext
┃♘ .effectclouds
┃♘ .blackpinklogo
┃♘ .gradienttext
┃♘ .summerbeach
┃♘ .luxurygold
┃♘ .multicoloredneon
┃♘ .sandsummer
┃♘ .galaxywallpaper
┃♘ .1917style
┃♘ .makingneon
┃♘ .royaltext
┃♘ .freecreate
┃♘ .galaxystyle
┃♘ .lighteffects
┗━━━━━━━━━━━━━━━━━

┏━✿ Other Menu
┃♘ .getdevice
┃♘ .Owner
┃♘ .Creator
┃♘ .Ednut
┃♘ .Trackip
┃♘ .Report
┃♘ .readmore
┃♘ .Vv
┃♘ .Fancy
┃♘ .Charge
┃♘ .Support
┃♘ .Take
┃♘ .Getpp
┃♘ .Weather
┃♘ .Translate
┃♘ .Aiimage
┃♘ .Test
┗━━━━━━━━━━━━━━━━━
> GAGA BOTS~``` 
    
  
  var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-BOT*, déveloper Cod3uchiha" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});

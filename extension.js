(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "wygwvpt";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: 'basicBot',
        language: 'english',
        chatLink: 'https://rawgit.com/basicBot/source/master/lang/en.json',
        scriptLink: 'https://rawgit.com/basicBot/source/master/basicBot.js',
        roomLock: false, // Requires an extension to re-load the script
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        autoskip: true,
        smartSkip: true,
        cmdDeletion: false,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 10,
        historySkip: true,
        timeGuard: true,
        strictTimeGuard: true,
        maximumSongLength: 10,
        autodisable: false,
        commandCooldown: 45,
        usercommandsEnabled: true,
        thorCommand: false,
        thorCooldown: 10,
        skipPosition: 3,
        skipReasons: [
            ['theme', 'Не по теме трек, браток. '],
            ['op', 'Это ОПовский трек, вот так! '],
            ['history', 'Было уже недавно. '],
            ['mix', 'Миксы сейчас не время играть. '],
            ['sound', 'Шакальный звук у твоего трека. '],
            ['nsfw', 'Здесь культурные люди. '],
            ['unavailable', 'Тут некоторые из Камбоджи, у них трек не открывается. ']
        ],
        afkpositionCheck: 15,
        afkRankCheck: 'user',
        motdEnabled: false,
        motdInterval: 7,
        motd: 'ОП — хуй',
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: '!',
        blacklists: null
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);

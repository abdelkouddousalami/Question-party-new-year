function randomQuestionApp() {
    return {
      names: [
        'Mohammed Ayadi', 'ETTAOUSSI ILYAS', 'abdellatif guezadi', 'ayoub fetti',
        'MOHAMED ZOUHAIRI', 'Mohammed Latrach', 'Mohammed Karroumi', 'ASFOR DOUNIA', 'imane chadli', 
        'adil Ait Elhoucine', 'Meryem litim', 'Salahdine daha', 'ibrahim lmlilas', 'Anas Hammaoui', 
        'Karim Benkhira', 'Ayoub oumha', 'ismail baguni', 'MILOUDY Bouchra', 'Bassam Lahcen', 'Nizar Beriane', 
        'Chemlal youssef', 'younes imouga', 'hajar tebai', 'Omar FARAJI', 'Ayoub Jebbouri', 'Marouane Amanar'
      ],
      randomQuestion: '',
      randomName: '',
      
      generateRandomName() {
        if (this.names.length === 0 && this.questions.length === 0) {
          this.randomName = "No names left!";
          this.randomQuestion = "";
          return;
        }
       
        const name = this.names[Math.floor(Math.random() * this.names.length)];
        this.randomName = name;
        this.names = this.names.filter(item => item !== name);
  
        const questions = [
          'kon kenti animal chno tekhkter , w 3laach ',
          'kon kan world kaml neffs 3a9liya dyaleek , fen atkono wasslin',
          'world bla deriyat , ola bla drari ?',
          'ila kenti staff nhar wa7ed , chno ghadir ?',
          '1337 , zone01 , youcode ? we 3laach ',
          'chkon akter wa7ed calme f campus ?',
          'ila kenti t9der tkhtar soft skills dyal chi wa7ed f campus chkon atkhtar ?',
          'chkon akter wa7ed ma3ndo maydar f campus ? we3lach ',
          ' ila kenti bent / deri nhar wa7ed chno dir ?',
          'achnahowa balance dyalk db en general ',
          'chno takel : left ola denjal ?',
          'chno concept f IT li baghi t7eeyed',
          'ila 3tawek chance tbedl l calss tbedlha ola la ',
          'rate team BDE mn 0-10',
          'chi game ma3eendkch m3aaha ',
          'kon kenti admin dyal leblad lnhar wa7ed chno ghadir ',
          'chi hwayeeej jawek 3jbook f Nador ',
          'wach nta ded wla m3a lmoudewana ',
          'chno howa salaire li y9der y3eychek nadi ',
          '3lach nta dayeer b7al haka ?',
          'chkon a9reb wa7ed lik f campus ? 3tini chi haja kat3rfoha gha nta weyaah ',
          'mdina baghi t3iiich fiha ?',
          'khtar 5 dyal shabek f youcode , ylh db khtar wa7ed ',
          '3endek chi mewhiba seriyaa , weriiha lina',
          'chno aghrab haja l9itiha hna f nador',
          'chno akteer haja katekrah derha f sbaah ',
          'tchof lmosta9beel ola terje3 l maady',
          'kon kan 3endeek mesba7 alae eddine chno awel oumnia ghadi tekhtar '
        
        ];
  
        this.randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      }
    };
  }
  
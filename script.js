'use strict'
// локации

let FirstUsers = {
    Александр: {
     desserts: [],
     pass: 'Александр',
     meat: ['meat8', 'meat2'],
     salads: [],
     recipies: ['meat8', 'meat2']
    },
    Алексей: {
     desserts: ['dessert10', 'dessert7', 'dessert5', 'dessert3'],
     pass: 'Алексей',
     meat: ['meat4', 'meat8', 'meat2'],
     salads: ['salad1', 'salad4'],
     recipies: ['salad1', 'salad4', 'meat4', 'meat8', 'meat2', 'dessert10', 'dessert7', 'dessert5', 'dessert3']
    },
    Алла: {
     desserts: ['dessert4'],
     pass: 'Алла',
     meat: ['meat2'],
     salads: ['salad1'],
     recipies: ['salad1', 'meat2', 'dessert4']
    },
    Аня: {
     desserts: ['dessert4'],
     pass: 'Аня',
     meat: ['meat2'],
     salads: ['salad1'],
     recipies: ['salad1', 'meat2', 'dessert4']
    },
    Дарья: {
     desserts: ['dessert9', 'dessert6', 'dessert4', 'dessert2'],
     pass: 'Дарья',
     meat: ['meat2', 'meat4', 'meat9'],
     salads: ['salad7', 'salad5', 'salad2'],
     recipies: ['salad7', 'salad5', 'salad2', 'meat2', 'meat4', 'meat9', 'dessert9', 'dessert6', 'dessert4', 'dessert2']
    },
    Екатерина: {
     desserts: ['dessert6', 'dessert7', 'dessert5', 'dessert3', 'dessert1'],
     pass: 'Екатерина',
     meat: ['meat5', 'meat8', 'meat4'],
     salads: ['salad7', 'salad6', 'salad4', 'salad1'],
     recipies: ['salad7', 'salad6', 'salad4', 'salad1', 'meat5', 'meat8', 'meat4', 'dessert6', 'dessert7', 'dessert5', 'dessert3', 'dessert1']
    },
    Женя: {
     desserts: ['dessert8', 'dessert7', 'dessert5', 'dessert4', 'dessert1'],
     pass: 'Женя',
     meat: ['meat8', 'meat5', 'meat1'],
     salads: ['salad8', 'salad6', 'salad3', 'salad1'],
     recipies: ['dessert8', 'dessert7', 'dessert5', 'dessert4', 'dessert1', 'meat8', 'meat5', 'meat1', 'salad8', 'salad6', 'salad3', 'salad1']
    },
    Инна: {
     desserts: ['dessert1', 'dessert7', 'dessert9'],
     pass: 'Инна',
     meat: ['meat4'],
     salads: ['salad3', 'salad8', 'salad7'],
     recipies: ['salad3', 'salad8', 'salad7', 'meat4', 'dessert1', 'dessert7', 'dessert9']
    },
    Светлана: {
     desserts: ['dessert1', 'dessert4', 'dessert3', 'dessert6'],
     pass: 'Светлана',
     meat: ['meat2', 'meat4', 'meat8'],
     salads: ['salad5', 'salad1', 'salad8'],
     recipies: ['salad5', 'salad1', 'salad8', 'meat2', 'meat4', 'meat8', 'dessert1', 'dessert4', 'dessert3', 'dessert6']
    },
    София: {
     desserts: ['dessert4'],
     pass: 'София',
     meat: ['meat2'],
     salads: ['salad1'],
     recipies: ['salad1', 'meat2', 'dessert4']
    }
}
let FirstComments = {
    '#dessert1': ['<div class="comment"><p>Светлана</p><div class="commentText"><p>Добрый  день. Почему появляются большие трещины на безе??</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden=""></div></div></div>','<div class="comment"><p>Инна</p><div class="commentText"><p>Спасибо за рецепт,  этот торт просто восторг!</p><div class="redact" hidden=""><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden=""></div></div></div>', '<div class="comment"><p>Женя</p><div class="commentText"><p>Спасибо за рецепт и за то, что развеяли мои сомнения-терзания ))). Логически понимаю, что середина меренги должна быть нежной, как суфле, а множество рецептов встречаю с высушенной меренгой. И как её есть? С помощью пилы? )))))Очень ценю Ваше мнение и знания. На выходных будет "Павлова"!Благодарю! ))</p><div class="redact" hidden=""><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden=""></div></div></div>','<div class="comment"><p>Екатерина</p><div class="commentText"><p>Моя Первая Павлова! На вкус очень нежная и приятная. По оформлению, при перекладывании с коврика на блюдо треснули стенки, поэтому пришлось маскировать. На вкусе не отразилось. Спасибо большое</p><div class="redact" hidden=""><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden=""></div></div></div>'],
    '#dessert2': ['<div class="comment"><p>Дарья</p><div class="commentText"><p>сногсшибательная красота! а насадка какого диаметра или какой номер? Спасибо!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Добрый день,уже хочется попробовать😊 а взбитым ганашем можно выровнять торт? Или лучше ганаш на сливочном масле?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#dessert3': ['<div class="comment"><p>Светлана</p><div class="commentText"><p>Спасибо вам за то, что вы делаете доступным и понятным для всех кондитерской искусство! это так отличается от возрастных тетушек, продающих классические рецепты за тысячи рублей, как будто они вселенную открывают)</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Алексей</p><div class="commentText"><p>Красота-не иначе!Андрей, Ваше мнение о кенвуд не изменилось относительно планетарного миксера? Выбираю между борк, китчен и кенвуд. Буду благодарна за помощь🙏</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Андрей, очередное огромное Вам спасибо за максимально подробный, понятный и вкусный рецепт! Ваш сайт просто сокровище, начиная от самых первых панкейков и до сложнейших профессиональных десертов! С огромным восторгом и благодарностью читаю каждый Ваш новый рецепт!))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#dessert4': ['<div class="comment"><p>Светлана</p><div class="commentText"><p>Спасибо вам за то, что вы делаете доступным и понятным для всех кондитерской искусство! это так отличается от возрастных тетушек, продающих классические рецепты за тысячи рублей, как будто они вселенную открывают)</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Алексей</p><div class="commentText"><p>Красота-не иначе!Андрей, Ваше мнение о кенвуд не изменилось относительно планетарного миксера? Выбираю между борк, китчен и кенвуд. Буду благодарна за помощь🙏</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Андрей, очередное огромное Вам спасибо за максимально подробный, понятный и вкусный рецепт! Ваш сайт просто сокровище, начиная от самых первых панкейков и до сложнейших профессиональных десертов! С огромным восторгом и благодарностью читаю каждый Ваш новый рецепт!))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#dessert4': ['<div class="comment"><p>София</p><div class="commentText"><p>Добрый день, на форму 26см  в каких пропорциях лучше брать ингредиенты?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Аня</p><div class="commentText"><p>Андрей, здравствуйте! Можно ли заменить сахар мусковадо, если да, то на какой?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Алла</p><div class="commentText"><p>Потрясающий рецепт и великолепный торт!!! Чем можно заменить пралине фундука или приготовить самостоятельно...🙈Благодарю за ваши рецепты!!!😘🤩</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Светлана</p><div class="commentText"><p>Обязательно приготовлю! А нужно замораживать или можно просто поставить в холодильник на ночь чтобы застыл?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Женя</p><div class="commentText"><p>Добрый день, на форму 26см  в каких пропорциях лучше брать ингредиенты?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Дарья</p><div class="commentText"><p>Если заменить пралине фундука на миндальное  - проиграю во вкусе?И можно ли использовать взбитый ганаш (сильно если взбить) для бисквитного торта вместо крем чиза?Спасибо</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#dessert5': ['<div class="comment"><p>Алексей</p><div class="commentText"><p>Здравствуйте!Как всегда замечательный рецепт.Скажите, пожалуйста, если заменить рисовый уксус, указанный в рецепте, на другой, то какое % содержание уксуса должно быть (при прочих равных условиях)?Заранее благодарю за ответ.Удачи!!!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"', '<div class="comment"><p>Женя</p><div class="commentText"><p>Спасибо большое! Самые вкусные брауни! Текстура бархатистая, а вкус МЕГА шоколадный!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Здравствуйте! Выглядит очень схоже с роки роуд. А будет ли роки роуд рецепт в вашем блоге?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#dessert6': ['<div class="comment"><p>Светлана</p><div class="commentText"><p>Спасибо большое за рецепт. А можно заменить карамельный шоколад на другой, например на шоколад от Callebaut? Или вкусы сильно отличается?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Дарья</p><div class="commentText"><p>Здравствуйте. А какой срок хранения таких трюфелей? В холодильнике?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Восхитительно!Не перестаю удивляться точности рецептуры.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#dessert7': ['<div class="comment">  <p>Инна</p>  <div class="commentText"><p>Подскажите , пожалуйста, яйца в жидком центе успевают пройти тепловую обработку или лучше взять пастеризованные?</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Алексей</p>  <div class="commentText"><p>Однажды пробовал фондан с козьим сыром внутри. В добавок к нему шло лавандовое мороженое. Потрясающее сочетание!</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Женя</p>  <div class="commentText"><p>Андрей, добрый день. Какие могут быть варианты кроме колец для выпекания, в чем еще можно?</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Екатерина</p>  <div class="commentText"><p>Получилось огонь! Спасибо! Андрей, а сколько тесто может "ждать"? И где его лучше хранить? В холодильнике или при комнатной температуре?</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>'],
    '#dessert8': ['<div class="comment">  <p>Женя</p>  <div class="commentText"><p>Здравствуйте Андрей! Подскажите какой категории яйца используете?</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Екатерина</p>  <div class="commentText"><p>Это пирожное-песня! Делается на раз-два, никаких прерываний процесса и стабилизации, пока один слой в морозилке, подготовливается второй, заливается-запекается, ставится в мороз и готовится следующий... обожаю такой процесс...в этом пирожном сошлось все: время для изготовления, относительная простота, минимум приборов и форм и  прекрасный вкус.. и  этим этот десерт и ценен. Спасибо</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>'],
    '#dessert9': ['<div class="comment">  <p>Инна</p>  <div class="commentText"><p>Здравствуйте, уже несколько лет пеку торты вашим рецептам. Полное доверие. Можно вас попросить написать рецепт крема из сливок для торта и капов? Всегда было интересно, как это делают в кондитерских, но сливки настолько нежные, что боюсь испортить. А с сыром крем достаточно плотный, иногда хочется что-то более воздушное. Спасибо</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Дарья</p>  <div class="commentText"><p>Андрей, здравствуйте! А можно заменить чем-нибудь кефир... и яйца. И какао-порошок на кэроб. И муку, а то аллергия на глютен... И краситель сделать из свеклы, а то вредно.. И сахар, потому, что 🍑 толстая... Простите, не удержалась😂</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Екатерина</p>  <div class="commentText"><p>Спасибо шеф за столь прекрасный рецепт, обожаю красный бархат 💞 сегодня не успел остыть, как гости уже его поглотили😂 даже украсить не успела красиво</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>'],
    '#dessert10': ['<div class="comment">  <p>Алексей</p>  <div class="commentText"><p>Боже, какая прелесть из яблок может быть!! Шарлотка забыта навсегда!</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Дарья</p>  <div class="commentText"><p>Нравится идея с грушей, может карамель тогда тоже чем-нибудь заменить? Так как груша кислинку не дает..</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Екатерина</p>  <div class="commentText"><p>Почти 2 года читаю ваш блог, ваши рецепты самые качественные и понятные, даже иностранцам. Пишу из Белграда, Сербии. Спасибо огромное!</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>'],
    '#meat1': ['<div class="comment"><p>Женя</p><div class="commentText"><p>Первый раз мясо получилось идеальным, второй и третий - сухое (после понижения Т до 120 выпекаю 1,5-2 часа). Андрей, подскажите, пожалуйста, что может быть не так: слишком большой кусок, неплотно завернутая фольга...?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Андрей, спасибо вам огромное за рецепт соуса! У нас в ресторане американской кухни подают ребра с этим соусом и я все время пыталась понять из чего же он делается:) Мне даже казалось, что там грушевое варенье, частички лука в соусе казались грушей. Долгое время я своими путями пыталась изобрести этот соус, потом все таки нашла рецепт, но получилось не совсем то. А вот по вашему рецепту вышло то, что надо. Соус, правда, еще варится, но я уже вижу и чувствую на вкус, что это ОН!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#meat2': ['<div class="comment"><p>София</p><div class="commentText"><p>Наконец-то что мясное) прям ждала что то не сладкое от Вас и Вы превзошли ожидания) срочно ставлю тесто для булок!)</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>',  '<div class="comment"><p>Алла</p><div class="commentText"><p>Действительно, безумные бургеры! Муж в восторге! Спасибо за рецепт, Андрей! Булочки делала тоже ваши, чудесные ))))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Александр</p><div class="commentText"><p>Просто  супер! Главное, чтобы это все в рот уместилось :))) Спасибо, Энди!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment">  <p>Алексей</p>  <div class="commentText"><p>Андрей, рецепт фантастический и простой одновременно. Пока читал - слюнки текли. Ну вот и дошли руки, любимая вернулась голодная с тренировки, говорит слона бы съела. Ну я и приготовил) ели всей семьей)</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Дарья</p>  <div class="commentText"><p>с каким же удовольствием он был съеден)) Очередное " спасибо" шефу)</p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>', '<div class="comment">  <p>Екатерина</p>  <div class="commentText"><p>Вышло безумно вкусно и здорово! Который раз готовлю по Вашим рецептам - и всегда хорошо! </p><div class="redact"> <img src="images/delete.png" class="imgDelete" alt="delete"> <img src="images/edit.png" class="imgEdit" alt="edit"> <img src="images/ok.png" class="imgOk" alt="ok" hidden></div>  </div>  </div>'],
    '#meat3': ['<div class="comment"><p>Екатерина</p><div class="commentText"><p>Шикарнейше! Очень вкусно и сочно. Спасибо! Только сельдерей не нашла, следующий раз обязательно сделаю с сельдереем.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#meat4': ['<div class="comment"><p>Светлана</p><div class="commentText"><p>В рецепте Гая Фиери рекомендуется снять кожу с курицы, там где будет бекон. Андрей и начинающие гурманы, ваше мнение? 😊 всех с наступающим!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Инна</p><div class="commentText"><p>Пробовала обжаривать мясо на хлопковом масле - получается чудесная румяная корочка))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Алексей</p><div class="commentText"><p>Все будет с курочкой в порядке, если с вечера начинить, а в духовку на следующий день?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Дарья</p><div class="commentText"><p>Добрый день, Андрей! а можно вместо бекона хамон использовать? не будет очень сухой? а то привезли из Испании много))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Спасибо за рецепт!!! Гости сказали было вкусно!!!фото сделать не успели!(</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#meat5': ['<div class="comment"><p>Женя</p><div class="commentText"><p>Андрей! Спасибо огромное за такой рецепт, это так просто и так вкусно!!!Вы гений))))Обожаю готовить</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Очень вкусно получилось. Быстро и неизбито.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#meat6': [],
    '#meat7': ['<div class="comment"><p>Дарья</p><div class="commentText"><p>Спасибо большое за рецепт! Мы с мужем в восторге)))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Великолепно  получилось, даже у меня, благодарю!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#meat8': ['<div class="comment"><p>Александр</p><div class="commentText"><p>Андрей, ниже был комментарий про "скукоживание" мяса во время жарки. Вот у меня так же история. Куски были тонкие, меньше сантиметра. Во время процесса обжаривания концы кусков поднялись вверх, образуя форму чаши, мясо стало жариться неравномерно. Как этого избежать? Заранее благодарю.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Светлана</p><div class="commentText"><p>Подскажите, Андрей, а ничего, что мясо остывает?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Алексей</p><div class="commentText"><p>Всем привет !Приготовил этот соус !Это просто божественно .я делаю мясо по-своему и вместе это пища богов))))))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Женя</p><div class="commentText"><p>Доброй ночи! Искала идеальный морковный торт, нашла этот сайт, и даже не поняла как оказалась на кухне и начала готовить соус😃 Мясо изумительное, благо было куплено на шашлык и лежало в холодильнике, соус это бомба! Муж в шоке, что я ела ночью и он тоже)) спасибо вам!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Скажите, если я хочу мясо well done, то надо дать ему "отдохнуть" до духовки или после?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#meat9': ['<div class="comment"><p>Дарья</p><div class="commentText"><p>Здравствуйте, Андрей. Ни в коем случае не хочу вас обидеть или как-то задеть, просто хотелось бы исправить малюсенькую ошибку. «Гунбао цзидин» и «Гунбао жоудин» - это два разных блюда. Да, первое блюдо "宫保鸡丁" (gōngbǎo jīdīng) состоит из курицы, нарезанной мелкими кусочками, с арахисом и чили. 鸡丁 - кусочки курицы. Но второе блюдо состоит из свинины. То есть "宫保肉丁" (gōng bǎo ròu dīng) уже будут кусочки свинины с красным перцем и арахисом. Правда последних два иероглифа означают просто нарезанное мелкими кубиками мясо. Кстати, тоже очень вкусное китайское блюдо. Еще раз прошу прощения, если обидела. У вас очень хороший блог, очень нравится, что вы всё подробно описываете и, самое главное, сопровождаете фотографиями. Успехов вам и еще больше потрясающих и необычных идей и вдохновения.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Ох, какой же роскошный рецепт! Заприметила давно, очень уж вкусно написано, но всё не могла найти приличное кунжутное масло, так что пришлось отложить. И вот, неделю назад нашла. Еще на этапе маринования у меня потекли слюньки, а потом (не понимаю, как такое произошло, всё как в тумане) готовила такую курочку всю неделю на ужин. Это просто откровение, а не рецепт, мясо - нежнейшее, а потрясающий вкус блюда не перебивается даже сильной остротой.Спасибо от всей души и за блог в целом, и за гунбао в частности.К слову, это второй отечественный проект о еде, который можно назвать вдохновляющим и вкусным на все 100%.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#salad1': ['<div class="comment"><p>София</p><div class="commentText"><p>Отличная идея!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Аня</p><div class="commentText"><p>Хочется сюда еще обжаренный бекон добавить</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Алла</p><div class="commentText"><p>Карамелизованный лук и горелый лук - это всё-таки разные вещи...</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Светлана</p><div class="commentText"><p>Очень вкусно. Спасибо за рецепт, Андрей</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Алексей</p><div class="commentText"><p>Здравствуйте, можно ли использовать обычную фритюрницу?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Женя</p><div class="commentText"><p>Андрей, здравствуйте! Подскажите, чем можно заменять лук в блюдах? Муж его не ест, совсем, ни в каком виде, никак не могу придумать аналог</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Добрый день! Салат получился очень вкусным, даже не ожидала такого результата. Но, очень долго жарилась во фритюре тыква, минут 30. Хочется ускорить процесс, т.к. салат взяла на вооружение.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#salad2': ['<div class="comment"><p>Дарья</p><div class="commentText"><p>OMG!) Я только на днях наткнулась на ваш блог!) Моя жизнь никогда не будет прежней!) Не знаю как выразить свою благодарность за столь изумительные рецепты, фото, ответы на вопросы и прочие чудеса что тут творятся!) Вы просто волшебник!)</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Вот так это получилось у меня: Легкий и вкусный салат для тех, кто следит за фигурой.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#salad3': ['<div class="comment"><p>Инна</p><div class="commentText"><p>Я тоже безумно люблю этот салат-закуску! Очень много экспериментов с ним у меня было. Не знаю уместно или нет, возможно Вы пробовали в таком исполнении, мне очень нравится с рукколой вместо базилика, она дает пикантную горчинку, а заправляю я всю эту красоту соус песто и оливковое масло, а для большей пикантности еще добавляют соус из бальзамического уксуса и красиво и вкус необычный!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Женя</p><div class="commentText"><p>Андрей, подскажите пжл, где можно купить вкусный сыр моцарелла? Может вы знаете марку или магазины?))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Здравствуйте, Андрей!Наконец, пришло время и для знаменитой итальянской закуски - капрезе!В собственном исполнении - ну ооочень вкусно))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#salad4': ['<div class="comment"><p>Алексей</p><div class="commentText"><p>Можно ли чем-то заменить устричный соус?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Андрей, здравствуйте, обожаю ваш сайт, но если бы писали еще, на сколько порций выходит, было бы еще лучше)</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#salad5': ['<div class="comment"><p>Светлана</p><div class="commentText"><p>Андрей, на сколько порций это салат хватает? на новый год хочу сделать.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Дарья</p><div class="commentText"><p>Салатик изумительный! Андрей, спасибо за рецепт.</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>А если такой эксперимент, манго заменить апельсином? По моему тоже должно быть не плохо, как думаете?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#salad6': ['<div class="comment"><p>Женя</p><div class="commentText"><p>Очень необычный вкус,  но мне понравилось</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Андрей, можно ли заменить креветки на филе куриных грудок, а устричный соус заменить бальзамиком?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#salad7': ['<div class="comment"><p>Инна</p><div class="commentText"><p>Спасибо за рецепт, очень просто и вкусно👍</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Дарья</p><div class="commentText"><p>А горчица в рецепте самая обычная или дижонская?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Можно руколу заменить романо?</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>'],
    '#salad8': ['<div class="comment"><p>Светлана</p><div class="commentText"><p>жалко что сейчас свежий шпинат не продается, только замороженный((</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Инна</p><div class="commentText"><p>Спасибо за рецепт))очень вкусный салат)))</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Женя</p><div class="commentText"><p>Обалденно вкусно =) Вообще стала готовить все только с Вашего сайта и получается отменно</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>', '<div class="comment"><p>Екатерина</p><div class="commentText"><p>Большое спасибо за рецепт! Вкус удивил и порадовал! Теперь будет моим любимым оригинальным салатиком!</p><div class="redact"><img src="images/delete.png" class="imgDelete" alt="delete"><img src="images/edit.png" class="imgEdit" alt="edit"><img src="images/ok.png" class="imgOk" alt="ok" hidden></div></div></div>']
}
// localstorage

let currentUser = localStorage.getItem('active')
let users = JSON.parse(localStorage.getItem('users')) || {}
let comments = JSON.parse(localStorage.getItem('comments')) || {}

if(!comments['#dessert1']){
    addAllCommentsAndUsers()
}

    
const login = document.querySelector('#login') 
const mainMenu = document.querySelector('#mainMenu') 
const desserts = document.querySelector('#desserts') 
const meat = document.querySelector('#meat') 
const salads = document.querySelector('#salads') 
const allRecipies = document.querySelectorAll('.reci') 
const myBook = document.querySelector('#myBook')
const mydesserts = document.querySelector('#mydesserts')
const mysalads = document.querySelector('#mysalads')
const mymeat = document.querySelector('#mymeat')

let locations = []
locations.push(login, mainMenu, myBook, desserts, meat, mysalads, mydesserts, mymeat, salads)
allRecipies.forEach(r => locations.push(r))
locations.forEach(location => location.hidden = true)

// кнопки и формы
const formLogin = document.querySelector('.formlogin') 
const loginInput = document.querySelector('#inputLogin') 
const registration = formLogin.querySelector('a')
const passwordInput = document.querySelector('#inputPassword') 
const wrongPass = document.querySelector('.wrongPass')
const account = document.querySelector('#account') 
const myRecipies = document.querySelector('#myRecipies')

let addRecipe = document.querySelectorAll('.addRecipe')
let deleteRecipe = document.querySelectorAll('.deleteRecipe')
addRecipe.forEach(el => el.addEventListener('click', addDelete))
deleteRecipe.forEach(el => el.addEventListener('click', addDelete))

let imgOk = document.querySelectorAll('.imgOk')
let imgEdit = document.querySelectorAll('.imgEdit')





// comments
const FormsComment = document.querySelectorAll('.addComment')

//регистрация и вход
registration.addEventListener('click', function(e){
e.preventDefault()
registration.innerHTML === 'Регистрация' ? registration.innerHTML = 'Вход' : registration.innerHTML = 'Регистрация'
let submitButton = formLogin.querySelector('button')

submitButton.innerHTML === 'Зарегистрироваться' ? submitButton.innerHTML = 'Войти' :submitButton.innerHTML = 'Зарегистрироваться'
wrongPass.hidden = true



})

// вход в личный кабинет 
formLogin.addEventListener('submit', function (e) {
e.preventDefault()
currentUser = loginInput.value
localStorage.setItem('active', loginInput.value)
// localStorage.setItem('users', loginInput.value)

if (!loginInput.value || !passwordInput.value) {
 wrongPass.innerHTML = 'Необходимо ввести все данные пользователя'
 wrongPass.hidden = false
} else {
 let submitButton = formLogin.querySelector('button')
 if(submitButton.innerHTML === 'Войти') {
 if(!users[currentUser]){
 wrongPass.innerHTML = 'Такого пользователя нет в базе.'
 wrongPass.hidden = false
 } else {
 if (users[currentUser].pass !== passwordInput.value){
  passwordInput.value = ''
  wrongPass.innerHTML = 'Пароль введен неверно. Повторите попытку.'
  wrongPass.hidden = false
 } else {
  location.hash = '#mainMenu'
  registration.innerHTML = 'Регистрация'
  submitButton.innerHTML = 'Войти'
    changeMy ('desserts')
    changeMy ('salads')
    changeMy ('meat')
 }
 }
 } else { 
 if(users[currentUser]) {
 wrongPass.innerHTML = 'Выбранное Вами имя пользователя уже занято.'
 wrongPass.hidden = false
 } else {
 users[currentUser] = {}
 users[currentUser].pass = passwordInput.value
 users[currentUser].desserts = []
 users[currentUser].salads = []
 users[currentUser].meat = []
 users[currentUser].recipies = []
 location.hash = '#mainMenu'
 registration.innerHTML = 'Регистрация'
 submitButton.innerHTML = 'Войти'
 }

 }

}
localStorage.setItem('users', JSON.stringify(users))
myMenu()

})


//переход на другую страницу
function locationChanged() {
locations.forEach(el => el.hidden = true)

if (location.hash && location.hash !== '#login') {
 let Inner = document.querySelector(`${location.hash}`).querySelector('.allComments')
 if (Inner){
 refreshComments()
 }
 deleteComment()
 menu()
 if(users[currentUser]) {
 document.querySelector(location.hash).hidden = false
 account.hidden = false
 myRecipies.hidden = false
 wrongPass.hidden = true
 doYouHaveThisOne()
 } else {
 location.hash = '#login'
 }
} else {
 loginInput.value = passwordInput.value = ''
 account.hidden = true
 myRecipies.hidden = true
 localStorage.removeItem('active')
 login.hidden = false
}
window.scrollTo(0, -Infinity)


}

// удаление и добавление нового блюда
function addDelete (e) {
let Name = location.hash.slice(1)
let type 
Name.slice(0,5) === 'salad' ? type = 'salads' :
Name.slice(0,7) === 'dessert' ? type = 'desserts' : type = 'meat'
if(e.target.className === 'addRecipe') {
 users[currentUser][type].unshift(Name)
 users[currentUser].recipies.unshift(Name)
 e.target.hidden = true
 e.target.parentElement.querySelector('.deleteRecipe').hidden = false
 changeMy (type)
 myMenu()
} else {
 let i = users[currentUser][type].indexOf(Name)
 let ind = users[currentUser].recipies.indexOf(Name)
 users[currentUser][type].splice(i, 1)
 users[currentUser].recipies.splice(ind, 1)
 e.target.hidden = true
 e.target.parentElement.querySelector('.addRecipe').hidden = false
 changeMy (type)
 myMenu()
}
localStorage.setItem('users', JSON.stringify(users))
}
//отрисовка разделов общего меню
function menu(){
if (location.hash === '#desserts' || location.hash === '#meat' ||location.hash === '#salads'){
 let container = document.querySelector(`${location.hash} .menu-container`)
 container.innerHTML = ''
 let AllOfThese = document.querySelectorAll(`.reci[id^="${location.hash.slice(1, location.hash.length-1)}"]`)

 AllOfThese.forEach(recipe => {
 let card = document.createElement('a')
 card.href = `#${recipe.id}`
 card.innerHTML = `<div class="card">
 <img src="images/${recipe.id}-main.jpg" alt="${recipe.id}">
 <h4>${recipe.querySelector('h1').innerHTML}</h4>
 </div>`
 container.append(card)
 })
}

}
//отрисовка всего личного меню
function myMenu () {
if (users[currentUser]){
 let cards = myBook.querySelectorAll('a')
 let images = []
 cards.forEach(card => {
 let image = card.querySelector('img')
 card.hidden = true
 images.push(image)
 })
 let data = [users[currentUser].desserts[0], users[currentUser].meat[0], users[currentUser].salads[0]]
 data.forEach(d => {
 let i = data.indexOf(d)
 if(d) {
 images[i].src = `images/${d}-main.jpg`
 cards[i].hidden = false
 }
 })
}
}
myMenu()
 
// отрисовка разделов личного меню
function changeMy (a) {
let my = document.querySelector(`#my${a} .menu-container`)
my.innerHTML = ''

if (users[currentUser][a][0]) {
 let current = users[currentUser][a]
 current.forEach(el => {
 let string = document.createElement('a')
 string.innerHTML = `
 <div class="card">
 <img src="images/${el}-main.jpg" alt="${el}">
 <h4>${document.querySelector(`#${el} h1`).innerHTML}</h4>
 </div>`
 string.href = `#${el}`
 my.append(string)
 })
} 
}
if (users[currentUser]) {
changeMy ('desserts')
changeMy ('salads')
changeMy ('meat')
}

//проверка или рецепт есть у пользователя (кнопка добавить/удалить)
function doYouHaveThisOne () {
let recipeName = location.hash.slice(1)
if (users[currentUser].recipies.indexOf(recipeName) === -1){
 addRecipe.forEach(el => el.hidden = false)
 deleteRecipe.forEach(el => el.hidden = true)
} 
if (users[currentUser].recipies.indexOf(recipeName) !== -1) {
 addRecipe.forEach(el => el.hidden = true)
 deleteRecipe.forEach(el => el.hidden = false)
}
}

// добавление комментариев
FormsComment.forEach(form => {
form.addEventListener('submit', function(e){
 e.preventDefault()
 let comment = form.querySelector('textarea')
 let newComment = `<div class="comment">
 <p>${currentUser}</p>
 <div class="commentText">
 <p>${comment.value}</p>
 <div class="redact">
 <img src="images/delete.png" class="imgDelete" alt="delete">
 <img src="images/edit.png" class="imgEdit" alt="edit">
 <img src="images/ok.png" class="imgOk" alt="ok" hidden>
 </div>
 </div>
</div>`
 if (!comments[location.hash]){
 comments[location.hash] = []
 }  
 comments[location.hash].unshift(newComment)
 comment.value = ''
 refreshComments ()
 deleteComment()

 localStorage.setItem('comments', JSON.stringify(comments))

})
})

// вывод комментариев
function refreshComments (){
let Inner = document.querySelector(`${location.hash}`).querySelector('.allComments')
if (Inner) {
 Inner.innerHTML = []
 let prev = document.querySelector(`${location.hash} .previous`)

 if (comments[location.hash]) {
 comments[location.hash].forEach(comment => {
 let com = document.createElement('div')
 com.innerHTML = comment
 Inner.append(com)
 prev.hidden = false
 })

 } else {
 prev.hidden = true

 }
}
showComments ()
}
// удаление и изменение комментариев
function deleteComment(){
let commentsContainer = document.querySelector(`${location.hash} .allComments`)
if (commentsContainer) {
 commentsContainer.addEventListener('click', function(e){
 let targetComment = e.target.parentElement.parentElement.parentElement

 if(e.target.classList.contains('imgDelete')) {
 targetComment.parentElement.removeChild(targetComment)
 
 }

 if (e.target.classList.contains('imgEdit')){
 e.target.hidden = true
 e.target.parentElement.querySelector('.imgOk').hidden = false
 let targetString = e.target.parentElement.parentElement.querySelector('p') || e.target.parentElement.parentElement.querySelector('textarea')
 let text = targetString.innerHTML
 targetString.outerHTML = `<textarea name="EditComment" style="width:95%">${text}</textarea>`
 }

 if (e.target.classList.contains('imgOk')){
 e.target.parentElement.querySelector('.imgOk').hidden = true
 e.target.parentElement.querySelector('.imgEdit').hidden = false
 let targetString = e.target.parentElement.parentElement.querySelector('textarea') || e.target.parentElement.parentElement.querySelector('p')
 let text = targetString.value || targetString.innerHTML
 targetString.outerHTML = `<p>${text}</p>`
 }
 comments[location.hash] = []
 let AllComments = commentsContainer.querySelectorAll('.comment')
 AllComments.forEach(c => {
 c = c.outerHTML
 comments[location.hash].push(c)
 })
 localStorage.setItem('comments', JSON.stringify(comments))
 })

}
}
// как показываются комментарии для конкретного пользователя
function showComments (){
let DIV = document.querySelector(`${location.hash} .comments`)
if(DIV){
 let Name = DIV.querySelector('form label')
 Name.innerHTML = currentUser
 let redactors = document.querySelectorAll('.redact')
 redactors.forEach(red => {
 red.hidden = true
 let n = red.parentElement.parentElement.querySelector('p').innerHTML
 if (n === currentUser) {
 red.hidden = false
 }
 })

}

}

// появление надписи по буквам
function typeText (){
let type = document.querySelector('.type')
let text = type.innerHTML
let out = ''
let i = 0
function typeLine (){
 let interval = setTimeout (function(){
 out += text[i]
 type.innerHTML = out
 i++
 if (i >= text.length) {
 clearTimeout (interval)
 return true
 }
 typeLine()
 }, 90)
}
typeLine()
}
typeText()

window.addEventListener('hashchange', locationChanged)
locationChanged()

// добавить комментарии изначально
function addAllCommentsAndUsers(){
    localStorage.setItem('comments', JSON.stringify(FirstComments))
    localStorage.setItem('users', JSON.stringify(FirstUsers))
    }
    

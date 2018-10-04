(function() {

    var map = L.map('map', {
        zoomControl: false,
        maxZoom: 18,
        minZoom: 16
    }).setView([47.24015, 39.71067], 17);

    var icons = {
        park: L.icon({
            iconUrl: 'img/forest.png',
            iconSize: [27, 32]
        }),
        monument: L.icon({
            iconUrl: 'img/statue-2.png',
            iconSize: [27, 32]
        }),
        church: L.icon({
            iconUrl: 'img/church-2.png',
            iconSize: [27, 32]
        }),
        arena: L.icon({
            iconUrl: 'img/fitness.png',
            iconSize: [27, 32]
        }),
        pool: L.icon({
            iconUrl: 'img/swimming.png',
            iconSize: [27, 32]
        }),
        football: L.icon({
            iconUrl: 'img/soccer.png',
            iconSize: [27, 32]
        }),
        sportground: L.icon({
            iconUrl: 'img/tebletennis.png',
            iconSize: [27, 32]
        }),
        playground: L.icon({
            iconUrl: 'img/playground.png',
            iconSize: [27, 32]
        }),
        dogground: L.icon({
            iconUrl: 'img/animal-shelter-export.png',
            iconSize: [27, 32]
        }),
        gymground: L.icon({
            iconUrl: 'img/horizontalbar.png',
            iconSize: [27, 32]
        }),
        busstation: L.icon({
            iconUrl: 'img/bus.png',
            iconSize: [27, 32]
        }),
        toilet: L.icon({
            iconUrl: 'img/toilets.png',
            iconSize: [27, 32]
        })
    };

    var markers = [
        {
            position: [47.24015, 39.71067],
            icon: icons.park,
            popupContent: "Парк <i>ДГТУ</i>",
            popupDescription: "Студенческий парк"
        },
        {
            position: [47.23935, 39.7105],
            icon: icons.monument,
            popupContent: "Памятник студентам и сотрудникам <i>РИСХМ</i>",
            popupDescription: "Памятник студентам, преподавателям и сотрудникам РИСХМ, защищавшим Родину в годы ВОВ"
        },
        {
            position: [47.24108, 39.70948],
            icon: icons.arena,
            popupContent: "Легкоатлетический манеж <i>ДГТУ</i>",
            popupDescription: "<p>Адрес: ул. Юфимцева, 16</p>" +
            "<p>Телефон: +7 (863) 232-42-61</p>" +
            "<p>Часы работы: 8:00-20:00</p>"
        },
        {
            position: [47.2394, 39.7092],
            icon: icons.football,
            popupContent: "Футбольное поле",
            popupDescription: "Травяное футбольное поле. Возможна аренда"
        },
        {
            position: [47.23878, 39.710967],
            icon: icons.pool,
            popupContent: "Бассейн <i>Универ</i>",
            popupDescription: "<p>Адрес: пл. Гагарина, 1</p>" +
            "<p>Телефон: +7 (863) 238-13-35</p>" +
            "<p>Часы работы: </p>" +
            "<p>пн-сб: 7:00-22:00</p>" +
            "<p>вс: 8:00-21:00</p>"
        },
        {
            position: [47.23936, 39.7111],
            icon: icons.church,
            popupContent: "Храм святой Татианы",
            popupDescription: "Адрес: пл. Гагарина, 1"
        },
        {
            position: [47.240434, 39.709144],
            icon: icons.dogground,
            popupContent: "Площадка для собак",
            popupDescription: "Дрессировка собак"
        },
        {
            position: [47.24007, 39.71075],
            icon: icons.playground,
            popupContent: "Детская площадка",
            popupDescription: "Игровая площадка для детей"
        },
        {
            position: [47.23885, 39.71022],
            icon: icons.sportground,
            popupContent: "Спортивная площадка",
            popupDescription: "Площадка со спортивными снарядами"
        },
        {
            position: [47.24065, 39.71022],
            icon: icons.gymground,
            popupContent: "Тренажёрная площадка",
            popupDescription: "Площадка с уличными тренажёрами"
        },
        {
            position: [47.23933, 39.71361],
            icon: icons.busstation,
            popupContent: "Остановка <i>Общежитие РИСИ</i>",
            popupDescription: "<p>Автобусы: 1, 33, 35, 35А, 46, 47, 58, 65, 77, 78, 90, 92А, 99</p>" +
            "<p>Троллейбусы: 6</p>" +
            "<p>Маршрутные такси: 25, 47, 49, 65, 77, 83, 92</p>"
        },
        {
            position: [47.23873, 39.71324],
            icon: icons.busstation,
            popupContent: "Остановка <i>Общежитие РИСИ</i>",
            popupDescription: "<p>Автобусы: 1, 33, 35, 35А, 46, 47, 58, 65, 77, 78, 90, 92А, 99</p>" +
            "<p>Троллейбусы: 6</p>" +
            "<p>Маршрутные такси: 25, 47, 49, 65, 77, 83, 92</p>"
        },
        {
            position: [47.23625, 39.71222],
            icon: icons.busstation,
            popupContent: "Остановка <i>Площадь Гагарина</i>",
            popupDescription: "Маршрутные такси: 25, 93"
        },
        {
            position: [47.23607, 39.71233],
            icon: icons.busstation,
            popupContent: "Остановка <i>Площадь Гагарина</i>",
            popupDescription: "Маршрутные такси: 93"
        },
        {
            position: [47.23917, 39.71153],
            icon: icons.toilet,
            popupContent: "Туалет",
            popupDescription: "Описание излишне"
        },
    ];

    var zoomControl = L.control.zoom({
        position: 'topright'
    });

    zoomControl.addTo(map);

    var measureControl = L.control.measure({
        primaryLengthUnit: 'meters',
        secondaryLengthUnit: 'meters',
        primaryAreaUnit: 'sqmeters'
    });

    measureControl.addTo(map);
    L.control.mousePosition().addTo(map);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);

    for(var i = 0; i < markers.length; i++){
        L.marker(markers[i].position, {icon: markers[i].icon})
            .bindPopup(markers[i].popupContent)
            .addTo(map);
    }

    map.on('click', function(e){
        console.log(e.latlng);
    });

    map.on('dblclick', function(e){
        L.marker([e.latlng.lat, e.latlng.lng ], {icon: icons.monument})
        .bindPopup(JSON.stringify(e.latlng))
        .addTo(map);
    });

    const MyModel = Backbone.Model.extend();

    var ListItemView = Mn.View.extend({
        tagName: 'li',
        className: 'list-group-item',
        events: {
            'click': 'toMarker'
        },
        toMarker: function(e){
            map.setView(this.model.attributes.position);
            modalModel.set('popupContent', this.model.attributes.popupContent);
            modalModel.set('popupDescription', this.model.attributes.popupDescription);
            modal.render();

            $('#myModal').modal('show');
        },
        template: _.template('<%= popupContent %>')
    });

    var ListView = Mn.CollectionView.extend({
        tagName: 'ul',
        className: 'list-group',

        childView: ListItemView
    });

    var list = new Backbone.Collection(markers);

    var listView = new ListView({
        collection: list
    });

    const sidebarView = Mn.View.extend({
        template: '#template-sidebar',
        regions: {
            'region-list': '#region-list'
        },
        events: {
            'click .btn': 'changeModel'
        },
        onRender: function() {
            this.showChildView('region-list', listView);
        }
    });

    var modalModel = new MyModel({'popupContent': '', 'popupDescription': ''});

    const modalView = Mn.View.extend({
        template: '#template-modal',
        model: modalModel
    });

    const modal = new modalView();
    modal.render();

    $('body').append(modal.$el);


    const mainView = Mn.View.extend({
        template: '#template-main',
        regions:{
            'region-sidebar': '#region-sidebar',
            'region-modal': '#region-modal'
        },
        onRender() {
            this.showChildView('region-sidebar', new sidebarView({
              model: this.model
            }));
        }
    });

    const App = Mn.Application.extend({
      region: '#app',

      onBeforeStart(app, options) {
        this.model = new MyModel(options.data);
      },

      onStart(app, options) {
        this.showView(new mainView({
          model: this.model
        }));
        Backbone.history.start();
      }
    });

    const app = new App();

    app.start({
      data: markers
    });

})();
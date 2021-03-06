"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var film_actions_1 = require("../actions/film-actions");
var film_selection_view_1 = require("../components/film-selection-view");
var film_view_1 = require("../components/film-view");
var angular2_redux_util_1 = require("angular2-redux-util");
var FilmsComponent = (function () {
    function FilmsComponent(appStore, _filmActions) {
        this.appStore = appStore;
        this._filmActions = _filmActions;
        this.currentFilm = null;
        this.isFetchingCurrentFilm = false;
        var self = this;
        this.appStore.subscribe(function (state) {
            self.filmsCount = state.films.count;
            self.currentFilm = state.films.currentFilm;
            self.isFetchingCurrentFilm = state.films.isFetchingFilm;
        });
        this.appStore.dispatch(_filmActions.fetchFilms());
    }
    FilmsComponent.prototype.setCurrentFilm = function (index) {
        this.appStore.dispatch(this._filmActions.setCurrentFilm(index));
        this.appStore.dispatch(this._filmActions.fetchFilm(index));
    };
    FilmsComponent = __decorate([
        core_1.Component({
            selector: 'films-component',
            template: "\n        <h3>Films</h3>\n        <film-selection [count]=\"filmsCount\" (current)=\"setCurrentFilm($event)\"></film-selection>\n        <div [ngClass]=\"{'text-muted':isFetchingCurrentFilm,'text-primary':!isFetchingCurrentFilm}\" style=\"margin-top:20px;\">\n            <film [data]=\"currentFilm\" [loading]=\"isFetchingCurrentFilm\"></film>\n        </div>\n\n    ",
            directives: [film_selection_view_1.FilmSelectionView, film_view_1.FilmView]
        }), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, film_actions_1.FilmActions])
    ], FilmsComponent);
    return FilmsComponent;
}());
exports.FilmsComponent = FilmsComponent;
//# sourceMappingURL=films-component.js.map
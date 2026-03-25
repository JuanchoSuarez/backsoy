export default class Song {
    constructor(id, name, rating, description, creationDate, artist, reviews = []) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.creationDate = creationDate;
        this.artist = artist;
        this.reviews = reviews;
    }

    // id
    get idValue() {
        return this.id;
    }

    set idValue(value) {
        this.id = value;
    }

    // name
    get nameValue() {
        return this.name;
    }

    set nameValue(value) {
        this.name = value;
    }

    // rating
    get ratingValue() {
        return this.rating;
    }

    set ratingValue(value) {
        this.rating = value;
    }

    // description
    get descriptionValue() {
        return this.description;
    }

    set descriptionValue(value) {
        this.description = value;
    }

    // creationDate
    get creationDateValue() {
        return this.creationDate;
    }

    set creationDateValue(value) {
        this.creationDate = value;
    }

    // artist
    get artistValue() {
        return this.artist;
    }

    set artistValue(value) {
        this.artist = value;
    }

    // reviews (one-to-many)
    get reviewsValue() {
        return this.reviews;
    }

    set reviewsValue(value) {
        this.reviews = value;
    }

    addReview(review) {
        this.reviews.push(review);
    }

    removeReview(reviewId) {
        this.reviews = this.reviews.filter(r => r.id !== reviewId);
    }
}
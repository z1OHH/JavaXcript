class Media {
    constructor(info) {
        this.publisDate = info.publisDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

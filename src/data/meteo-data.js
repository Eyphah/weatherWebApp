const meteoDataByCity = [
    {
        city: 'Lille',
        data: [
            { pour : 'janvier', temp_min: 1.7, temp_max: 6.6, pluviometrie: 58, ensoleillement: 62, jours_gel: 10.2 },
            { pour : 'février', temp_min: 1.9, temp_max: 7.5, pluviometrie: 51, ensoleillement: 74, jours_gel: 8.6 },
            { pour : 'mars', temp_min: 3.8, temp_max: 11.2, pluviometrie: 52, ensoleillement: 127, jours_gel: 4.3 },
            { pour : 'avril', temp_min: 5.9, temp_max: 15, pluviometrie: 45, ensoleillement: 176, jours_gel: 1.3 },
            { pour : 'mai', temp_min: 9.3, temp_max: 18.4, pluviometrie: 62, ensoleillement: 196, jours_gel: 0 },
            { pour : 'juin', temp_min: 12.1, temp_max: 21.3, pluviometrie: 64, ensoleillement: 202, jours_gel: 0 },
            { pour : 'juillet', temp_min: 14.2, temp_max: 23.7, pluviometrie: 68, ensoleillement: 210, jours_gel: 0 },
            { pour : 'août', temp_min: 14, temp_max: 23.7, pluviometrie: 71, ensoleillement: 197, jours_gel: 0 },
            { pour : 'septembre', temp_min: 11.4, temp_max: 20.2, pluviometrie: 57, ensoleillement: 155, jours_gel: 0 },
            { pour : 'octobre', temp_min: 8.4, temp_max: 15.4, pluviometrie: 64, ensoleillement: 115, jours_gel: 0.5 },
            { pour : 'novembre', temp_min: 4.9, temp_max: 10.3, pluviometrie: 75, ensoleillement: 62, jours_gel: 3 },
            { pour : 'décembre', temp_min: 2.3, temp_max: 7, pluviometrie: 73, ensoleillement: 53, jours_gel: 9.3 }
        ]
    },
    {
        city: 'Bordeaux',
        data: [
            { pour : 'janvier', temp_min: 3.7, temp_max: 10.5, pluviometrie: 87, ensoleillement: 90, jours_gel: 7.3 },
            { pour : 'février', temp_min: 3.6, temp_max: 12, pluviometrie: 67, ensoleillement: 117, jours_gel: 6.3 },
            { pour : 'mars', temp_min: 5.8, temp_max: 15.5, pluviometrie: 63, ensoleillement: 170, jours_gel: 1.8 },
            { pour : 'avril', temp_min: 8, temp_max: 18, pluviometrie: 76, ensoleillement: 186, jours_gel: 0.1 },
            { pour : 'mai', temp_min: 11.4, temp_max: 21.7, pluviometrie: 71, ensoleillement: 221, jours_gel: 0 },
            { pour : 'juin', temp_min: 14.6, temp_max: 25, pluviometrie: 70, ensoleillement: 238, jours_gel: 0 },
            { pour : 'juillet', temp_min: 16.2, temp_max: 27.1, pluviometrie: 49, ensoleillement: 256, jours_gel: 0 },
            { pour : 'août', temp_min: 16.3, temp_max: 27.6, pluviometrie: 57, ensoleillement: 249, jours_gel: 0 },
            { pour : 'septembre', temp_min: 13.3, temp_max: 24.2, pluviometrie: 81, ensoleillement: 209, jours_gel: 0 },
            { pour : 'octobre', temp_min: 10.7, temp_max: 19.6, pluviometrie: 83, ensoleillement: 150, jours_gel: 0.1 },
            { pour : 'novembre', temp_min: 6.7, temp_max: 14.1, pluviometrie: 115, ensoleillement: 100, jours_gel: 1.9 },
            { pour : 'décembre', temp_min: 4.4, temp_max: 11, pluviometrie: 106, ensoleillement: 84, jours_gel: 5.8 }
        ]
    },
    {
        city: 'Brest',
        data: [
            { pour : 'janvier', temp_min: 4.6, temp_max: 9.7, pluviometrie: 143, ensoleillement: 61, jours_gel: 3.8 },
            { pour : 'février', temp_min: 4.3, temp_max: 10, pluviometrie: 119, ensoleillement: 82, jours_gel: 3.8 },
            { pour : 'mars', temp_min: 5.4, temp_max: 11.9, pluviometrie: 82, ensoleillement: 122, jours_gel: 1.5 },
            { pour : 'avril', temp_min: 6.3, temp_max: 13.9, pluviometrie: 92, ensoleillement: 165, jours_gel: 0.5 },
            { pour : 'mai', temp_min: 8.9, temp_max: 16.8, pluviometrie: 75, ensoleillement: 188, jours_gel: 0.1 },
            { pour : 'juin', temp_min: 11.4, temp_max: 19.1, pluviometrie: 65, ensoleillement: 184, jours_gel: 0 },
            { pour : 'juillet', temp_min: 13.1, temp_max: 20.8, pluviometrie: 71, ensoleillement: 180, jours_gel: 0 },
            { pour : 'août', temp_min: 13.2, temp_max: 20.9, pluviometrie: 75, ensoleillement: 172, jours_gel: 0 },
            { pour : 'septembre', temp_min: 11.5, temp_max: 19.3, pluviometrie: 79, ensoleillement: 158, jours_gel: 0 },
            { pour : 'octobre', temp_min: 9.6, temp_max: 16, pluviometrie: 129, ensoleillement: 109, jours_gel: 0.1 },
            { pour : 'novembre', temp_min: 7, temp_max: 12.5, pluviometrie: 147, ensoleillement: 72, jours_gel: 0.8 },
            { pour : 'décembre', temp_min: 5, temp_max: 10.3, pluviometrie: 155, ensoleillement: 61, jours_gel: 3.9 }
        ]
    },
    {
        city: 'Strasbourg',
        data: [
            { pour : 'janvier', temp_min: -0.2, temp_max: 5.2, pluviometrie: 35, ensoleillement: 56, jours_gel: 15.3 },
            { pour : 'février', temp_min: 0, temp_max: 7.3, pluviometrie: 34, ensoleillement: 86, jours_gel: 13.7 },
            { pour : 'mars', temp_min: 2.6, temp_max: 12.1, pluviometrie: 39, ensoleillement: 146, jours_gel: 8.4 },
            { pour : 'avril', temp_min: 5.7, temp_max: 17, pluviometrie: 42, ensoleillement: 187, jours_gel: 2.1 },
            { pour : 'mai', temp_min: 10.1, temp_max: 20.9, pluviometrie: 77, ensoleillement: 209, jours_gel: 0 },
            { pour : 'juin', temp_min: 13.4, temp_max: 24.4, pluviometrie: 69, ensoleillement: 226, jours_gel: 0 },
            { pour : 'juillet', temp_min: 14.9, temp_max: 26.4, pluviometrie: 72, ensoleillement: 240, jours_gel: 0 },
            { pour : 'août', temp_min: 14.5, temp_max: 26.1, pluviometrie: 61, ensoleillement: 224, jours_gel: 0 },
            { pour : 'septembre', temp_min: 10.7, temp_max: 21.6, pluviometrie: 55, ensoleillement: 174, jours_gel: 0 },
            { pour : 'octobre', temp_min: 7.2, temp_max: 15.8, pluviometrie: 60, ensoleillement: 100, jours_gel: 1.4 },
            { pour : 'novembre', temp_min: 3.3, temp_max: 9.4, pluviometrie: 47, ensoleillement: 55, jours_gel: 5.8 },
            { pour : 'décembre', temp_min: 0.8, temp_max: 5.9, pluviometrie: 45, ensoleillement: 44, jours_gel: 12.8 }
        ]
    },
    {
        city: 'Paris',
        data: [
            { pour : 'janvier', temp_min: 3.2, temp_max: 7.6, pluviometrie: 48, ensoleillement: 59, jours_gel: 7 },
            { pour : 'février', temp_min: 3.3, temp_max: 8.8, pluviometrie: 42, ensoleillement: 84, jours_gel: 5.3 },
            { pour : 'mars', temp_min: 5.6, temp_max: 12.8, pluviometrie: 45, ensoleillement: 135, jours_gel: 1.4 },
            { pour : 'avril', temp_min: 7.9, temp_max: 16.6, pluviometrie: 46, ensoleillement: 177, jours_gel: 0.1 },
            { pour : 'mai', temp_min: 11.1, temp_max: 20.2, pluviometrie: 69, ensoleillement: 201, jours_gel: 0 },
            { pour : 'juin', temp_min: 14.2, temp_max: 23.4, pluviometrie: 51, ensoleillement: 204, jours_gel: 0 },
            { pour : 'juillet', temp_min: 16.2, temp_max: 25.7, pluviometrie: 59, ensoleillement: 222, jours_gel: 0 },
            { pour : 'août', temp_min: 16, temp_max: 25.6, pluviometrie: 58, ensoleillement: 215, jours_gel: 0 },
            { pour : 'septembre', temp_min: 13, temp_max: 21.5, pluviometrie: 45, ensoleillement: 175, jours_gel: 0 },
            { pour : 'octobre', temp_min: 9.9, temp_max: 16.5, pluviometrie: 55, ensoleillement: 119, jours_gel: 0.1 },
            { pour : 'novembre', temp_min: 6.2, temp_max: 11.1, pluviometrie: 54, ensoleillement: 70, jours_gel: 1.6 },
            { pour : 'décembre', temp_min: 3.8, temp_max: 8, pluviometrie: 62, ensoleillement: 57, jours_gel: 5.4 }
        ]
    },
    {
        city: 'Toulouse',
        data: [
            { pour : 'janvier', temp_min: 2.9, temp_max: 9.7, pluviometrie: 53, ensoleillement: 89, jours_gel: 8.2 },
            { pour : 'février', temp_min: 3.1, temp_max: 11.2, pluviometrie: 37, ensoleillement: 118, jours_gel: 6.5 },
            { pour : 'mars', temp_min: 5.5, temp_max: 15, pluviometrie: 45, ensoleillement: 175, jours_gel: 2.3 },
            { pour : 'avril', temp_min: 7.9, temp_max: 17.6, pluviometrie: 65, ensoleillement: 186, jours_gel: 0.2 },
            { pour : 'mai', temp_min: 11.4, temp_max: 21.4, pluviometrie: 74, ensoleillement: 212, jours_gel: 0 },
            { pour : 'juin', temp_min: 15, temp_max: 25.7, pluviometrie: 64, ensoleillement: 232, jours_gel: 0 },
            { pour : 'juillet', temp_min: 17, temp_max: 28.2, pluviometrie: 40, ensoleillement: 259, jours_gel: 0 },
            { pour : 'août', temp_min: 17.1, temp_max: 28.5, pluviometrie: 45, ensoleillement: 246, jours_gel: 0 },
            { pour : 'septembre', temp_min: 13.9, temp_max: 24.8, pluviometrie: 46, ensoleillement: 210, jours_gel: 0 },
            { pour : 'octobre', temp_min: 10.9, temp_max: 19.7, pluviometrie: 54, ensoleillement: 155, jours_gel: 0.3 },
            { pour : 'novembre', temp_min: 6.3, temp_max: 13.5, pluviometrie: 55, ensoleillement: 100, jours_gel: 2.5 },
            { pour : 'décembre', temp_min: 3.6, temp_max: 10.4, pluviometrie: 49, ensoleillement: 90, jours_gel: 6.6 }
        ]
    },
    {
        city: 'Nice',
        data: [
            { pour : 'janvier', temp_min: 5.8, temp_max: 13.3, pluviometrie: 74, ensoleillement: 157, jours_gel: 0.3 },
            { pour : 'février', temp_min: 6.1, temp_max: 13.5, pluviometrie: 54, ensoleillement: 166, jours_gel: 0.5 },
            { pour : 'mars', temp_min: 8.3, temp_max: 15.4, pluviometrie: 51, ensoleillement: 218, jours_gel: 0.1 },
            { pour : 'avril', temp_min: 10.8, temp_max: 17.4, pluviometrie: 69, ensoleillement: 229, jours_gel: 0 },
            { pour : 'mai', temp_min: 14.5, temp_max: 21, pluviometrie: 40, ensoleillement: 271, jours_gel: 0 },
            { pour : 'juin', temp_min: 18.1, temp_max: 24.7, pluviometrie: 36, ensoleillement: 310, jours_gel: 0 },
            { pour : 'juillet', temp_min: 20.8, temp_max: 27.5, pluviometrie: 14, ensoleillement: 349, jours_gel: 0 },
            { pour : 'août', temp_min: 21.1, temp_max: 27.9, pluviometrie: 17, ensoleillement: 323, jours_gel: 0 },
            { pour : 'septembre', temp_min: 17.7, temp_max: 24.8, pluviometrie: 81, ensoleillement: 250, jours_gel: 0 },
            { pour : 'octobre', temp_min: 14, temp_max: 21, pluviometrie: 128, ensoleillement: 191, jours_gel: 0 },
            { pour : 'novembre', temp_min: 9.7, temp_max: 17, pluviometrie: 138, ensoleillement: 152, jours_gel: 0 },
            { pour : 'décembre', temp_min: 6.6, temp_max: 14.1, pluviometrie: 90, ensoleillement: 145, jours_gel: 0.2 },
        ]
    },
    {
        city: 'Clermont-Ferrand',
        data: [
            { pour : 'janvier', temp_min: 0.6, temp_max: 8, pluviometrie: 27, ensoleillement: 85, jours_gel: 13.5 },
            { pour : 'février', temp_min: 0.6, temp_max: 9.5, pluviometrie: 19, ensoleillement: 110, jours_gel: 12.7 },
            { pour : 'mars', temp_min: 3, temp_max: 13.7, pluviometrie: 26, ensoleillement: 165, jours_gel: 7.3 },
            { pour : 'avril', temp_min: 5.3, temp_max: 16.6, pluviometrie: 51, ensoleillement: 179, jours_gel: 2.8 },
            { pour : 'mai', temp_min: 9.1, temp_max: 20.5, pluviometrie: 67, ensoleillement: 200, jours_gel: 0.1 },
            { pour : 'juin', temp_min: 12.6, temp_max: 24.2, pluviometrie: 68, ensoleillement: 225, jours_gel: 0 },
            { pour : 'juillet', temp_min: 14.5, temp_max: 26.8, pluviometrie: 63, ensoleillement: 256, jours_gel: 0 },
            { pour : 'août', temp_min: 14.4, temp_max: 26.8, pluviometrie: 62, ensoleillement: 243, jours_gel: 0 },
            { pour : 'septembre', temp_min: 10.9, temp_max: 22.5, pluviometrie: 58, ensoleillement: 191, jours_gel: 0 },
            { pour : 'octobre', temp_min: 8.3, temp_max: 17.8, pluviometrie: 49, ensoleillement: 136, jours_gel: 1.4 },
            { pour : 'novembre', temp_min: 3.9, temp_max: 12, pluviometrie: 46, ensoleillement: 90, jours_gel: 5.7 },
            { pour : 'décembre', temp_min: 1.4, temp_max: 8.6, pluviometrie: 29, ensoleillement: 78, jours_gel: 12.1 }
        ]
    },
    {
        city: 'Genève',
        data: [
            { pour : 'janvier', temp_min: -1.1, temp_max: 5.1, pluviometrie: 73, ensoleillement: 61, jours_gel: 19.9 },
            { pour : 'février', temp_min: -1.1, temp_max: 7, pluviometrie: 56, ensoleillement: 96, jours_gel: 17.9 },
            { pour : 'mars', temp_min: 1.7, temp_max: 11.8, pluviometrie: 62, ensoleillement: 161, jours_gel: 9.1 },
            { pour : 'avril', temp_min: 5, temp_max: 15.9, pluviometrie: 67, ensoleillement: 187, jours_gel: 1.7 },
            { pour : 'mai', temp_min: 9.1, temp_max: 20.1, pluviometrie: 78, ensoleillement: 212, jours_gel: 0.1 },
            { pour : 'juin', temp_min: 12.7, temp_max: 24.2, pluviometrie: 83, ensoleillement: 246, jours_gel: 0 },
            { pour : 'juillet', temp_min: 14.6, temp_max: 26.7, pluviometrie: 79, ensoleillement: 269, jours_gel: 0 },
            { pour : 'août', temp_min: 14.2, temp_max: 26.2, pluviometrie: 81, ensoleillement: 242, jours_gel: 0 },
            { pour : 'septembre', temp_min: 10.7, temp_max: 21.1, pluviometrie: 91, ensoleillement: 184, jours_gel: 0 },
            { pour : 'octobre', temp_min: 7.2, temp_max: 15.5, pluviometrie: 96, ensoleillement: 116, jours_gel: 0.9 },
            { pour : 'novembre', temp_min: 2.6, temp_max: 9.3, pluviometrie: 89, ensoleillement: 65, jours_gel: 7.3 },
            { pour : 'décembre', temp_min: -0.2, temp_max: 5.6, pluviometrie: 90, ensoleillement: 48, jours_gel: 16 }
        ]
    }
]

export default meteoDataByCity;

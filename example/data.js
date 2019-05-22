export const  data = [
    {
        id:  '1',
        name: 'Lane 1',
        cards: [
            {
                id: 11,
                name: 'A1',
                img: 'https://picsum.photos/20',
                relations: [
                    {
                        targetId: 24 ,
                        targetAnchor: 'left',
                        sourceAnchor: 'right',
                    }
                    // ,
                    // {
                    //     targetId: 21 ,
                    //     targetAnchor: 'top',
                    //     sourceAnchor: 'top',
                    // }
                ]
            },
            {
                id: 12,
                name: 'B1',
                img: 'https://picsum.photos/20',
                relatedTo: '',
                relations: [
                    // {
                    //     targetId: 11 ,
                    //     targetAnchor: 'left',
                    //     sourceAnchor: 'left',
                    // },
                    {
                        targetId: 13 ,
                        targetAnchor: 'right',
                        sourceAnchor: 'right',
                    }
                ]
            },
            {
                id: 13,
                name: 'C1',
                img: 'https://picsum.photos/20',
                relatedTo: 'A2',
                relations: [
                ]
            },
            {
                id: 14,
                name: 'D1',
                img: 'https://picsum.photos/20',
                relatedTo: 'A2',
                relations: [
                    {
                        targetId: 22 ,
                        targetAnchor: 'left',
                        sourceAnchor: 'right',
                    }
                ]
            }
        ]
    },
    {
        id:  '2',
        name: 'Lane 2',
        cards: [
            {
                id: 21,
                name: 'A2',
                img: 'https://picsum.photos/20',
                relatedTo: 'C3',
                relations: [
                    {
                        targetId: 23 ,
                        targetAnchor: 'right',
                        sourceAnchor: 'right',
                    }
                ]
            },
            {
                id: 22,
                name: 'B2',
                img: 'https://picsum.photos/20',
                relatedTo: '',
                relations: [
                ]
            },
            {
                id: 23,
                name: 'C2',
                img: 'https://picsum.photos/20',
                relatedTo: '',
                relations: []
            },
            {
                id: 24,
                name: 'D2',
                img: 'https://picsum.photos/20',
                relatedTo: '',
                relations: [
                    // {
                    //     targetId: 31,
                    //     targetAnchor: 'left',
                    //     sourceAnchor: 'right',
                    // }
                ]
            }
        ]
    },
    {
        id:  '3',
        name: 'Lane 3',
        cards: [
            {
                id: 31,
                name: 'A3',
                img: 'https://picsum.photos/20',
                relatedTo: 'A1',
                relations: [
                    // {
                    //     targetId: 32,
                    //     targetAnchor: 'right',
                    //     sourceAnchor: 'right',
                    // }
                ]
            },
            {
                id: 32,
                name: 'B3',
                img: 'https://picsum.photos/20',
                relatedTo: '',
                relations: [
                    // {
                    //     targetId: 31,
                    //     targetAnchor: 'left',
                    //     sourceAnchor: 'left',
                    // }
                ]
            },
            {
                id: 33,
                name: 'C3',
                img: 'https://picsum.photos/20',
                relatedTo: 'C1',
                relations: [
                    {
                        targetId: 31,
                        targetAnchor: 'left',
                        sourceAnchor: 'left',
                    },
                    {
                        targetId: 24,
                        targetAnchor: 'right',
                        sourceAnchor: 'bottom',
                    }
                ]
            }
        ]
    }
];

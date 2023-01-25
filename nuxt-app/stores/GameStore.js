import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed } from 'vue'

const getDeckAPI = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

const reds = ['HEARTS', 'DIAMONDS']
const blacks = ['SPADES', 'CLUBS']

function guessMatch(guess, suit) {
    if (guess == 'red') return reds.includes(suit)

    return blacks.includes(suit)
}

const drawCardAPI = computed(() => {})

export const useGameStore = defineStore('GameStore', {
    state() {
        return {
            deckID: null,
            currentGuess: null,
            lastCard: null,
            score: 0,
            loading: true,
        }
    },
    getters: {
        drawCardAPI: (state) => {
            return `https://www.deckofcardsapi.com/api/deck/${state.deckID}/draw/?count=1`
        }
    },
    actions: {
        init() {
            setTimeout(async () => {
                const { deck_id } = await fetch(getDeckAPI).then((r) => r.json())
                this.deckID = deck_id
                this.loading = false
            }, 2000)
        },
        setGuess(color) {
            this.currentGuess = color
        },
        async drawCard() {
            const { cards } = await fetch(this.drawCardAPI).then((r) => r.json())
            this.lastCard = cards[0]

            if(guessMatch(this.currentGuess, this.lastCard.suit)) this.score++
        },
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}

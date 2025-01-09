'use client'

import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import { getStoredCount, setStoredCount } from './utils/localStorage'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const sections = [
  {
    emoji: '🥢',
    title: 'Entradas',
    caloriesPerItem: 140,
    description: 'As entradas que costumam ser mais leves para iniciar a refeição. Exemplos. Sunomono, Shimeji na Manteiga, Guioza, Harumaki Salgado (Rolinho Primavera).'
  },
  {
    emoji: '🍣',
    title: 'Sushis',
    caloriesPerItem: 60,
    description: 'Esta categoria inclui todos os sushis tradicionais e adaptados feitos com arroz temperado e alga. Exemplos. Nigiri, Uramaki, Hossomaki, Hot Rolls, California Rolls.'
  },
  {
    emoji: '🌮',
    title: 'Temakis',
    caloriesPerItem: 275,
    description: 'Abrange cones de alga recheados com arroz, peixe e outros ingredientes. Exemplos. Temaki de Salmão, Temaki de Atum, Temaki com Cream Cheese.'
  },
  {
    emoji: '🐟',
    title: 'Peixes',
    caloriesPerItem: 72,
    description: 'Pratos à base de peixe, em sua maioria crus, sem arroz. Exemplos. Sashimi, Carpaccio, Tartar, Robatas (espetinhos grelhados).'
  },
  {
    emoji: '🔥',
    title: 'Pratos Quentes',
    caloriesPerItem: 156,
    description: 'Qualquer pratos quentes, geralmente fritos ou grelhados. Exemplos. Camarão Empanado, Lula à Dorê, Peixe Grelhado, Harumaki Salgado.'
  },
  {
    emoji: '🍜',
    title: 'Massas',
    caloriesPerItem: 350,
    description: 'Categoria dedicada a pratos de macarrão japonês. Exemplos. Yakisoba, Ramen.'
  },
  {
    emoji: '🍨',
    title: 'Sobremesas',
    caloriesPerItem: 300,
    description: 'Os docinhos que sempre encerram a refeição de forma deliciosa. Exemplos. Sorvete com Coberturas, Tempurá de Sorvete, Harumaki Doce.'
  },
]

export default function Home() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({})
  const [showCalories, setShowCalories] = useState(false)

  useEffect(() => {
    const storedCounts = getStoredCount()
    setCounts(storedCounts)
  }, [])

  useEffect(() => {
    setStoredCount(counts)
  }, [counts])

  const handleCountChange = (section: string, change: number) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [section]: Math.max((prevCounts[section] || 0) + change, 0)
    }))
  }

  const totalCount = Object.values(counts).reduce((sum, count) => sum + count, 0)
  const totalCalories = sections.reduce((sum, section) => 
    sum + (counts[section.title] || 0) * section.caloriesPerItem, 0)

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Contador de Sushi</h1>
          <div className="flex items-center space-x-2 mb-4">
            <Switch
              id="show-calories"
              checked={showCalories}
              onCheckedChange={setShowCalories}
            />
            <Label htmlFor="show-calories">View calories</Label>
          </div>
          <div className="space-y-6">
            {sections.map(({ emoji, title, caloriesPerItem, description }) => (
              <Counter
                key={title}
                emoji={emoji}
                title={title}
                count={counts[title] || 0}
                calories={caloriesPerItem}
                description={description}
                showCalories={showCalories}
                onIncrement={() => handleCountChange(title, 1)}
                onDecrement={() => handleCountChange(title, -1)}
              />
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xl font-semibold text-center">Total: {totalCount}</p>
            {showCalories && (
              <p className="text-lg text-center text-gray-600">
                Total Calories: {totalCalories} cal
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}


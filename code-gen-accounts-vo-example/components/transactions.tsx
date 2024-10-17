'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

type Transaction = {
  id: string
  date: string
  description: string
  amount: number
  type: 'credit' | 'debit'
}

type Account = {
  id: string
  name: string
  balance: number
  currency: string
}

export function TransactionsComponent({ account, onBackClick }: { account: Account, onBackClick: () => void }) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', date: '2023-04-15', description: 'Grocery Store', amount: -42.50, type: 'debit' },
    { id: '2', date: '2023-04-14', description: 'Salary', amount: 3000.00, type: 'credit' },
    { id: '3', date: '2023-04-13', description: 'Restaurant', amount: -75.00, type: 'debit' },
    { id: '4', date: '2023-04-12', description: 'Online Shopping', amount: -120.75, type: 'debit' },
    { id: '5', date: '2023-04-11', description: 'Utilities', amount: -85.00, type: 'debit' },
  ])

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <Button variant="ghost" onClick={onBackClick} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Accounts
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>{account.name}</CardTitle>
          <CardDescription>
            Current Balance: {account.balance.toLocaleString('en-US', { style: 'currency', currency: account.currency })}
          </CardDescription>
        </CardHeader>
      </Card>
      <h2 className="text-xl font-semibold mt-6 mb-4">Recent Transactions</h2>
      <ScrollArea className="h-[calc(100vh-20rem)]">
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <Card key={transaction.id}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <CardTitle className="text-sm font-medium">{transaction.description}</CardTitle>
                  <CardDescription>{transaction.date}</CardDescription>
                </div>
                <div className={`flex items-center ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'credit' ? <ArrowDownRight className="mr-1 h-4 w-4" /> : <ArrowUpRight className="mr-1 h-4 w-4" />}
                  {Math.abs(transaction.amount).toLocaleString('en-US', { style: 'currency', currency: account.currency })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
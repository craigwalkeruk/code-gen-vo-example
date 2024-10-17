'use client'

import { useState } from 'react'
import { ChevronRight, CreditCard, Wallet } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Account = {
  id: string
  name: string
  balance: number
  currency: string
  type: 'checking' | 'savings' | 'credit'
  lastTransaction: {
    amount: number
    date: string
    description: string
  }
}

export function AccountsSummaryComponent({ onAccountClick }: { onAccountClick: (accountId: string) => void }) {
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: '1',
      name: 'Main Checking',
      balance: 2500.75,
      currency: 'EUR',
      type: 'checking',
      lastTransaction: {
        amount: -42.50,
        date: '2023-04-15',
        description: 'Grocery Store'
      }
    },
    {
      id: '2',
      name: 'Savings',
      balance: 10000.00,
      currency: 'EUR',
      type: 'savings',
      lastTransaction: {
        amount: 1000.00,
        date: '2023-04-01',
        description: 'Transfer from Checking'
      }
    },
    {
      id: '3',
      name: 'Credit Card',
      balance: -450.25,
      currency: 'EUR',
      type: 'credit',
      lastTransaction: {
        amount: -75.00,
        date: '2023-04-10',
        description: 'Restaurant'
      }
    }
  ])

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Your Accounts</h1>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {accounts.map((account) => (
            <Card key={account.id} className="cursor-pointer hover:bg-accent transition-colors" onClick={() => onAccountClick(account.id)}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {account.name}
                </CardTitle>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {account.type === 'checking' ? <Wallet className="h-4 w-4" /> : 
                     account.type === 'savings' ? <Wallet className="h-4 w-4" /> : 
                     <CreditCard className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">
                    {account.balance.toLocaleString('en-US', { style: 'currency', currency: account.currency })}
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription className="mt-2 text-xs">
                  Last transaction: {account.lastTransaction.description} - 
                  {account.lastTransaction.amount.toLocaleString('en-US', { style: 'currency', currency: account.currency })}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
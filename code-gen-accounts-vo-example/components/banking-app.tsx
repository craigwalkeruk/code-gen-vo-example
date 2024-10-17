'use client'

import { useState } from 'react'
import AccountsSummary from './accounts-summary'
import Transactions from './transactions'

type Account = {
  id: string
  name: string
  balance: number
  currency: string
}

export function BankingAppComponent() {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null)

  const handleAccountClick = (accountId: string) => {
    // In a real app, you would fetch the account details here
    const account: Account = {
      id: accountId,
      name: 'Main Checking',
      balance: 2500.75,
      currency: 'EUR',
    }
    setSelectedAccount(account)
  }

  const handleBackClick = () => {
    setSelectedAccount(null)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {selectedAccount ? (
        <Transactions account={selectedAccount} onBackClick={handleBackClick} />
      ) : (
        <AccountsSummary onAccountClick={handleAccountClick} />
      )}
    </div>
  )
}
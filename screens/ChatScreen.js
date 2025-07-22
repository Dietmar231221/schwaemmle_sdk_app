// screens/ChatScreen.js
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { findeLokaleAntwort } from '../utils/faqHelper' // ← wichtig!

export default function ChatScreen() {
  const [messages, setMessages] = useState([])

  // Begrüßung beim Start
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hallo! Ich bin dein Poolassistent 🤖\nFrag mich etwas über deinen Pool!',
        createdAt: new Date(),
        user: { _id: 2, name: 'PoolAssistent' },
      },
    ])
  }, [])

  // Wenn der Nutzer eine Nachricht sendet
  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    )

    const userMessage = newMessages[0].text
    const antwort = findeLokaleAntwort(userMessage)

    const replyMessage = {
      _id: Date.now() + 1,
      text: antwort || 'Das weiß ich leider noch nicht. Ich lerne aber ständig dazu!',
      createdAt: new Date(),
      user: { _id: 2, name: 'PoolAssistent' },
    }

    // Antwort des Assistenten anhängen
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, replyMessage)
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{ _id: 1 }}
      placeholder="Frag mich z. B. 'Wie messe ich den pH-Wert?'"
    />
  )
}
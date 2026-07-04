import { useEffect, useRef, useState } from 'react'
import { HACKATHON_FACT, aboutText, achievements, experience, profile, projects, skillGroups } from '../data/portfolioData'

const SUGGESTIONS = ['Projects', 'Skills', 'Experience', 'Education', 'Contact', 'Resume', 'Hackathon']

function RobotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5v3" />
      <circle cx="12" cy="4.5" r="1.2" fill="currentColor" stroke="none" />
      <rect x="4.5" y="8" width="15" height="12" rx="3.2" />
      <path d="M4.5 13H2.5M21.5 13h-2M9 14v1.4M15 14v1.4" strokeLinecap="round" />
      <path d="M8.5 19v1.6M15.5 19v1.6" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12l16-7-5 16-3-7-8-2Z" />
    </svg>
  )
}

function buildReply(rawText) {
  const text = rawText.toLowerCase()

  if (/\b(hi|hello|hey)\b/.test(text)) {
    return `Hey! I'm HusnainAI. Ask me about ${profile.name.split(' ')[0]}'s projects, skills, experience, education, or how to get in touch.`
  }

  if (/(hackathon|173)/.test(text)) {
    return `${HACKATHON_FACT}. It was for the Apni Sehat project — a bilingual AI diabetes companion built with RAG and LLaMA 3.3.`
  }

  const matchedProject = projects.find((p) => text.includes(p.name.toLowerCase().split(' ')[0]))
  if (matchedProject) {
    return `${matchedProject.name}: ${matchedProject.description}${
      matchedProject.liveUrl ? `\nLive Demo: ${matchedProject.liveUrl}` : ''
    }\nCode: ${matchedProject.codeUrl}`
  }

  if (/(project|built|app|qabiliyat|sehat|metabolic)/.test(text)) {
    const list = projects.map((p) => `• ${p.name} — ${p.tagline}`).join('\n')
    return `Here are the key projects:\n${list}\n\nWant details on any of these? Just type the name.`
  }

  if (/(skill|tech|stack|language|tool)/.test(text)) {
    const list = skillGroups.map((g) => `${g.label}: ${g.skills.join(', ')}`).join('\n')
    return `Core skills:\n${list}`
  }

  if (/(experience|work|intern|job|career)/.test(text)) {
    const list = experience.map((e) => `• ${e.role} at ${e.org} (${e.period})`).join('\n')
    return `Work experience:\n${list}`
  }

  if (/(achieve|award|certificat|rank)/.test(text)) {
    const list = achievements.map((a) => `• ${a.title} — ${a.org}`).join('\n')
    return `Achievements:\n${list}`
  }

  if (/(educat|study|degree|university|numl|school)/.test(text)) {
    return `${profile.education.degree} at ${profile.education.school}, ${profile.education.status}.`
  }

  if (/(resume|cv)/.test(text)) {
    return `You can download the resume here: ${profile.resumeUrl}`
  }

  if (/(contact|email|reach|hire|linkedin|github)/.test(text)) {
    return `You can reach Husnain at ${profile.links.email}, on LinkedIn (${profile.links.linkedin}), or GitHub (${profile.links.github}).`
  }

  if (/(who|about|you)/.test(text)) {
    return aboutText.summary
  }

  return "I'm not sure about that one yet, but I can tell you about projects, skills, experience, education, or how to get in touch. Try one of the suggestions below!"
}

function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 'greet',
      role: 'bot',
      text: `Hi, I'm HusnainAI — ask me anything about ${profile.name}'s work.`,
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)
  const idCounterRef = useRef(0)

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  function sendMessage(text) {
    const trimmed = text.trim()
    if (!trimmed) return

    idCounterRef.current += 1
    const userMsg = { id: `u-${idCounterRef.current}`, role: 'user', text: trimmed }
    idCounterRef.current += 1
    const botMsg = { id: `b-${idCounterRef.current}`, role: 'bot', text: buildReply(trimmed) }

    setMessages((prev) => [...prev, userMsg, botMsg])
    setInput('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      <button
        type="button"
        className={`chatbot-toggle${open ? '' : ' pulse'}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close HusnainAI chat' : 'Open HusnainAI chat'}
        aria-expanded={open}
        aria-controls="husnainai-chat-window"
      >
        {open ? <CloseIcon /> : <RobotIcon />}
      </button>

      {open && (
        <div id="husnainai-chat-window" className="chatbot-window" role="dialog" aria-label="HusnainAI chatbot">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-avatar">HA</span>
              <div>
                <div className="chatbot-title">HusnainAI</div>
                <div className="chatbot-status">Online</div>
              </div>
            </div>
            <button type="button" className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close HusnainAI chat">
              <CloseIcon />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg ${msg.role}`} style={{ whiteSpace: 'pre-line' }}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} type="button" className="chatbot-suggestion" onClick={() => sendMessage(s)}>
                {s}
              </button>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask about projects, skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Message HusnainAI"
            />
            <button type="submit" className="chatbot-send" aria-label="Send message">
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Chatbot

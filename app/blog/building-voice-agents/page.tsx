import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, Phone, ExternalLink, Code } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Building Voice Agents That Close Sales | Blog',
  description: 'A technical deep dive into building autonomous voice agents with ElevenLabs, Twilio, and Stripe that can handle the entire sales cycle.',
}

export default function VoiceAgentsArticle() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
                Voice AI
              </span>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  January 18, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Building Voice Agents That Close Sales: A Technical Deep Dive
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              From conversation to payment in one call. How we integrated ElevenLabs, Twilio, and Stripe
              to create autonomous voice agents that generate revenue 24/7.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>The Problem with Current Voice Agents</h2>

            <p>
              Most voice agents today can do one thing well: have conversations. They can qualify leads,
              answer questions, and route calls. But the moment someone says &quot;I want to buy,&quot; they hit a wall.
            </p>

            <p>
              The agent has to transfer to a human. The human has to process the payment. And in that
              transition, you lose 30-40% of your conversions. The momentum dies.
            </p>

            <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl my-8">
              <p className="text-red-400 font-semibold mb-2">The Conversion Killer</p>
              <p className="text-slate-300 mb-0">
                Every transfer point in a sales process is a leak. When you hand off from AI to human
                for payment processing, you&apos;re adding friction at the exact moment the customer is
                ready to commit.
              </p>
            </div>

            <h2>Our Solution: Sofia AI</h2>

            <p>
              Sofia is a voice agent that can take a sale from &quot;hello&quot; to payment confirmation without
              any human intervention. Here&apos;s the architecture:
            </p>

            <h3>The Tech Stack</h3>

            <div className="p-6 bg-slate-800/50 border border-purple-500/20 rounded-xl my-8">
              <div className="font-mono text-sm overflow-x-auto">
                <pre className="text-slate-300">{`┌────────────────────────────────────────────┐
│              INCOMING CALL                 │
│          (Twilio Programmable Voice)       │
└─────────────────────┬──────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────┐
│           ELEVENLABS VOICE AI              │
│  - Natural conversation                    │
│  - Emotion detection                       │
│  - Real-time transcription                 │
└─────────────────────┬──────────────────────┘
                      │
                      ▼
┌────────────────────────────────────────────┐
│           FASTAPI BACKEND                  │
│  - Session management                      │
│  - Product catalog                         │
│  - Objection handling logic                │
└─────────────────────┬──────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
┌───────────────┐           ┌───────────────┐
│ STRIPE API   │           │ TWILIO SMS    │
│ - Payment    │           │ - Send link   │
│ - Webhooks   │           │ - Confirm     │
└───────┬───────┘           └───────────────┘
        │
        ▼
┌────────────────────────────────────────────┐
│         REAL-TIME CONFIRMATION             │
│  Sofia confirms payment in same call       │
└────────────────────────────────────────────┘`}</pre>
              </div>
            </div>

            <h3>The Magic: Push-to-Link Payments</h3>

            <p>
              The key innovation is what we call &quot;Push-to-Link&quot; payments. When the customer expresses
              intent to buy, Sofia:
            </p>

            <ol>
              <li>Generates a Stripe Payment Link with the exact items discussed</li>
              <li>Sends it via SMS to the customer&apos;s phone - while they&apos;re still on the call</li>
              <li>Keeps them engaged: &quot;I just sent you a payment link. You can open it now.&quot;</li>
              <li>Monitors Stripe webhooks for payment confirmation</li>
              <li>Confirms the purchase in the same conversation: &quot;Got it! Your order is confirmed.&quot;</li>
            </ol>

            <p>
              The customer never hangs up. The transition from &quot;I want this&quot; to &quot;I bought this&quot; happens
              in under 60 seconds.
            </p>

            <h2>Technical Implementation Details</h2>

            <h3>1. ElevenLabs Conversational AI</h3>

            <p>
              We use ElevenLabs&apos; Conversational AI with a custom voice model trained on sales conversations.
              Key configuration:
            </p>

            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl my-8">
              <pre className="text-sm text-slate-300 overflow-x-auto">{`{
  "voice_settings": {
    "stability": 0.75,
    "similarity_boost": 0.8,
    "style": 0.4,
    "use_speaker_boost": true
  },
  "conversation": {
    "first_message": "Hola, gracias por llamar...",
    "system_prompt": "You are Sofia, a sales agent...",
    "tools": ["create_payment_link", "send_sms"]
  }
}`}</pre>
            </div>

            <h3>2. Stripe Payment Links API</h3>

            <p>
              We create dynamic payment links on-the-fly with customer-specific metadata:
            </p>

            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl my-8">
              <pre className="text-sm text-slate-300 overflow-x-auto">{`async def create_payment_link(items, customer_phone):
    link = await stripe.PaymentLink.create(
        line_items=[{
            "price": item["stripe_price_id"],
            "quantity": item["quantity"]
        } for item in items],
        metadata={
            "call_id": current_call.id,
            "customer_phone": customer_phone
        },
        after_completion={
            "type": "redirect",
            "redirect": {"url": "https://thanks.page"}
        }
    )
    return link.url`}</pre>
            </div>

            <h3>3. Real-Time Webhook Handling</h3>

            <p>
              The backend listens for Stripe webhooks and notifies the voice agent in real-time:
            </p>

            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl my-8">
              <pre className="text-sm text-slate-300 overflow-x-auto">{`@app.post("/webhook/stripe")
async def handle_stripe_webhook(request: Request):
    event = stripe.Event.construct_from(
        await request.json(),
        stripe.api_key
    )

    if event.type == "checkout.session.completed":
        call_id = event.data.object.metadata.get("call_id")

        # Notify the voice agent
        await elevenlabs.send_tool_result(
            call_id=call_id,
            tool="payment_confirmed",
            result={"status": "success"}
        )

    return {"received": True}`}</pre>
            </div>

            <h2>Results</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">47%</div>
                <div className="text-slate-300">Higher conversion rate vs. human handoff</div>
              </div>
              <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt;60s</div>
                <div className="text-slate-300">From intent to payment confirmation</div>
              </div>
            </div>

            <h2>Try It Live</h2>

            <p>
              You can call Sofia right now and experience the full flow:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <a
                href="tel:+528141661014"
                className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center hover:bg-purple-500/20 transition-colors"
              >
                <div className="text-2xl mb-2">🇲🇽</div>
                <div className="text-purple-400 font-bold">+52 814 166 1014</div>
                <div className="text-slate-400 text-sm">Spanish (Mexico)</div>
              </a>
              <a
                href="tel:+18884306777"
                className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-center hover:bg-cyan-500/20 transition-colors"
              >
                <div className="text-2xl mb-2">🇺🇸</div>
                <div className="text-cyan-400 font-bold">+1 888 430 6777</div>
                <div className="text-slate-400 text-sm">English (USA)</div>
              </a>
            </div>

            <h2>Want to Build Something Similar?</h2>

            <p>
              I help businesses implement voice AI agents for sales, support, and lead qualification.
              If you&apos;re interested in deploying this technology for your use case,{' '}
              <a href="https://cal.com/desarrollo-marketing-y-tecnologia-lqmiht" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                let&apos;s talk
              </a>.
            </p>
          </div>

          {/* Author & CTA */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Eduardo Rodriguez</div>
                  <div className="text-sm text-slate-400">AI Engineer & Systems Architect</div>
                </div>
              </div>
              <Link
                href="/case-studies/vocalisai"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                View VocalisAI Case Study <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

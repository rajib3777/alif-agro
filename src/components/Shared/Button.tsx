
import { cn } from '../../lib/cn'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
}

export default function Button({ className, variant='primary', size='md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[.98]'
  const sizes = size === 'lg' ? 'px-5 py-3 text-sm md:text-base' : 'px-4 py-2.5 text-sm'
  const variants = variant === 'primary'
    ? 'bg-gold text-bg hover:brightness-110 shadow-soft'
    : 'bg-white/0 text-mist border border-white/15 hover:bg-white/5'
  return <button className={cn(base, sizes, variants, className)} {...props} />
}

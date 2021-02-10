import createElement from '../../lib/createElement'
import './AppMain.css'

export default function AppMain(...children) {
  return createElement('main', { className: 'AppMain' }, ...children)
}

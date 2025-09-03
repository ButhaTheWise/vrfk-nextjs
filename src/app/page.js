import { Icon } from '@iconify-icon/react';
export default function namePage() {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <header></header>
      <main>
        <div className="alert">
           <Icon icon="material-symbols:10k" width="12" height="12" />
           Important notice with alert icon!
       </div>
      </main>
      <footer></footer>
    </div>
  );
}

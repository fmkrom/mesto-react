import mestoLogo from '../images/__graphics/graphics__logo.png';

function Header(){
    return (
        <section class="header">
              <div class="header__logo">
                <img src={mestoLogo} class="header__vector" alt="Лого" />
              </div>
        </section>
    )
};
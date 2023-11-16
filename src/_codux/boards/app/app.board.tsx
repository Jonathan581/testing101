import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <div>
        <div />
        <div className="welcome-section">
            <h2>Heading 2</h2>
        </div>
        <div>
            <div>
                <button>Button</button>
            </div>
        </div>
        <div />
    </div>,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768
    }
});

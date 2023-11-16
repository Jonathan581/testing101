import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'Main screen',
    Board: () => <div>
        <div />
        <div className="welcome-section">
            <h2>Heading 2</h2>
        </div>
        <div />
        <div />
    </div>,
    isSnippet: true,
});

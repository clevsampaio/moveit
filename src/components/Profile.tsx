import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
	const { level } = useContext(ChallengeContext);

	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/clevsampaio.png" alt="Cleverson Sampaio" />
			<div>
				<strong>Cleverson Sampaio</strong>
				<p>
					<img src="icons/level.svg" alt="Level"/>
					Level {level}
				</p>
			</div>
		</div>
	);
}
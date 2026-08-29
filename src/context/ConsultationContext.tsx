import { createContext, useContext, useState, type ReactNode } from 'react';
import { ConsultationModal } from '../components/ConsultationModal/Index';

type ConsultationContextType = {
	openConsultation: () => void;
	closeConsultation: () => void;
	isConsultationOpen: boolean;
};

const ConsultationContext = createContext<ConsultationContextType | null>(null);

export function ConsultationProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	const openConsultation = () => setIsOpen(true);
	const closeConsultation = () => setIsOpen(false);

	return (
		<ConsultationContext.Provider value={{ openConsultation, closeConsultation, isConsultationOpen: isOpen }}>
			{children}
			<ConsultationModal isOpen={isOpen} onClose={closeConsultation} />
		</ConsultationContext.Provider>
	);
}

export function useConsultation() {
	const context = useContext(ConsultationContext);
	if (!context) {
		throw new Error('useConsultation must be used within a ConsultationProvider');
	}
	return context;
}

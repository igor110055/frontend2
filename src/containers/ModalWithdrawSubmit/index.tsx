import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Modal } from '../../components';
import { IntlProps } from '../../index';
import { Modal as MobileModal } from '../../mobile/components/Modal';

interface ModalWithdrawSubmitProps {
	currency: string;
	onSubmit: () => void;
	show: boolean;
	isMobileDevice?: boolean;
}

type Props = ModalWithdrawSubmitProps & IntlProps;

class ModalWithdrawSubmitComponent extends React.Component<Props> {
	public translate = (e: string) => {
		return this.props.intl.formatMessage({ id: e });
	};

	public render() {
		const { show, isMobileDevice } = this.props;

		return isMobileDevice ? (
			<MobileModal title={this.renderHeaderModalSubmit()} isOpen={this.props.show}>
				<div>{this.renderBodyModalSubmit()}</div>
				<div>{this.renderFooterModalSubmit()}</div>
			</MobileModal>
		) : (
			<Modal
				show={show}
				header={this.renderHeaderModalSubmit()}
				content={this.renderBodyModalSubmit()}
				footer={this.renderFooterModalSubmit()}
			/>
		);
	}

	private renderHeaderModalSubmit = () => {
		return (
			<div className="pg-exchange-modal-submit-header">
				<FormattedMessage id="page.modal.withdraw.success" />
			</div>
		);
	};

	private renderBodyModalSubmit = () => {
		return (
			<div className="pg-exchange-modal-submit-body modal-body__withdraw-submit">
				<FormattedMessage id="page.modal.withdraw.success.message.content" />
			</div>
		);
	};

	private renderFooterModalSubmit = () => {
		return (
			<div className="pg-exchange-modal-submit-footer modal-footer__withdraw-submit">
				<Button
					style={{
						background: 'var(--blue)',
						border: '1px solid #848E9C',
						borderRadius: '23.5px',
					}}
					block={true}
					className="btn-block mr-1 mt-1 btn-lg"
					onClick={this.props.onSubmit}
					size="lg"
					variant="primary"
				>
					{this.translate('page.modal.withdraw.success.button')}
				</Button>
			</div>
		);
	};
}

export const ModalWithdrawSubmit = injectIntl(ModalWithdrawSubmitComponent);

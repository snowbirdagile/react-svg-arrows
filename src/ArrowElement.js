// @flow

import React from 'react';
import isEqual from 'react-fast-compare';

import {
  type ArrowContainerContextType,
  ArrowContainerContextConsumer,
} from './ArrowContainer';

type OuterProps = {
  id: string,
  relations: Array<RelationType>,
  style?: Object,
  className?: string,
  children: React$Node,
};

type InnerProps = OuterProps & {
  context: ArrowContainerContextType,
};

export class ArrowElementNoContext extends React.Component<InnerProps> {
  static defaultProps = {
    relations: [],
  };

  componentDidUpdate(prevProps: InnerProps) {
    if (isEqual(prevProps.relations, this.props.relations)) return;

    this.registerTransitions(this.props.relations);
  }

  componentDidMount() {
    if (this.props.relations.length === 0) {
      return;
    }

    this.registerTransitions(this.props.relations);
  }

  componentWillUnmount() {
    this.unregisterChild();
    this.unregisterTransitions();
  }

  registerTransitions = (newRelations: Array<RelationType>) => {
    const newSourceToTarget = this.generateSourceToTarget(newRelations);

    if (!this.props.context.registerTransitions) {
      throw new Error(
        `Could not find "registerTransition" in the context of ` +
        `<ArrowElement>. Wrap the component in a <ArrowContainer>.`
      );
    }

    this.props.context.registerTransitions(this.props.id, newSourceToTarget);
  }

  generateSourceToTarget = (relations: Array<RelationType>): Array<SourceToTargetType> => {
    const { id } = this.props;

    return relations.map(({ targetId, sourceAnchor, targetAnchor, label, style }: RelationType) => ({
      source: { id, anchor: sourceAnchor },
      target: { id: targetId, anchor: targetAnchor },
      label,
      style,
    }));
  };

  unregisterTransitions = () => {
    if (!this.props.context.unregisterTransitions) {
      throw new Error(
        `Could not find "unregisterTransitions" in the context of ` +
        `<ArrowElement>. Wrap the component in a <ArrowContainer>.`
      );
    }

    this.props.context.unregisterTransitions(this.props.id);
  };

  onRefUpdate = (ref: ?HTMLElement) => {
    if (!ref) return;
    if (!this.props.context.registerChild) {
      throw new Error(
        `Could not find "registerChild" in the context of ` +
        `<ArrowElement>. Wrap the component in a <ArrowContainer>.`
      );
    }

    this.props.context.registerChild(this.props.id, ref);
  };

  unregisterChild = () => {
    if (!this.props.context.unregisterChild) {
      throw new Error(
        `Could not find "unregisterChild" in the context of ` +
        `<ArrowElement>. Wrap the component in a <ArrowContainer>.`
      );
    }

    this.props.context.unregisterChild(this.props.id);
  };

  render() {
    return (
      <div
        style={{ ...this.props.style, position: 'relative' }}
        className={this.props.className}
        ref={this.onRefUpdate}
      >
        {this.props.children}
      </div>
    );
  }
}

const ArrowElementWithContext = (props: OuterProps) => (
  <ArrowContainerContextConsumer>
    {context => <ArrowElementNoContext {...props} context={context} />}
  </ArrowContainerContextConsumer>
);

export default ArrowElementWithContext;
